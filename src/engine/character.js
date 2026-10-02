// Low-poly people whose proportions follow their age, plus a dog.
// Everything is procedural: poses are blended each frame.
import * as THREE from 'three';
import { G, clamp, lerp, damp, angleLerp, dist2 } from './game.js';
import { mat, umat, C, ico, box, cyl, sphere, cone, shadow, torus } from './props.js';

// proportion table by age (years)
const AGES = [0, 1, 2, 4, 7, 10, 13, 16, 22, 40, 60, 80];
const P = {
  leg:   [0.12, 0.17, 0.22, 0.32, 0.42, 0.52, 0.64, 0.74, 0.78, 0.78, 0.76, 0.70],
  torso: [0.2, 0.22, 0.26, 0.32, 0.38, 0.44, 0.5, 0.56, 0.6, 0.62, 0.6, 0.56],
  width: [0.17, 0.18, 0.19, 0.2, 0.21, 0.23, 0.25, 0.28, 0.3, 0.32, 0.31, 0.29],
  head:  [0.15, 0.155, 0.16, 0.165, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17, 0.165],
  arm:   [0.14, 0.17, 0.2, 0.26, 0.32, 0.38, 0.44, 0.5, 0.54, 0.54, 0.52, 0.5],
};
function interp(key, age) {
  const a = clamp(age, 0, 80);
  for (let i = 0; i < AGES.length - 1; i++) {
    if (a <= AGES[i + 1]) { const t = (a - AGES[i]) / (AGES[i + 1] - AGES[i]); return lerp(P[key][i], P[key][i + 1], t); }
  }
  return P[key][P[key].length - 1];
}

const unitCyl = (() => { const g = new THREE.CylinderGeometry(1, 0.9, 1, 6); g.translate(0, -0.5, 0); return g; })();
const unitTorso = (() => { const g = new THREE.CylinderGeometry(0.85, 1, 1, 7); g.translate(0, 0.5, 0); return g; })();
const headGeo = new THREE.IcosahedronGeometry(1, 1);
const handGeo = new THREE.IcosahedronGeometry(1, 0);
const eyeGeo = new THREE.SphereGeometry(1, 5, 4);

export class Character {
  constructor(opts = {}) {
    this.opts = {
      age: 30, skin: C.skin[0], hair: 0x5a3b2a, hairStyle: 'short', shirt: C.blue, pants: C.navy, shoes: 0x3a3030,
      dress: false, name: '', glasses: false, beard: false, scarf: null, hat: null, ...opts,
    };
    this.name = this.opts.name;
    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.root.userData.character = this;
    this.position = this.root.position;
    this.heading = 0;           // radians, 0 = facing +z
    this.targetHeading = 0;
    this.speed = 0;             // current ground speed (for walk anim)
    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseW = {};            // blend weights per pose
    this.anim = {};             // per-pose parameters
    this.moveTarget = null;
    this.path = null;
    this.followTarget = null;
    this.carried = null;        // character carried in arms
    this.carriedBy = null;
    this.extraY = 0;
    this.lookTarget = null;
    this.mood = 'neutral';
    this.blinkT = Math.random() * 3;
    this._build();
    this.setAge(this.opts.age);
    G.world?.addCharacter(this);
  }

  _build() {
    const o = this.opts;
    this.mSkin = umat(o.skin);
    this.mHair = umat(o.hair);
    this.mShirt = umat(o.shirt);
    this.mPants = umat(o.pants);
    this.mShoe = mat(o.shoes);
    const r = this.root;
    this.body = new THREE.Group(); r.add(this.body);           // hips pivot
    this.torsoPivot = new THREE.Group(); this.body.add(this.torsoPivot);
    this.torso = new THREE.Mesh(unitTorso, this.mShirt); this.torsoPivot.add(this.torso);
    this.hips = new THREE.Mesh(unitTorso, o.dress ? this.mShirt : this.mPants); this.body.add(this.hips);
    this.skirt = null;
    if (o.dress) { this.skirt = new THREE.Mesh(new THREE.ConeGeometry(1, 1, 7, 1, true), this.mShirt); this.skirt.material.side = THREE.DoubleSide; this.body.add(this.skirt); }
    this.headPivot = new THREE.Group(); this.torsoPivot.add(this.headPivot);
    this.head = new THREE.Mesh(headGeo, this.mSkin); this.headPivot.add(this.head);
    // eyes & cheeks
    this.eyes = [];
    for (const sx of [-1, 1]) {
      const e = new THREE.Mesh(eyeGeo, mat(0x2a2224, { roughness: 0.4 })); this.head.add(e);
      e.position.set(sx * 0.36, 0.08, 0.86); e.scale.set(0.11, 0.14, 0.08); this.eyes.push(e);
      const ch = new THREE.Mesh(eyeGeo, mat(0xf2a0a0)); this.head.add(ch);
      ch.position.set(sx * 0.55, -0.2, 0.74); ch.scale.set(0.15, 0.09, 0.06);
    }
    this.hair = new THREE.Group(); this.head.add(this.hair);
    this._buildHair();
    if (o.glasses) {
      for (const sx of [-1, 1]) { const g = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.04, 4, 10), mat(0x333333)); g.position.set(sx * 0.36, 0.08, 0.92); this.head.add(g); }
      const br = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.04), mat(0x333333)); br.position.set(0, 0.1, 0.94); this.head.add(br);
    }
    if (o.beard) { const b = new THREE.Mesh(headGeo, this.mHair); b.scale.set(0.7, 0.45, 0.5); b.position.set(0, -0.55, 0.45); this.head.add(b); }
    // limbs: pivots at joints
    this.armL = this._limb(this.torsoPivot, this.mShirt, true);
    this.armR = this._limb(this.torsoPivot, this.mShirt, true);
    this.legL = this._limb(this.body, this.mPants, false);
    this.legR = this._limb(this.body, this.mPants, false);
    if (o.scarf) { this.scarfM = new THREE.Mesh(new THREE.TorusGeometry(1, 0.35, 4, 8), mat(o.scarf)); this.scarfM.rotation.x = Math.PI / 2; this.torsoPivot.add(this.scarfM); }
    if (o.hat) { this.hatM = new THREE.Group(); const c = new THREE.Mesh(new THREE.SphereGeometry(1, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), mat(o.hat)); this.hatM.add(c); const p = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25, 0), mat(0xffffff)); p.position.y = 1.0; this.hatM.add(p); this.hatM.position.y = 0.25; this.hatM.scale.setScalar(1.08); this.head.add(this.hatM); }
    this.cane = null;
    this.root.traverse((m) => { if (m.isMesh) { m.castShadow = true; m.receiveShadow = false; } });
    // soft blob shadow helps readability for tiny characters
    const blob = new THREE.Mesh(new THREE.CircleGeometry(1, 12), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.012; this.root.add(blob); this.blob = blob;
  }

  _buildHair() {
    const o = this.opts;
    while (this.hair.children.length) this.hair.remove(this.hair.children[0]);
    const add = (geo, sx, sy, sz, x, y, z, rx = 0) => { const m = new THREE.Mesh(geo, this.mHair); m.scale.set(sx, sy, sz); m.position.set(x, y, z); m.rotation.x = rx; m.castShadow = true; this.hair.add(m); return m; };
    const cap = new THREE.SphereGeometry(1, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55);
    switch (o.hairStyle) {
      case 'none': break;
      case 'baby': add(new THREE.IcosahedronGeometry(0.25, 0), 1, 1.4, 1, 0, 0.95, 0.15); break;
      case 'bald': add(cap, 1.03, 0.5, 1.03, 0, -0.1, -0.08); break;
      case 'long':
        add(cap, 1.08, 1.0, 1.1, 0, 0.0, -0.04);
        add(new THREE.BoxGeometry(1, 1, 1), 1.9, 1.4, 0.5, 0, -0.6, -0.65);
        break;
      case 'ponytail':
        add(cap, 1.07, 0.95, 1.08, 0, 0.0, -0.05);
        add(new THREE.IcosahedronGeometry(0.4, 0), 1, 1.6, 1, 0, -0.1, -1.15);
        break;
      case 'bun':
        add(cap, 1.07, 0.95, 1.08, 0, 0.0, -0.05);
        add(new THREE.IcosahedronGeometry(0.42, 0), 1, 1, 1, 0, 0.75, -0.6);
        break;
      case 'curly':
        for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; add(new THREE.IcosahedronGeometry(0.36, 0), 1, 1, 1, Math.cos(a) * 0.72, 0.45 + (i % 2) * 0.15, Math.sin(a) * 0.72 - 0.15); }
        add(new THREE.IcosahedronGeometry(0.55, 0), 1, 1, 1, 0, 0.85, -0.1);
        break;
      case 'bob':
        add(cap, 1.1, 1.0, 1.12, 0, 0.0, -0.03);
        add(new THREE.CylinderGeometry(1, 1.05, 1, 8, 1, true), 1.08, 0.7, 1.1, 0, -0.25, -0.05);
        break;
      default: // short
        add(cap, 1.06, 0.8, 1.08, 0, 0.05, -0.06);
        add(new THREE.BoxGeometry(1, 1, 1), 1.2, 0.3, 0.4, 0, 0.62, 0.62, 0.4);
    }
    this.hair.children.forEach((m) => { if (m.geometry.type === 'SphereGeometry' && m.material) m.material.side = THREE.DoubleSide; });
  }

  _limb(parent, m, isArm) {
    const pivot = new THREE.Group(); parent.add(pivot);
    const upper = new THREE.Mesh(unitCyl, m); pivot.add(upper);
    const endM = isArm ? this.mSkin : this.mShoe;
    const end = new THREE.Mesh(handGeo, endM); pivot.add(end);
    return { pivot, upper, end, isArm };
  }

  setAge(age) {
    this.age = age;
    const leg = interp('leg', age), torso = interp('torso', age), w = interp('width', age), hr = interp('head', age) * (age < 3 ? 1.25 : 1), arm = interp('arm', age);
    this.dims = { leg, torso, w, hr, arm };
    const hipY = leg;
    this.body.position.y = hipY;
    this.hips.scale.set(w * 0.9, 0.12, w * 0.7); this.hips.position.y = -0.06;
    this.torsoPivot.position.y = 0.04;
    this.torso.scale.set(w, torso, w * 0.72);
    if (this.skirt) { this.skirt.scale.set(w * 1.5, leg * 0.65, w * 1.25); this.skirt.position.y = -leg * 0.25; }
    this.headPivot.position.y = torso + hr * 0.85;
    this.head.scale.setScalar(hr);
    for (const [L, sx] of [[this.armL, -1], [this.armR, 1]]) {
      L.pivot.position.set(sx * (w + 0.035), torso * 0.88, 0);
      L.upper.scale.set(0.055 + w * 0.12, arm, 0.055 + w * 0.12);
      L.end.scale.setScalar(0.055 + w * 0.08); L.end.position.y = -arm - 0.02;
    }
    for (const [L, sx] of [[this.legL, -1], [this.legR, 1]]) {
      L.pivot.position.set(sx * w * 0.45, 0, 0);
      L.upper.scale.set(0.06 + w * 0.17, leg, 0.06 + w * 0.17);
      L.end.scale.set(0.07 + w * 0.1, 0.05 + w * 0.06, 0.1 + w * 0.15); L.end.position.set(0, -leg + 0.02, 0.04);
    }
    if (this.scarfM) { this.scarfM.scale.set(w * 0.95, w * 0.85, w * 0.6); this.scarfM.position.y = torso * 0.98; }
    this.blob.scale.setScalar(w * 1.6 + 0.08);
    // hair greys with age
    const base = new THREE.Color(this.opts.hair);
    const grey = new THREE.Color(0xd9d6d2);
    const gk = clamp((age - 48) / 25, 0, 0.92);
    this.mHair.color.copy(base).lerp(grey, gk);
    this.height = hipY + torso + hr * 1.9;
    this.radius = Math.max(0.18, w * 1.15);
    this.hunch = clamp((age - 65) / 15, 0, 1) * 0.22;
    return this;
  }
  setOutfit({ shirt, pants, hair, hairStyle } = {}) {
    if (shirt !== undefined) this.mShirt.color.setHex(shirt);
    if (pants !== undefined) this.mPants.color.setHex(pants);
    if (hair !== undefined) { this.opts.hair = hair; this.setAge(this.age); }
    if (hairStyle !== undefined) { this.opts.hairStyle = hairStyle; this._buildHair(); this.root.traverse((m) => { if (m.isMesh && m !== this.blob) m.castShadow = true; }); }
  }
  giveCane(on = true) {
    if (on && !this.cane) {
      this.cane = new THREE.Group();
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.85, 4), mat(C.woodDark)); s.position.y = -0.38; this.cane.add(s);
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 3, 8, Math.PI), mat(C.woodDark)); h.position.set(0.06, 0.04, 0); this.cane.add(h);
      this.armR.end.add(this.cane); this.cane.scale.setScalar(1 / this.armR.end.scale.x);
    } else if (!on && this.cane) { this.cane.parent.remove(this.cane); this.cane = null; }
  }

  // ---------- placement & movement ----------
  place(x, z, heading = null) { this.position.set(x, 0, z); if (heading !== null) { this.heading = this.targetHeading = heading; } this.moveTarget = null; this.path = null; return this; }
  face(x, z) { this.targetHeading = Math.atan2(x - this.position.x, z - this.position.z); return this; }
  faceChar(c) { return this.face(c.position.x, c.position.z); }
  faceNow(x, z) { this.face(x, z); this.heading = this.targetHeading; return this; }
  get walkSpeed() {
    if (this._speedOverride) return this._speedOverride;
    const a = this.age;
    if (a < 1.3) return 1.1; if (a < 3) return 1.5; if (a < 10) return 3.0; if (a < 18) return 3.4; if (a < 60) return 2.9; return 1.6;
  }
  set walkSpeed(v) { this._speedOverride = v; }
  walkTo(x, z, opts = {}) {
    return new Promise((resolve) => {
      this.moveTarget = { x, z, speed: opts.speed ?? this.walkSpeed, resolve, stopDist: opts.stopDist ?? 0.05, run: opts.run };
    });
  }
  async walkPath(points, opts = {}) { for (const [x, z] of points) await this.walkTo(x, z, opts); }
  walkToChar(c, gap = 0.8, opts = {}) {
    const dx = this.position.x - c.position.x, dz = this.position.z - c.position.z; const d = Math.hypot(dx, dz) || 1;
    return this.walkTo(c.position.x + dx / d * gap, c.position.z + dz / d * gap, opts).then(() => this.faceChar(c));
  }
  stop() { if (this.moveTarget) { const r = this.moveTarget.resolve; this.moveTarget = null; r && r(); } }
  follow(c, dist = 1.2) { this.followTarget = c ? { c, dist } : null; }
  lookAt(target) { this.lookTarget = target; }   // Character, Vector3 or null

  setPose(name, params = {}) { this.pose = name; this.anim = params; return this; }

  pickUp(child) {
    this.carried = child; child.carriedBy = this;
    child.moveTarget = null; child.followTarget = null;
    child.setPose('carried');
  }
  putDown(x, z) {
    const c = this.carried; if (!c) return;
    this.carried = null; c.carriedBy = null;
    c.root.rotation.set(0, 0, 0);
    if (x !== undefined) c.place(x, z, this.heading);
    else { const f = 0.6; c.place(this.position.x + Math.sin(this.heading) * f, this.position.z + Math.cos(this.heading) * f, this.heading); }
    c.extraY = 0;
    c.setPose('idle');
  }

  headWorld() { const v = new THREE.Vector3(); this.head.getWorldPosition(v); v.y += this.dims.hr * 1.4; return v; }

  update(dt, t) {
    // movement
    let moving = false;
    if (this.carriedBy) {
      const p = this.carriedBy;
      const off = new THREE.Vector3(0, 0, 0);
      const h = p.heading;
      const fwd = p.pose === 'carryHigh' ? 0.12 : 0.24;
      off.set(Math.sin(h) * fwd, p.body.position.y + p.dims.torso * 0.45 - (this.dims.leg) * 0.3, Math.cos(h) * fwd);
      this.position.copy(p.position).add(off);
      this.heading = this.targetHeading = h + (p.pose === 'carryHigh' ? 0 : Math.PI * 0.5);
    } else if (this.moveTarget) {
      const m = this.moveTarget;
      const dx = m.x - this.position.x, dz = m.z - this.position.z; const d = Math.hypot(dx, dz);
      if (d <= Math.max(m.stopDist, 0.02)) { this.moveTarget = null; m.resolve && m.resolve(); }
      else {
        const sp = Math.min(m.speed * dt, d);
        this.position.x += dx / d * sp; this.position.z += dz / d * sp;
        this.targetHeading = Math.atan2(dx, dz);
        this.speed = m.speed; moving = true;
      }
    } else if (this.followTarget) {
      const { c, dist } = this.followTarget;
      const d = dist2(this.position.x, this.position.z, c.position.x, c.position.z);
      if (d > dist) {
        const sp = Math.min(Math.max(this.walkSpeed, c.speed || 0) * dt * (d > dist * 2 ? 1.4 : 1), d - dist);
        const dx = c.position.x - this.position.x, dz = c.position.z - this.position.z;
        this.position.x += dx / d * sp; this.position.z += dz / d * sp;
        this.targetHeading = Math.atan2(dx, dz); this.speed = this.walkSpeed; moving = true;
      }
    }
    if (!moving && !this._playerMoving) this.speed = damp(this.speed, 0, 10, dt);
    this.heading = angleLerp(this.heading, this.targetHeading, 1 - Math.exp(-10 * dt));
    if (!this.carriedBy) this.root.rotation.y = this.heading;
    else this.root.rotation.y = this.heading;
    if (!this.carriedBy) {
      const lying = this.pose === 'lie' || this.pose === 'lieBack' || this.pose === 'sleep';
      this._lift = damp(this._lift || 0, lying ? this.dims.w * 0.75 : 0, 10, dt);
      this.position.y = this.extraY + this._lift;
    }

    this._animate(dt, t);
  }

  _animate(dt, t) {
    const d = this.dims;
    const isMoving = this.speed > 0.15;
    let pose = this.pose;
    const baby = this.age < 1.3;
    if (pose === 'idle' && isMoving) pose = baby ? 'crawl' : 'walk';
    if (pose === 'crawl' && !isMoving) pose = 'crawlIdle';
    this.walkPhase += dt * (this.speed / Math.max(0.25, d.leg)) * 1.7;
    const ph = this.walkPhase;
    // targets
    let bodyY = d.leg, bodyRX = 0, torsoRX = this.hunch, headRX = 0, headRY = 0;
    let aL = 0, aR = 0, aLz = 0.08, aRz = -0.08, lL = 0, lR = 0, lLz = 0, lRz = 0, rootRX = 0, bodyZ = 0;
    const A = this.anim;
    const breathe = Math.sin(t * 2) * 0.01;
    switch (pose) {
      case 'walk': {
        const s = Math.sin(ph), amp = clamp(this.speed / 3, 0.25, 0.75);
        lL = s * amp; lR = -s * amp; aL = -s * amp * 0.8; aR = s * amp * 0.8;
        bodyY = d.leg - Math.abs(Math.cos(ph)) * 0.03 + 0.015; torsoRX += 0.05 + (this.speed > 3.2 ? 0.12 : 0);
        if (this.cane) { aR = -0.3 + s * 0.15; }
        break;
      }
      case 'crawl':
      case 'crawlIdle': {
        const s = pose === 'crawl' ? Math.sin(ph * 0.8) : 0;
        bodyRX = 1.35; bodyY = d.leg * 0.55 + 0.02; headRX = -1.15;
        aL = -1.35 + s * 0.45; aR = -1.35 - s * 0.45; lL = -1.55 - s * 0.35; lR = -1.55 + s * 0.35;
        bodyZ = 0.02;
        break;
      }
      case 'sitGround': bodyY = d.leg * 0.12 + 0.02; lL = lR = -1.45; lLz = 0.12; lRz = -0.12; aL = aR = A.reach ? -2.7 : -0.4; if (A.reach) { aLz = 0.25; aRz = -0.25; } torsoRX += 0.05 + breathe - (A.look ? 0.15 : 0); headRX = A.look ?? 0; break;
      case 'sit': bodyY = A.h ?? 0.45; lL = lR = -1.45; aL = aR = -0.5; torsoRX += breathe; bodyZ = -0.1; break;
      case 'lie': rootRX = -Math.PI / 2; bodyY = 0.12; aL = aR = -0.1; aLz = 0.4; aRz = -0.4; break;
      case 'lieBack': rootRX = -Math.PI / 2; bodyY = 0.12; aLz = 1.4; aRz = -1.4; lLz = 0.25; lRz = -0.25; break;
      case 'kneel': bodyY = d.leg * 0.55; lL = -1.5; lR = 0.1; torsoRX += 0.1; aL = aR = -0.6; break;
      case 'kneelOpen': bodyY = d.leg * 0.55; lL = -1.5; lR = 0.1; torsoRX += 0.05; aL = aR = -1.2; aLz = 0.6; aRz = -0.6; break;
      case 'crouch': bodyY = d.leg * 0.45; lL = lR = -1.2; torsoRX += 0.5; aL = aR = -1.0; break;
      case 'reach': aL = aR = -2.8; aLz = 0.2; aRz = -0.2; headRX = -0.3; break;
      case 'reachForward': aL = aR = -1.4; break;
      case 'armsOpen': aL = aR = -1.1; aLz = 0.9; aRz = -0.9; break;
      case 'hug': aL = aR = -1.35; aLz = -0.35; aRz = 0.35; torsoRX += 0.12; break;
      case 'carry': case 'carryHigh': aL = aR = -1.0; aLz = -0.5; aRz = 0.5; torsoRX -= 0.08; break;
      case 'carried': bodyY = d.leg * 0.4; lL = lR = -1.2; aL = aR = -0.6; break;
      case 'wave': aR = -2.6 + Math.sin(t * 9) * 0.0; aRz = -0.5 + Math.sin(t * 8) * 0.35; break;
      case 'point': aR = -1.5; break;
      case 'dance': { const s = Math.sin(t * (A.speed ?? 4)); bodyY = d.leg + Math.abs(s) * 0.05; aL = -1.6 + s * 0.4; aR = -1.6 - s * 0.4; aLz = 0.5; aRz = -0.5; lL = s * 0.3; lR = -s * 0.3; break; }
      case 'waltz': { aL = -1.3; aLz = 0.5; aR = -1.6; aRz = -0.2; const s = Math.sin(t * 3); lL = s * 0.25; lR = -s * 0.25; break; }
      case 'jump': { const s = Math.abs(Math.sin(t * 5)); bodyY = d.leg + s * 0.25; aL = aR = -2.4; aLz = 0.3; aRz = -0.3; lL = lR = -s * 0.5; break; }
      case 'cry': headRX = 0.45; aL = aR = -1.9; aLz = -0.6; aRz = 0.6; torsoRX += 0.2 + Math.sin(t * 6) * 0.03; break;
      case 'laugh': headRX = -0.35 + Math.sin(t * 14) * 0.06; torsoRX += Math.sin(t * 14) * 0.04; aL = aR = -0.3; break;
      case 'think': aR = -2.2; aRz = 0.6; headRX = 0.15; break;
      case 'push': { const s = A.phase ?? Math.sin(t * 2); aL = aR = -1.3 - s * 0.3; torsoRX += 0.2 + s * 0.1; lL = -0.3; lR = 0.3; break; }
      case 'swing': bodyY = A.h ?? 0.5; lL = lR = -1.2 + (A.kick ?? 0); aL = aR = -2.6; aLz = 0.15; aRz = -0.15; break;
      case 'bike': { const s = Math.sin(ph); bodyY = A.h ?? 0.68; lL = -1.2 + s * 0.6; lR = -1.2 - s * 0.6; aL = aR = -1.15; torsoRX += 0.35; break; }
      case 'sleep': rootRX = -Math.PI / 2; bodyY = 0.12; aL = aR = -0.2; aLz = 0.2; aRz = -0.2; headRX = 0.0; break;
      case 'rock': bodyY = 0.47; lL = lR = -1.45; aL = aR = -1.0; aLz = -0.5; aRz = 0.5; torsoRX -= 0.15; break;
      case 'read': bodyY = A.h ?? 0.45; lL = lR = -1.45; aL = aR = -1.0; aLz = -0.3; aRz = 0.3; headRX = 0.35; break;
      case 'stand': default: torsoRX += breathe; break;
    }
    const k = 1 - Math.exp(-12 * dt);
    const J = this._j || (this._j = { bodyY, bodyRX, torsoRX, headRX, headRY, aL, aR, aLz, aRz, lL, lR, lLz, lRz, rootRX, bodyZ });
    const set = (key, v) => { J[key] = lerp(J[key], v, k); };
    set('bodyY', bodyY); set('bodyRX', bodyRX); set('torsoRX', torsoRX); set('headRX', headRX);
    set('aL', aL); set('aR', aR); set('aLz', aLz); set('aRz', aRz); set('lL', lL); set('lR', lR); set('lLz', lLz); set('lRz', lRz); set('rootRX', rootRX); set('bodyZ', bodyZ);
    // head look
    let hy = 0;
    if (this.lookTarget) {
      const p = this.lookTarget.position ?? this.lookTarget;
      const a = Math.atan2(p.x - this.position.x, p.z - this.position.z) - this.heading;
      hy = clamp(Math.atan2(Math.sin(a), Math.cos(a)), -1.1, 1.1);
    }
    J.headRY = lerp(J.headRY, hy, k);
    this.body.position.y = J.bodyY; this.body.position.z = J.bodyZ;
    this.body.rotation.x = J.bodyRX;
    this.root.rotation.x = J.rootRX + (this.lean || 0);
    this.root.rotation.z = this.tilt || 0;
    this.torsoPivot.rotation.x = J.torsoRX;
    this.headPivot.rotation.x = J.headRX; this.headPivot.rotation.y = J.headRY;
    this.armL.pivot.rotation.x = J.aL; this.armR.pivot.rotation.x = J.aR;
    this.armL.pivot.rotation.z = J.aLz; this.armR.pivot.rotation.z = J.aRz;
    this.legL.pivot.rotation.x = J.lL; this.legR.pivot.rotation.x = J.lR;
    this.legL.pivot.rotation.z = J.lLz; this.legR.pivot.rotation.z = J.lRz;
    // blink
    this.blinkT -= dt;
    const closed = this.pose === 'sleep' || this.blinkT < 0.12;
    if (this.blinkT < 0) this.blinkT = 2 + Math.random() * 4;
    for (const e of this.eyes) e.scale.y = closed ? 0.02 : 0.14;
    this.blob.visible = J.rootRX > -0.5 && !this.carriedBy;
  }

  remove() { G.world?.removeCharacter(this); this.root.parent?.remove(this.root); }
}

// ---------- the family dog ----------
export class Dog {
  constructor({ color = 0xd8a86a, spot = 0xf4e6d0, size = 1, age = 3 } = {}) {
    this.root = new THREE.Group(); this.position = this.root.position;
    this.size = size; this.age = age;
    this.heading = 0; this.targetHeading = 0; this.speed = 0; this.phase = 0;
    this.moveTarget = null; this.followTarget = null; this.pose = 'idle';
    const m = umat(color), m2 = mat(spot), dark = mat(0x3a2a24);
    const s = size;
    this.bodyG = new THREE.Group(); this.root.add(this.bodyG);
    const body = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25, 0), m); body.scale.set(0.9, 0.8, 1.5); body.position.y = 0.32; this.bodyG.add(body);
    const belly = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 0), m2); belly.scale.set(0.9, 0.7, 1.6); belly.position.set(0, 0.24, 0.02); this.bodyG.add(belly);
    this.headG = new THREE.Group(); this.headG.position.set(0, 0.48, 0.32); this.bodyG.add(this.headG);
    const head = new THREE.Mesh(new THREE.IcosahedronGeometry(0.17, 0), m); this.headG.add(head);
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.11, 0.16), m2); snout.position.set(0, -0.04, 0.15); this.headG.add(snout);
    const nose = new THREE.Mesh(new THREE.IcosahedronGeometry(0.035, 0), dark); nose.position.set(0, -0.01, 0.24); this.headG.add(nose);
    for (const sx of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 4), dark); e.position.set(sx * 0.075, 0.05, 0.13); this.headG.add(e);
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.16, 0.12), umat(color)); ear.material.color.multiplyScalar(0.8); ear.position.set(sx * 0.15, 0.0, -0.02); ear.rotation.z = sx * 0.3; this.headG.add(ear);
    }
    this.tail = new THREE.Group(); this.tail.position.set(0, 0.42, -0.36); this.bodyG.add(this.tail);
    const tl = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.25, 4), m); tl.position.y = 0.12; this.tail.add(tl);
    this.tail.rotation.x = -0.6;
    this.legs = [];
    for (const [x, z] of [[-0.11, 0.2], [0.11, 0.2], [-0.11, -0.2], [0.11, -0.2]]) {
      const p = new THREE.Group(); p.position.set(x, 0.26, z); this.bodyG.add(p);
      const l = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.035, 0.26, 4), m); l.position.y = -0.13; p.add(l);
      this.legs.push(p);
    }
    this.root.scale.setScalar(s);
    shadow(this.root, true, false);
    this.wag = 1;
    G.world?.addCharacter(this);
  }
  place(x, z, h = null) { this.position.set(x, 0, z); if (h !== null) this.heading = this.targetHeading = h; return this; }
  face(x, z) { this.targetHeading = Math.atan2(x - this.position.x, z - this.position.z); return this; }
  faceChar(c) { return this.face(c.position.x, c.position.z); }
  walkTo(x, z, opts = {}) { return new Promise((resolve) => { this.moveTarget = { x, z, speed: opts.speed ?? (this.age > 10 ? 0.9 : 2.6), resolve }; }); }
  follow(c, dist = 1) { this.followTarget = c ? { c, dist } : null; }
  setPose(p) { this.pose = p; return this; }
  get radius() { return 0.3; }
  update(dt, t) {
    let moving = false;
    if (this.moveTarget) {
      const m = this.moveTarget; const dx = m.x - this.position.x, dz = m.z - this.position.z; const d = Math.hypot(dx, dz);
      if (d < 0.05) { this.moveTarget = null; m.resolve(); }
      else { const sp = Math.min(m.speed * dt, d); this.position.x += dx / d * sp; this.position.z += dz / d * sp; this.targetHeading = Math.atan2(dx, dz); this.speed = m.speed; moving = true; }
    } else if (this.followTarget) {
      const { c, dist } = this.followTarget; const d = dist2(this.position.x, this.position.z, c.position.x, c.position.z);
      if (d > dist) { const sp = Math.min((this.age > 10 ? 1.0 : 3.2) * dt, d - dist); const dx = c.position.x - this.position.x, dz = c.position.z - this.position.z; this.position.x += dx / d * sp; this.position.z += dz / d * sp; this.targetHeading = Math.atan2(dx, dz); this.speed = 2.5; moving = true; }
    }
    if (!moving) this.speed = damp(this.speed, 0, 8, dt);
    this.heading = angleLerp(this.heading, this.targetHeading, 1 - Math.exp(-8 * dt));
    this.root.rotation.y = this.heading;
    this.phase += dt * this.speed * 5;
    const s = Math.sin(this.phase);
    const walking = this.speed > 0.2;
    this.legs.forEach((l, i) => { l.rotation.x = walking ? s * 0.6 * (i % 2 ? 1 : -1) * (i < 2 ? 1 : -1) : 0; });
    this.tail.rotation.z = Math.sin(t * (6 + this.wag * 8)) * 0.5 * this.wag;
    if (this.pose === 'sit') { this.bodyG.rotation.x = -0.45; this.bodyG.position.y = -0.06; this.legs[2].rotation.x = this.legs[3].rotation.x = 1.0; }
    else if (this.pose === 'lie') { this.bodyG.rotation.x = 0; this.bodyG.position.y = -0.16; this.legs.forEach((l) => (l.rotation.x = 1.4)); }
    else { this.bodyG.rotation.x = 0; this.bodyG.position.y = walking ? Math.abs(s) * 0.03 : 0; }
    this.headG.rotation.x = this.pose === 'lie' ? 0.3 : Math.sin(t * 1.5) * 0.05;
  }
  headWorld() { const v = new THREE.Vector3(); this.headG.getWorldPosition(v); v.y += 0.3; return v; }
  remove() { G.world?.removeCharacter(this); this.root.parent?.remove(this.root); }
}

// Simple palette presets for the family
export const LOOKS = {
  youMother: { skin: C.skin[1], hair: 0x6b3f2a, hairStyle: 'long', shirt: 0xe58f7a, pants: 0x4f5f8a, dress: false },
  youFather: { skin: C.skin[1], hair: 0x5a3b2a, hairStyle: 'short', shirt: 0x6f9fd0, pants: 0x46506e },
  baby: { skin: C.skin[1], hair: 0x8a5a3a, hairStyle: 'baby', shirt: 0xf6e3a0, pants: 0xf6e3a0, shoes: 0xf6e3a0 },
  mom: { skin: C.skin[0], hair: 0x8b4a2b, hairStyle: 'bun', shirt: 0xd98aa0, pants: 0x5a4a6a, dress: true },
  dad: { skin: C.skin[2], hair: 0x2e2420, hairStyle: 'short', shirt: 0x7fae8a, pants: 0x4a4a58, beard: true },
  grandpa: { skin: C.skin[0], hair: 0xd8d4cf, hairStyle: 'bald', shirt: 0xb69a7a, pants: 0x6a5a4a, glasses: true },
  grandma: { skin: C.skin[0], hair: 0xd8d4cf, hairStyle: 'bun', shirt: 0x9ab0c8, pants: 0x6a6a7a, dress: true, glasses: true },
  theo: { skin: C.skin[3], hair: 0x1e1612, hairStyle: 'curly', shirt: 0xf0b84a, pants: 0x4a6a9a },
  sam: { skin: C.skin[2], hair: 0x2a1e1a, hairStyle: 'curly', shirt: 0x5fa38a, pants: 0x3d3d52 },
  childDaughter: { skin: C.skin[1], hair: 0x7a4a2e, hairStyle: 'ponytail', shirt: 0xf2a3b5, pants: 0x6a8ac8 },
  childSon: { skin: C.skin[1], hair: 0x7a4a2e, hairStyle: 'short', shirt: 0x8ac0e8, pants: 0x5a6a88 },
  pip: { skin: C.skin[2], hair: 0x3a2a22, hairStyle: 'curly', shirt: 0xf3c64a, pants: 0xd9584a, hat: 0xd9584a, scarf: 0x6fb3d9 },
};
export function youLook(age) {
  const m = G.state.identity === 'father' ? LOOKS.youFather : LOOKS.youMother;
  if (age < 1.5) return { ...LOOKS.baby };
  if (age < 9) return { ...m, hairStyle: G.state.identity === 'father' ? 'short' : 'ponytail', shirt: 0xf3c64a, pants: 0x5a7ab8 };
  if (age < 18) return { ...m, hairStyle: G.state.identity === 'father' ? 'short' : 'ponytail', shirt: 0xe07a6a, pants: 0x3d4f7a };
  return { ...m };
}
export function childLook(age) {
  const base = G.state.childKind === 'son' ? LOOKS.childSon : LOOKS.childDaughter;
  if (age < 1.5) return { ...LOOKS.baby, shirt: 0xcfe3f5, pants: 0xcfe3f5, shoes: 0xcfe3f5 };
  return { ...base };
}
