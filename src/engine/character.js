// Low-poly people whose proportions follow their age, plus a dog.
// Stylised after games like Journey and A Short Hike: chunky readable silhouettes,
// big soft heads, minimal faces, sculpted hair, jointed limbs and a little cloth
// that keeps moving after you stop. Everything is procedural; poses blend each frame.
import * as THREE from 'three';
import { G, clamp, lerp, damp, angleLerp, dist2 } from './game.js';
import { mat, umat, C, shadow, shade } from './props.js';

// ---------- proportions by age (years) ----------
const AGES = [0, 1, 2, 4, 7, 10, 13, 16, 22, 40, 60, 80];
const P = {
  leg:   [0.12, 0.16, 0.21, 0.31, 0.41, 0.51, 0.62, 0.72, 0.76, 0.76, 0.74, 0.68],
  torso: [0.2, 0.22, 0.26, 0.31, 0.37, 0.43, 0.49, 0.55, 0.58, 0.6, 0.58, 0.55],
  width: [0.16, 0.17, 0.18, 0.19, 0.2, 0.22, 0.24, 0.27, 0.29, 0.31, 0.31, 0.29],
  head:  [0.16, 0.165, 0.17, 0.175, 0.18, 0.182, 0.184, 0.185, 0.185, 0.185, 0.183, 0.178],
  arm:   [0.14, 0.17, 0.2, 0.26, 0.32, 0.38, 0.44, 0.5, 0.53, 0.53, 0.51, 0.49],
};
function interp(key, age) {
  const a = clamp(age, 0, 80);
  for (let i = 0; i < AGES.length - 1; i++) {
    if (a <= AGES[i + 1]) { const t = (a - AGES[i]) / (AGES[i + 1] - AGES[i]); return lerp(P[key][i], P[key][i + 1], t); }
  }
  return P[key][P[key].length - 1];
}

// ---------- shared unit geometry ----------
function makeHeadGeo() {
  const g = new THREE.IcosahedronGeometry(1, 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    // soft chin, fuller cranium, slightly flattened face
    if (y < -0.05) { const k = 1 - clamp((-0.05 - y) * 0.42, 0, 0.32); x *= k; z *= lerp(1, k, 0.6); }
    if (z < 0) z *= 1.06;
    if (z > 0.6) z = 0.6 + (z - 0.6) * 0.75;
    y *= 1.07;
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
}
const GEO = {
  head: makeHeadGeo(),
  torso: (() => {
    const pts = [[0.0, 0.0], [0.86, 0.0], [0.88, 0.14], [0.8, 0.34], [0.86, 0.58], [0.98, 0.78], [0.94, 0.9], [0.62, 0.99], [0.32, 1.0]].map(([r, y]) => new THREE.Vector2(r, y));
    return new THREE.LatheGeometry(pts, 9);
  })(),
  pelvis: (() => { const g = new THREE.CylinderGeometry(0.95, 0.8, 1, 9); g.translate(0, -0.5, 0); return g; })(),
  limb: (() => { const g = new THREE.CylinderGeometry(1, 0.86, 1, 7); g.translate(0, -0.5, 0); return g; })(),
  joint: new THREE.IcosahedronGeometry(1, 1),
  hand: (() => { const g = new THREE.IcosahedronGeometry(1, 1); g.scale(1, 1.15, 0.78); return g; })(),
  foot: (() => { const g = new THREE.SphereGeometry(1, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55); g.scale(1, 1.6, 1); g.translate(0, -0.35, 0); return g; })(),
  neck: (() => { const g = new THREE.CylinderGeometry(1, 1.1, 1, 7); g.translate(0, 0.5, 0); return g; })(),
  eye: new THREE.SphereGeometry(1, 8, 6),
  ball: new THREE.IcosahedronGeometry(1, 1),
  ball0: new THREE.IcosahedronGeometry(1, 0),
  box: new THREE.BoxGeometry(1, 1, 1),
  smile: new THREE.TorusGeometry(1, 0.22, 4, 10, Math.PI),
  skirt: new THREE.CylinderGeometry(0.62, 1, 1, 10, 1, true),
  cap: new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.52),
  back: new THREE.SphereGeometry(1, 14, 8, Math.PI, Math.PI, Math.PI * 0.25, Math.PI * 0.5),
  bang: (() => { const g = new THREE.ConeGeometry(1, 1, 4); g.rotateX(Math.PI); g.translate(0, -0.5, 0); return g; })(),
  shell: new THREE.CylinderGeometry(1, 1.06, 1, 14, 1, true, 0.75, Math.PI * 2 - 1.5),
  scarfSeg: (() => { const g = new THREE.BoxGeometry(1, 1, 0.3); g.translate(0, -0.5, 0); return g; })(),
};

export class Character {
  constructor(opts = {}) {
    this.opts = {
      age: 30, skin: C.skin[0], hair: 0x5a3b2a, hairStyle: 'short', shirt: C.blue, pants: C.navy, shoes: 0x4a3a36,
      dress: false, name: '', glasses: false, beard: false, scarf: null, hat: null, ...opts,
    };
    this.name = this.opts.name;
    this.root = new THREE.Group();
    this.root.rotation.order = 'YXZ';
    this.root.userData.character = this;
    this.position = this.root.position;
    this.heading = 0; this.targetHeading = 0;
    this.speed = 0; this.walkPhase = 0;
    this.pose = 'idle'; this.anim = {};
    this.moveTarget = null; this.followTarget = null;
    this.carried = null; this.carriedBy = null;
    this.extraY = 0; this.lookTarget = null;
    this.lean = 0; this.tilt = 0;
    this.blinkT = Math.random() * 3;
    this._build();
    this.setAge(this.opts.age);
    G.world?.addCharacter(this);
  }

  // ---------------------------------------------------------------
  _build() {
    const o = this.opts;
    this.mSkin = umat(o.skin, { roughness: 0.75 });
    this.mSkinShade = umat(shade(o.skin, 0.9), { roughness: 0.8 });
    this.mHair = umat(o.hair, { roughness: 0.7, side: THREE.DoubleSide });
    this.mShirt = umat(o.shirt);
    this.mPants = umat(o.pants);
    this.mShoe = umat(o.shoes);
    this.mEye = mat(0x2a2030, { roughness: 0.25 });
    this.mWhite = mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.6 });
    this.mMouth = mat(0x9a4a50);
    this.mCheek = mat(0xf09a98, { roughness: 1 });
    const mesh = (geo, m, parent) => { const x = new THREE.Mesh(geo, m); x.castShadow = true; parent.add(x); return x; };
    this._mesh = mesh;

    this.body = new THREE.Group(); this.root.add(this.body);
    this.pelvis = mesh(GEO.pelvis, o.dress ? this.mShirt : this.mPants, this.body);
    this.torsoPivot = new THREE.Group(); this.body.add(this.torsoPivot);
    this.torso = mesh(GEO.torso, this.mShirt, this.torsoPivot);
    this.neck = mesh(GEO.neck, this.mSkin, this.torsoPivot);
    this.headPivot = new THREE.Group(); this.torsoPivot.add(this.headPivot);
    this.head = mesh(GEO.head, this.mSkin, this.headPivot);
    this.skirt = null;
    if (o.dress) { this.skirt = mesh(GEO.skirt, this.mShirt, this.body); this.skirt.material = umat(o.shirt, { side: THREE.DoubleSide }); }

    // face (in unit head space)
    const H = this.head;
    this.eyes = []; this.lids = [];
    for (const sx of [-1, 1]) {
      const e = mesh(GEO.eye, this.mEye, H); e.position.set(sx * 0.33, 0.04, 0.83); e.scale.set(0.105, 0.14, 0.06); e.castShadow = false; this.eyes.push(e);
      const hl = mesh(GEO.eye, this.mWhite, e); hl.position.set(0.35 * sx, 0.35, 0.8); hl.scale.setScalar(0.32); hl.castShadow = false;
      const brow = mesh(GEO.box, this.mHair, H); brow.position.set(sx * 0.34, 0.27, 0.83); brow.scale.set(0.2, 0.045, 0.05); brow.rotation.z = -sx * 0.12; brow.castShadow = false;
      this.brows = (this.brows || []).concat(brow);
      const ch = mesh(GEO.eye, this.mCheek, H); ch.position.set(sx * 0.52, -0.2, 0.7); ch.scale.set(0.13, 0.08, 0.05); ch.castShadow = false;
      const ear = mesh(GEO.ball, this.mSkin, H); ear.position.set(sx * 0.96, -0.02, -0.02); ear.scale.set(0.13, 0.22, 0.14);
    }
    this.nose = mesh(GEO.ball, this.mSkinShade, H); this.nose.position.set(0, -0.12, 0.92); this.nose.scale.set(0.11, 0.1, 0.1); this.nose.castShadow = false;
    this.mouthSmile = mesh(GEO.smile, this.mMouth, H); this.mouthSmile.position.set(0, -0.36, 0.84); this.mouthSmile.rotation.z = Math.PI; this.mouthSmile.scale.set(0.11, 0.1, 0.1); this.mouthSmile.castShadow = false;
    this.mouthOpen = mesh(GEO.eye, this.mMouth, H); this.mouthOpen.position.set(0, -0.38, 0.84); this.mouthOpen.scale.set(0.1, 0.08, 0.05); this.mouthOpen.visible = false;
    this.mouthSad = mesh(GEO.smile, this.mMouth, H); this.mouthSad.position.set(0, -0.44, 0.83); this.mouthSad.scale.set(0.1, 0.09, 0.1); this.mouthSad.visible = false;

    this.hair = new THREE.Group(); H.add(this.hair);
    this._buildHair();
    if (o.glasses) {
      const gm = mat(0x3a3036);
      for (const sx of [-1, 1]) { const g = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.035, 4, 12), gm); g.position.set(sx * 0.33, 0.05, 0.9); H.add(g); }
      const br = new THREE.Mesh(GEO.box, gm); br.position.set(0, 0.07, 0.95); br.scale.set(0.18, 0.035, 0.035); H.add(br);
    }
    if (o.beard) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55), this.mHair);
      b.scale.set(0.72, 0.5, 0.7); b.position.set(0, -0.3, 0.2); H.add(b); this.beardM = b;
      this.mouthSmile.position.z = 0.9; this.mouthOpen.position.z = 0.9;
    }

    // limbs
    this.armL = this._limb(this.torsoPivot, this.mShirt, this.mSkin, true);
    this.armR = this._limb(this.torsoPivot, this.mShirt, this.mSkin, true);
    this.legL = this._limb(this.body, this.mPants, this.mShoe, false);
    this.legR = this._limb(this.body, this.mPants, this.mShoe, false);

    // a scarf that flutters behind you (Journey nod)
    if (o.scarf) {
      const sm = umat(o.scarf, { side: THREE.DoubleSide });
      this.scarfM = new THREE.Mesh(new THREE.TorusGeometry(1, 0.38, 5, 10), sm); this.scarfM.rotation.x = Math.PI / 2; this.torsoPivot.add(this.scarfM);
      this.scarfTail = []; let parent = this.torsoPivot;
      for (let i = 0; i < 4; i++) {
        const seg = new THREE.Group(); parent.add(seg);
        const m = new THREE.Mesh(GEO.scarfSeg, sm); m.castShadow = true; seg.add(m); seg.userData.m = m;
        this.scarfTail.push(seg); parent = seg; seg.userData.a = 0.2;
      }
    }
    if (o.hat) {
      this.hatM = new THREE.Group();
      const c = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(o.hat)); c.castShadow = true; this.hatM.add(c);
      const band = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.04, 0.22, 12, 1, true), mat(shade(o.hat, 0.8), { side: THREE.DoubleSide })); band.position.y = 0.05; this.hatM.add(band);
      const p = new THREE.Mesh(GEO.ball, mat(0xfff8f0)); p.position.y = 1.05; p.scale.setScalar(0.25); this.hatM.add(p);
      this.hatM.position.y = 0.22; this.hatM.scale.setScalar(1.1); H.add(this.hatM); this.hair.visible = this.opts.hairStyle === 'long';
    }
    this.cane = null;
    // soft contact shadow — grounds the character even under soft light
    const blob = new THREE.Mesh(new THREE.CircleGeometry(1, 16), new THREE.MeshBasicMaterial({ color: 0x1a1020, transparent: true, opacity: 0.16, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2; blob.position.y = 0.012; this.root.add(blob); this.blob = blob;
  }

  _limb(parent, m, endM, isArm) {
    const pivot = new THREE.Group(); parent.add(pivot);
    const upper = new THREE.Mesh(GEO.limb, m); upper.castShadow = true; pivot.add(upper);
    const joint = new THREE.Group(); pivot.add(joint);
    const knob = new THREE.Mesh(GEO.joint, m); knob.castShadow = true; joint.add(knob);
    const lower = new THREE.Mesh(GEO.limb, isArm ? m : m); lower.castShadow = true; joint.add(lower);
    const end = new THREE.Mesh(isArm ? GEO.hand : GEO.foot, endM); end.castShadow = true; joint.add(end);
    return { pivot, upper, joint, knob, lower, end, isArm };
  }

  _buildHair() {
    const o = this.opts, H = this.hair;
    while (H.children.length) H.remove(H.children[0]);
    const add = (geo, s, p, r = [0, 0, 0]) => {
      const m = new THREE.Mesh(geo, this.mHair); m.castShadow = true;
      if (typeof s === 'number') m.scale.setScalar(s); else m.scale.set(...s);
      m.position.set(...p); m.rotation.set(...r); H.add(m); return m;
    };
    const cap = (tilt = -0.32, s = 1.08) => add(GEO.cap, [s, s * 0.98, s], [0, 0.04, -0.02], [tilt, 0, 0]);
    const bangs = (n, len, sweep = 0, y = 0.62, spread = 1.1) => {
      for (let i = 0; i < n; i++) {
        const a = (i / (n - 1) - 0.5) * spread;
        const b = add(GEO.bang, [0.2, len * (0.85 + 0.3 * Math.abs(Math.sin(i * 2.3))), 0.13], [Math.sin(a) * 0.98, y, Math.cos(a) * 0.86], [0.55, a, sweep + a * 0.25]);
        b.position.y += Math.cos(a * 2) * 0.03;
      }
    };
    this.tail = null;
    switch (o.hairStyle) {
      case 'none': break;
      case 'baby': {
        const t = add(GEO.ball0, [0.16, 0.3, 0.16], [0.05, 1.04, 0.15], [0.2, 0, -0.5]);
        add(GEO.ball0, [0.1, 0.18, 0.1], [-0.12, 1.0, 0.25], [0.4, 0, 0.6]);
        break;
      }
      case 'bald': {
        add(GEO.back, [1.04, 0.62, 1.04], [0, -0.14, -0.02]);
        for (const sx of [-1, 1]) add(GEO.ball0, [0.18, 0.2, 0.3], [sx * 0.9, 0.06, -0.25], [0, sx * 0.3, 0]);
        break;
      }
      case 'long': {
        cap(-0.3, 1.09);
        add(GEO.back, [1.08, 1.0, 1.1], [0, -0.05, -0.02]);
        const backPanel = add(GEO.shell, [1.06, 1.5, 1.04], [0, -0.55, -0.02]);
        for (const sx of [-1, 1]) add(GEO.box, [0.22, 1.25, 0.42], [sx * 0.94, -0.45, 0.22], [0, 0, sx * 0.08]);
        bangs(5, 0.42, 0.25, 0.66, 1.25);
        this.tail = backPanel; // sways a little
        break;
      }
      case 'ponytail': {
        cap(-0.3, 1.08);
        add(GEO.back, [1.07, 0.96, 1.08], [0, -0.03, -0.02]);
        bangs(4, 0.34, 0.35, 0.66, 1.0);
        const tie = add(GEO.ball0, 0.17, [0, 0.36, -1.0]);
        const tail = new THREE.Group(); tail.position.set(0, 0.32, -1.05); H.add(tail);
        let parent = tail;
        [0.3, 0.27, 0.21].forEach((r, i) => {
          const seg = new THREE.Group(); seg.position.y = i === 0 ? 0 : -0.36; parent.add(seg);
          const m = new THREE.Mesh(GEO.ball, this.mHair); m.scale.set(r, r * 1.45, r); m.position.y = -0.2; m.castShadow = true; seg.add(m);
          parent = seg;
        });
        tail.rotation.x = 0.35; this.tail = tail; void tie;
        break;
      }
      case 'bun': {
        cap(-0.25, 1.07);
        add(GEO.back, [1.06, 0.95, 1.08], [0, -0.02, -0.02]);
        add(GEO.ball, [0.42, 0.38, 0.42], [0, 0.82, -0.62]);
        for (const sx of [-1, 1]) add(GEO.bang, [0.12, 0.45, 0.1], [sx * 0.86, 0.15, 0.5], [0.1, 0, sx * 0.12]);
        break;
      }
      case 'curly': {
        cap(-0.25, 1.06);
        const n = 26;
        for (let i = 0; i < n; i++) {
          const y = 1 - (i / (n - 1)) * 1.15; const r = Math.sqrt(Math.max(0, 1 - y * y)); const a = i * 2.39996;
          const x = Math.cos(a) * r, z = Math.sin(a) * r;
          if (z > 0.45 && y < 0.55) continue; // keep the face clear
          add(GEO.ball0, 0.3 + (i % 3) * 0.04, [x * 1.02, y * 1.0 + 0.08, z * 1.02 - 0.02], [i, i * 0.7, 0]);
        }
        break;
      }
      case 'bob': {
        cap(-0.3, 1.1);
        add(GEO.shell, [1.12, 0.95, 1.1], [0, -0.22, -0.02]);
        bangs(6, 0.36, 0, 0.66, 1.3);
        break;
      }
      default: { // short, side-swept
        cap(-0.35, 1.07);
        add(GEO.back, [1.06, 0.82, 1.08], [0, 0.0, -0.02]);
        bangs(5, 0.3, 0.55, 0.68, 1.05);
        add(GEO.ball0, [0.35, 0.22, 0.35], [0.35, 0.92, 0.25], [0, 0, -0.4]);
      }
    }
  }

  // ---------------------------------------------------------------
  setAge(age) {
    this.age = age;
    const leg = interp('leg', age), torso = interp('torso', age), w = interp('width', age), arm = interp('arm', age);
    let hr = interp('head', age);
    const thigh = leg * 0.49, shin = leg * 0.43, footH = leg * 0.08;
    const lr = 0.035 + w * 0.2, ar = 0.03 + w * 0.13;
    this.dims = { leg, torso, w, hr, arm, thigh, shin, footH, lr, ar };
    this.body.position.y = leg;
    this.pelvis.scale.set(w * 0.95, 0.1 + leg * 0.06, w * 0.7);
    this.torsoPivot.position.y = 0.0;
    this.torso.scale.set(w, torso, w * 0.74);
    const neckH = 0.03 + hr * 0.18;
    this.neck.position.y = torso * 0.96; this.neck.scale.set(hr * 0.34, neckH, hr * 0.32);
    this.headPivot.position.y = torso + neckH + hr * 0.82;
    this.head.scale.setScalar(hr);
    if (this.skirt) { this.skirt.scale.set(w * 1.35, leg * 0.62, w * 1.15); this.skirt.position.y = -leg * 0.28; }
    for (const [L, sx] of [[this.armL, -1], [this.armR, 1]]) {
      L.pivot.position.set(sx * (w * 0.9 + ar * 0.6), torso * 0.84, 0);
      const up = arm * 0.5, lo = arm * 0.44;
      L.upper.scale.set(ar, up, ar); L.joint.position.y = -up;
      L.knob.scale.setScalar(ar * 0.95);
      L.lower.scale.set(ar * 0.9, lo, ar * 0.9);
      const hs = ar * 1.25; L.end.scale.setScalar(hs); L.end.position.set(0, -lo - hs * 0.7, 0);
      L.len = [up, lo];
    }
    for (const [L, sx] of [[this.legL, -1], [this.legR, 1]]) {
      L.pivot.position.set(sx * w * 0.44, -0.02, 0);
      L.upper.scale.set(lr, thigh, lr); L.joint.position.y = -thigh;
      L.knob.scale.setScalar(lr * 0.95);
      L.lower.scale.set(lr * 0.9, shin, lr * 0.9);
      L.end.scale.set(lr * 1.15, footH, lr * 1.75); L.end.position.set(0, -shin - footH * 0.25, lr * 0.55);
      L.len = [thigh, shin];
    }
    if (this.scarfM) {
      this.scarfM.scale.set(hr * 0.5, hr * 0.45, hr * 0.42); this.scarfM.position.y = torso * 0.97;
      this.scarfTail.forEach((s, i) => { const len = 0.06 + torso * 0.14; if (i === 0) s.position.set(w * 0.25, torso * 0.95, -w * 0.62); else s.position.y = -s.userData.len; s.userData.len = len; s.userData.m.scale.set(0.08 + w * 0.15, len, 1); });
    }
    this.blob.scale.setScalar(w * 1.7 + 0.08);
    const base = new THREE.Color(this.opts.hair);
    const grey = new THREE.Color(0xdcd8d4);
    this.mHair.color.copy(base).lerp(grey, clamp((age - 48) / 25, 0, 0.92));
    this.height = leg + torso + neckH + hr * 1.9;
    this.radius = Math.max(0.18, w * 1.15);
    this.hunch = clamp((age - 65) / 15, 0, 1) * 0.22;
    return this;
  }
  setOutfit({ shirt, pants, hair, hairStyle, shoes } = {}) {
    if (shirt !== undefined) { this.mShirt.color.setHex(shirt); if (this.skirt) this.skirt.material.color.setHex(shirt); }
    if (pants !== undefined) this.mPants.color.setHex(pants);
    if (shoes !== undefined) this.mShoe.color.setHex(shoes);
    if (hair !== undefined) { this.opts.hair = hair; this.setAge(this.age); }
    if (hairStyle !== undefined && hairStyle !== this.opts.hairStyle) { this.opts.hairStyle = hairStyle; this._buildHair(); }
  }
  giveCane(on = true) {
    if (on && !this.cane) {
      this.cane = new THREE.Group();
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.85, 5), mat(C.woodDark)); s.position.y = -0.38; this.cane.add(s);
      const h = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.018, 4, 8, Math.PI), mat(C.woodDark)); h.position.set(0.06, 0.04, 0); this.cane.add(h);
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
      this.moveTarget = { x, z, speed: opts.speed ?? this.walkSpeed, resolve, stopDist: opts.stopDist ?? 0.05 };
    });
  }
  async walkPath(points, opts = {}) { for (const [x, z] of points) await this.walkTo(x, z, opts); }
  walkToChar(c, gap = 0.8, opts = {}) {
    const dx = this.position.x - c.position.x, dz = this.position.z - c.position.z; const d = Math.hypot(dx, dz) || 1;
    return this.walkTo(c.position.x + dx / d * gap, c.position.z + dz / d * gap, opts).then(() => this.faceChar(c));
  }
  stop() { if (this.moveTarget) { const r = this.moveTarget.resolve; this.moveTarget = null; r && r(); } }
  follow(c, dist = 1.2) { this.followTarget = c ? { c, dist } : null; }
  lookAt(target) { this.lookTarget = target; }
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
  headWorld() { const v = new THREE.Vector3(); this.head.getWorldPosition(v); v.y += this.dims.hr * 1.45; return v; }

  update(dt, t) {
    let moving = false;
    if (this.carriedBy) {
      const p = this.carriedBy, h = p.heading;
      const high = p.pose === 'carryHigh';
      const fwd = high ? 0.16 : 0.2 + p.dims.w * 0.25;
      this.position.set(p.position.x + Math.sin(h) * fwd, p.position.y + p.body.position.y + p.dims.torso * (high ? 0.75 : 0.42) - this.dims.leg * 0.35, p.position.z + Math.cos(h) * fwd);
      this.heading = this.targetHeading = h + (high ? Math.PI : Math.PI * 0.5);
    } else if (this.moveTarget) {
      const m = this.moveTarget;
      const dx = m.x - this.position.x, dz = m.z - this.position.z; const d = Math.hypot(dx, dz);
      if (d <= Math.max(m.stopDist, 0.02)) { this.moveTarget = null; m.resolve && m.resolve(); }
      else {
        // ease in/out so NPCs don't start and stop like robots
        this._npcV = Math.min(m.speed, (this._npcV || 0) + m.speed * dt * 4);
        const v = Math.min(this._npcV, Math.max(0.35 * m.speed, d * 3));
        const sp = Math.min(v * dt, d);
        this.position.x += dx / d * sp; this.position.z += dz / d * sp;
        this.targetHeading = Math.atan2(dx, dz);
        this.speed = v; moving = true;
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
    if (!moving && !this._playerMoving) { this.speed = damp(this.speed, 0, 9, dt); this._npcV = 0; }
    this.heading = angleLerp(this.heading, this.targetHeading, 1 - Math.exp(-9 * dt));
    this.root.rotation.y = this.heading;
    if (!this.carriedBy) {
      const lying = this.pose === 'lie' || this.pose === 'lieBack' || this.pose === 'sleep';
      this._lift = damp(this._lift || 0, lying ? this.dims.w * 0.75 : 0, 10, dt);
      this.position.y = this.extraY + this._lift;
    }
    this._animate(dt, t);
  }

  // ---------------------------------------------------------------
  // Pose targets: shoulders/hips swing (x: negative = forward), "o" = outward,
  // elbows bend forward (negative), knees bend back (positive).
  _animate(dt, t) {
    const d = this.dims, A = this.anim;
    const moving = this.speed > 0.12;
    let pose = this.pose;
    const baby = this.age < 1.3, toddler = this.age >= 1.3 && this.age < 2.6, elder = this.age > 68;
    if (pose === 'idle' && moving) pose = baby ? 'crawl' : 'walk';
    if (pose === 'crawl' && !moving) pose = 'crawlIdle';
    const cadence = baby ? 1.25 : toddler ? 1.9 : elder ? 1.25 : 1.6;
    this.walkPhase += dt * (this.speed / Math.max(0.2, d.leg)) * cadence;
    const ph = this.walkPhase, s = Math.sin(ph), c = Math.cos(ph);
    const breathe = Math.sin(t * 2.1) * 0.012;
    const T = {
      bodyY: d.leg, bodyZ: 0, bodyRX: 0, sway: Math.sin(t * 0.7) * 0.012, torsoRX: this.hunch + breathe, torsoRY: 0, headRX: 0, headRZ: 0,
      aL: 0.04, aR: 0.04, aLo: 0.12, aRo: 0.12, eL: -0.18, eR: -0.18,
      lL: 0, lR: 0, lLo: 0.03, lRo: 0.03, kL: 0.04, kR: 0.04, rootRX: 0,
    };
    let face = 'smile';
    switch (pose) {
      case 'walk': {
        if (toddler) {
          const amp = 0.45;
          T.lL = s * amp; T.lR = -s * amp; T.kL = 0.2 + Math.max(0, c) * 0.7; T.kR = 0.2 + Math.max(0, -c) * 0.7;
          T.lLo = T.lRo = 0.16;
          T.aL = T.aR = -0.75; T.aLo = T.aRo = 0.55 + Math.sin(ph * 2) * 0.08; T.eL = T.eR = -0.5;
          T.sway = s * 0.1; T.bodyY = d.leg - 0.02 + Math.abs(c) * 0.035; T.torsoRX += 0.06;
          T.headRZ = -s * 0.08;
        } else {
          const run = this.speed > 3.2;
          const amp = clamp(this.speed / 3.2, 0.3, run ? 0.95 : 0.7) * (elder ? 0.6 : 1);
          T.lL = s * amp; T.lR = -s * amp;
          T.kL = 0.08 + Math.max(0, c) * amp * 1.5; T.kR = 0.08 + Math.max(0, -c) * amp * 1.5;
          T.aL = -s * amp * 0.75; T.aR = s * amp * 0.75;
          T.eL = -0.25 - Math.max(0, s) * amp * 0.6; T.eR = -0.25 - Math.max(0, -s) * amp * 0.6;
          T.bodyY = d.leg - 0.012 - Math.abs(s) * d.leg * 0.05 + (run ? Math.abs(c) * 0.04 : 0);
          T.torsoRY = s * 0.1; T.sway = s * 0.035; T.torsoRX += 0.04 + (run ? 0.16 : 0);
          T.headRX = -T.torsoRX * 0.5;
          if (this.cane) { T.aR = -0.35 + s * 0.15; T.eR = -0.3; }
        }
        face = 'smile';
        break;
      }
      case 'crawl':
      case 'crawlIdle': {
        const k = pose === 'crawl' ? 1 : 0;
        const tilt = 1.12;
        T.bodyRX = tilt; T.bodyY = d.thigh * 0.95 + d.lr; T.torsoRX = 0.05;
        T.headRX = -0.95 - 0.1 * k * Math.abs(s);
        T.lL = -tilt + s * 0.38 * k; T.lR = -tilt - s * 0.38 * k; T.kL = 1.55 - Math.max(0, s) * 0.3 * k; T.kR = 1.55 - Math.max(0, -s) * 0.3 * k;
        T.lLo = T.lRo = 0.12;
        T.aL = -tilt - s * 0.38 * k; T.aR = -tilt + s * 0.38 * k; T.eL = -0.1 - Math.max(0, -s) * 0.4 * k; T.eR = -0.1 - Math.max(0, s) * 0.4 * k;
        T.aLo = T.aRo = 0.1;
        T.sway = s * 0.06 * k; T.bodyY += Math.abs(c) * 0.012 * k;
        T.headRZ = s * 0.06 * k;
        break;
      }
      case 'sitGround': {
        T.bodyY = d.lr + 0.015; T.lL = T.lR = -1.5; T.kL = T.kR = baby ? 0.25 : 0.12; T.lLo = T.lRo = baby ? 0.42 : 0.15;
        T.aL = T.aR = A.reach ? -2.75 : -0.35; T.eL = T.eR = A.reach ? -0.15 : -0.5; T.aLo = T.aRo = A.reach ? 0.25 : 0.14;
        T.torsoRX = 0.08 + breathe - (A.look ? 0.12 : 0); T.headRX = A.look ?? 0;
        if (baby) T.sway = Math.sin(t * 1.3) * 0.04;
        break;
      }
      case 'sit': T.bodyY = A.h ?? 0.45; T.lL = T.lR = -1.5; T.kL = T.kR = 1.45; T.aL = T.aR = -0.45; T.eL = T.eR = -0.65; T.aLo = T.aRo = 0.05; T.bodyZ = -0.08; break;
      case 'lie': T.rootRX = -Math.PI / 2; T.bodyY = 0.12; T.aLo = T.aRo = 0.25; T.kL = 0.15; break;
      case 'lieBack': T.rootRX = -Math.PI / 2; T.bodyY = 0.12; T.aLo = T.aRo = 1.35 + Math.sin(t * 2) * 0.15 * (A.wave ?? 0); T.lLo = T.lRo = 0.25; break;
      case 'sleep': T.rootRX = -Math.PI / 2; T.bodyY = 0.12; T.aL = T.aR = -0.3; T.eL = T.eR = -0.9; T.aLo = T.aRo = 0.15; T.kL = T.kR = 0.35; T.lL = T.lR = -0.3; face = 'sleep'; break;
      case 'kneel': T.bodyY = d.thigh + d.lr + 0.02; T.lL = 0.05; T.kL = 1.55; T.lR = -1.45; T.kR = 1.45; T.torsoRX += 0.12; T.aL = T.aR = -0.55; T.eL = T.eR = -0.5; break;
      case 'kneelOpen': T.bodyY = d.thigh + d.lr + 0.02; T.lL = 0.05; T.kL = 1.55; T.lR = -1.45; T.kR = 1.45; T.torsoRX += 0.06; T.aL = T.aR = -1.15; T.aLo = T.aRo = 0.75; T.eL = T.eR = -0.25; break;
      case 'crouch': T.bodyY = d.leg * 0.4; T.lL = T.lR = -1.95; T.kL = T.kR = 2.3; T.torsoRX += 0.45; T.aL = T.aR = -0.9; T.eL = T.eR = -0.6; T.lLo = T.lRo = 0.14; break;
      case 'reach': T.aL = T.aR = -2.9; T.aLo = T.aRo = 0.22; T.eL = T.eR = -0.1; T.headRX = -0.35; break;
      case 'reachForward': T.aL = T.aR = -1.45; T.eL = T.eR = -0.1; T.torsoRX += 0.08; break;
      case 'armsOpen': T.aL = T.aR = -1.0; T.aLo = T.aRo = 0.85; T.eL = T.eR = -0.2; face = 'open'; break;
      case 'hug': T.aL = T.aR = -1.35; T.eL = T.eR = -1.15; T.aLo = T.aRo = -0.3; T.torsoRX += 0.12; T.headRX = 0.15; break;
      case 'carry': case 'rockCarry': T.aL = T.aR = -0.85; T.eL = T.eR = -1.25; T.aLo = T.aRo = -0.22; T.torsoRX -= 0.06; T.headRX = 0.3; break;
      case 'carryHigh': T.aL = T.aR = -2.35; T.eL = T.eR = -0.45; T.aLo = T.aRo = 0.12; T.headRX = -0.35; face = 'open'; break;
      case 'carried': T.bodyY = d.thigh * 0.6; T.lL = T.lR = -1.3; T.kL = T.kR = 0.7; T.aL = T.aR = -0.5; T.eL = T.eR = -0.6; break;
      case 'wave': T.aR = -2.7; T.aRo = 0.35; T.eR = -0.45 + Math.sin(t * 9) * 0.45; face = 'open'; break;
      case 'point': T.aR = -1.5; T.eR = -0.05; break;
      case 'dance': { const q = Math.sin(t * (A.speed ?? 4)); T.bodyY = d.leg - Math.abs(q) * 0.04; T.aL = -1.7 + q * 0.4; T.aR = -1.7 - q * 0.4; T.aLo = T.aRo = 0.5; T.eL = T.eR = -0.7; T.lL = q * 0.3; T.lR = -q * 0.3; T.kL = T.kR = 0.25; T.sway = q * 0.08; face = 'open'; break; }
      case 'waltz': { const q = Math.sin(t * 3); T.aL = -1.55; T.aLo = 0.4; T.eL = -0.7; T.aR = -1.25; T.aRo = -0.1; T.eR = -0.9; T.lL = q * 0.25; T.lR = -q * 0.25; T.kL = Math.max(0, q) * 0.3; T.kR = Math.max(0, -q) * 0.3; T.sway = q * 0.05; break; }
      case 'jump': { const q = Math.abs(Math.sin(t * 5)); T.bodyY = d.leg + q * 0.22; T.aL = T.aR = -2.5; T.aLo = T.aRo = 0.35; T.lL = T.lR = -q * 0.5; T.kL = T.kR = q * 0.8; face = 'open'; break; }
      case 'cry': T.headRX = 0.45; T.aL = T.aR = -1.2; T.eL = T.eR = -2.1; T.aLo = T.aRo = -0.25; T.torsoRX += 0.2 + Math.sin(t * 7) * 0.025; face = 'sad'; break;
      case 'laugh': T.headRX = -0.35 + Math.sin(t * 14) * 0.06; T.torsoRX += Math.sin(t * 14) * 0.04 - 0.05; T.aL = T.aR = -0.3; T.eL = T.eR = -0.9; face = 'open'; break;
      case 'think': T.aR = -1.35; T.eR = -2.15; T.aRo = -0.15; T.headRX = 0.15; T.headRZ = 0.12; face = 'flat'; break;
      case 'sad': T.headRX = 0.35; T.torsoRX += 0.12; face = 'sad'; break;
      case 'push': { const q = A.phase ?? Math.sin(t * 2); T.aL = T.aR = -1.35 - q * 0.25; T.eL = T.eR = -0.35 + q * 0.25; T.torsoRX += 0.22 + q * 0.12; T.lL = -0.35; T.kL = 0.35; T.lR = 0.25; break; }
      case 'swing': { const k = A.kick ?? 0; T.bodyY = A.h ?? 0.5; T.lL = T.lR = -1.35 + k; T.kL = T.kR = 0.9 - k * 0.8; T.aL = T.aR = -2.55; T.eL = T.eR = -0.45; T.aLo = T.aRo = 0.1; face = 'open'; break; }
      case 'bike': T.bodyY = A.h ?? 0.68; T.lL = -1.2 + s * 0.55; T.lR = -1.2 - s * 0.55; T.kL = 1.3 - s * 0.6; T.kR = 1.3 + s * 0.6; T.aL = T.aR = -1.1; T.eL = T.eR = -0.35; T.torsoRX += 0.35; break;
      case 'rock': T.bodyY = A.h ?? 0.47; T.lL = T.lR = -1.5; T.kL = T.kR = 1.45; T.aL = T.aR = -0.85; T.eL = T.eR = -1.25; T.aLo = T.aRo = -0.22; T.torsoRX -= 0.12; T.headRX = 0.3; break;
      case 'read': T.bodyY = A.h ?? 0.45; T.lL = T.lR = -1.5; T.kL = T.kR = 1.45; T.aL = T.aR = -0.85; T.eL = T.eR = -1.35; T.aLo = T.aRo = -0.15; T.headRX = 0.38; break;
      case 'stand': default: break;
    }
    // idle micro-motion
    if (pose === 'idle' || pose === 'stand') { T.sway = Math.sin(t * 0.8 + this.blinkT) * 0.018; T.headRZ = Math.sin(t * 0.5) * 0.03; }
    const k = 1 - Math.exp(-12 * dt);
    if (!this._j) this._j = { ...T, headRY: 0 };
    const J = this._j;
    for (const key in T) J[key] = lerp(J[key], T[key], k);
    // head looks at its target
    let hy = 0;
    if (this.lookTarget) {
      const p = this.lookTarget.position ?? this.lookTarget;
      const a = Math.atan2(p.x - this.position.x, p.z - this.position.z) - this.heading;
      hy = clamp(Math.atan2(Math.sin(a), Math.cos(a)), -1.1, 1.1);
    }
    J.headRY = lerp(J.headRY, hy, k);
    this.body.position.y = J.bodyY; this.body.position.z = J.bodyZ;
    this.body.rotation.x = J.bodyRX; this.body.rotation.z = J.sway;
    this.root.rotation.x = J.rootRX + (this.lean || 0);
    this.root.rotation.z = this.tilt || 0;
    this.torsoPivot.rotation.x = J.torsoRX; this.torsoPivot.rotation.y = J.torsoRY; this.torsoPivot.rotation.z = -J.sway * 0.6;
    this.headPivot.rotation.set(J.headRX, J.headRY, J.headRZ);
    this.armL.pivot.rotation.set(J.aL, 0, -J.aLo); this.armR.pivot.rotation.set(J.aR, 0, J.aRo);
    this.armL.joint.rotation.x = J.eL; this.armR.joint.rotation.x = J.eR;
    this.legL.pivot.rotation.set(J.lL, 0, -J.lLo); this.legR.pivot.rotation.set(J.lR, 0, J.lRo);
    this.legL.joint.rotation.x = J.kL; this.legR.joint.rotation.x = J.kR;
    // feet stay roughly flat
    this.legL.end.rotation.x = -(J.lL + J.kL) * 0.6; this.legR.end.rotation.x = -(J.lR + J.kR) * 0.6;
    if (this.skirt) this.skirt.rotation.x = (J.lL + J.lR) * 0.25;
    // secondary motion: ponytail / long hair and the scarf trail behind movement
    const sp = clamp(this.speed / 3, 0, 1.4);
    if (this.tail) {
      const targ = 0.35 + sp * 0.5 + Math.sin(ph * 2) * 0.08 * sp + Math.sin(t * 1.7) * 0.03;
      this._tailA = damp(this._tailA ?? targ, targ, 6, dt);
      if (this.opts.hairStyle === 'ponytail') { this.tail.rotation.x = this._tailA; this.tail.rotation.z = Math.sin(ph) * 0.15 * sp; }
      else this.tail.rotation.x = (this._tailA - 0.35) * 0.15;
    }
    if (this.scarfTail) {
      this.scarfTail.forEach((seg, i) => {
        const targ = (i === 0 ? 0.25 : 0.08) + sp * (0.45 - i * 0.05) + Math.sin(t * 5 + i * 0.9) * (0.04 + sp * 0.12);
        seg.userData.a = damp(seg.userData.a, targ, 5 - i * 0.6, dt);
        seg.rotation.x = seg.userData.a; seg.rotation.z = Math.sin(t * 3 + i) * 0.05;
      });
    }
    // face
    this.blinkT -= dt;
    const closed = face === 'sleep' || this.blinkT < 0.12 || face === 'sad';
    if (this.blinkT < 0) this.blinkT = 2 + Math.random() * 4;
    for (const e of this.eyes) e.scale.y = closed ? (face === 'sad' ? 0.04 : 0.018) : 0.14;
    this.mouthSmile.visible = face === 'smile' || face === 'sleep';
    this.mouthOpen.visible = face === 'open';
    this.mouthSad.visible = face === 'sad';
    if (face === 'flat') this.mouthSmile.visible = false;
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
  sam: { skin: C.skin[2], hair: 0x2a1e1a, hairStyle: 'curly', shirt: 0x5fa38a, pants: 0x3d3d52, scarf: 0x6fa3c8 },
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
