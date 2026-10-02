// The current diorama: objects, colliders, characters, hotspots, ambient life.
import * as THREE from 'three';
import { G, clamp, rng, dist2 } from './game.js';
import { glowSprite, mat, ico, box, shadow, C } from './props.js';
import { ParticleField, Burst } from './particles.js';

export class World {
  constructor({ bounds = { minX: -9, maxX: 9, minZ: -9, maxZ: 9 }, name = '' } = {}) {
    this.name = name;
    this.root = new THREE.Group();
    this.bounds = bounds;
    this.colliders = [];
    this.characters = new Set();
    this.hotspots = [];
    this.updatables = [];
    this.particles = [];
    this.bursts = [];
    this.creatures = [];
    this.disposed = false;
    G.scene.add(this.root);
  }

  // place an object; collide: radius number | {w,d} box | false
  add(obj, x = 0, z = 0, { ry = 0, s = 1, y = 0, collide = false, parent = null } = {}) {
    obj.position.set(x, y, z); obj.rotation.y = ry; if (s !== 1) obj.scale.setScalar(s);
    (parent ?? this.root).add(obj);
    if (collide !== false && collide !== undefined) {
      if (typeof collide === 'number') this.addCollider({ x, z, r: collide * (s || 1), obj });
      else {
        // rotate the box footprint for 90° rotations
        const rot = Math.round(ry / (Math.PI / 2)) % 2 !== 0;
        const w = (rot ? collide.d : collide.w) * s, d = (rot ? collide.w : collide.d) * s;
        this.addCollider({ minX: x - w / 2 + (collide.ox ?? 0), maxX: x + w / 2 + (collide.ox ?? 0), minZ: z - d / 2 + (collide.oz ?? 0), maxZ: z + d / 2 + (collide.oz ?? 0), obj });
      }
    }
    this.track(obj);
    return obj;
  }
  // register anything with userData.update in its tree
  track(obj) {
    obj.traverse((o) => { if (o.userData && typeof o.userData.update === 'function' && !this.updatables.includes(o)) this.updatables.push(o); });
  }
  addCollider(c) { this.colliders.push(c); return c; }
  removeCollider(c) { const i = this.colliders.indexOf(c); if (i >= 0) this.colliders.splice(i, 1); }
  removeCollidersOf(obj) { this.colliders = this.colliders.filter((c) => c.obj !== obj); }
  remove(obj) { this.removeCollidersOf(obj); obj.parent?.remove(obj); this.updatables = this.updatables.filter((u) => { let p = u; while (p) { if (p === obj) return false; p = p.parent; } return true; }); }

  addCharacter(c) { this.characters.add(c); this.root.add(c.root); }
  removeCharacter(c) { this.characters.delete(c); }

  particlesOf(kind, opts) { const f = new ParticleField(kind, opts); this.particles.push(f); this.root.add(f.obj); return f; }
  removeParticles(f) { const i = this.particles.indexOf(f); if (i >= 0) this.particles.splice(i, 1); f.obj.parent?.remove(f.obj); f.dispose(); }
  burst(pos, opts) { const b = new Burst(pos, opts); this.bursts.push(b); this.root.add(b.obj); return b; }

  hotspot(def) { const h = new Hotspot(this, def); this.hotspots.push(h); return h; }
  getHotspot(id) { return this.hotspots.find((h) => h.id === id); }

  butterflies(n = 3, area = { x: 0, z: 0, r: 6 }, seed = 1) {
    const r = rng(seed);
    for (let i = 0; i < n; i++) { const b = new Butterfly(r.pick([0xf6c445, 0xf2f2f2, 0x9ac8f0, 0xf39ab0]), area, seed + i); this.creatures.push(b); this.root.add(b.obj); }
  }
  birds(n = 5, seed = 1) { const f = new BirdFlock(n, seed); this.creatures.push(f); this.root.add(f.obj); return f; }

  // push a circle (x,z,r) out of colliders and keep inside bounds
  resolve(x, z, r = 0.3) {
    const b = this.bounds;
    for (let iter = 0; iter < 3; iter++) {
      for (const c of this.colliders) {
        if (c.disabled) continue;
        if (c.r !== undefined) {
          const dx = x - c.x, dz = z - c.z; const d = Math.hypot(dx, dz); const m = c.r + r;
          if (d < m && d > 1e-5) { x = c.x + dx / d * m; z = c.z + dz / d * m; }
        } else {
          const px = clamp(x, c.minX, c.maxX), pz = clamp(z, c.minZ, c.maxZ);
          const dx = x - px, dz = z - pz; const d = Math.hypot(dx, dz);
          if (d < r) {
            if (d > 1e-5) { x = px + dx / d * r; z = pz + dz / d * r; }
            else { // inside the box: push to nearest edge
              const l = x - c.minX, rr = c.maxX - x, t = z - c.minZ, bb = c.maxZ - z; const m = Math.min(l, rr, t, bb);
              if (m === l) x = c.minX - r; else if (m === rr) x = c.maxX + r; else if (m === t) z = c.minZ - r; else z = c.maxZ + r;
            }
          }
        }
      }
    }
    x = clamp(x, b.minX + r, b.maxX - r); z = clamp(z, b.minZ + r, b.maxZ - r);
    return { x, z };
  }

  update(dt, t) {
    for (const c of this.characters) c.update(dt, t);
    for (const u of this.updatables) u.userData.update(dt, t);
    for (const f of this.particles) f.update(dt, t);
    for (const h of this.hotspots) h.update(dt, t);
    for (const c of this.creatures) c.update(dt, t);
    this.bursts = this.bursts.filter((b) => { const done = b.update(dt); if (done) { b.obj.parent?.remove(b.obj); b.dispose(); } return !done; });
  }

  dispose() {
    this.disposed = true;
    for (const h of this.hotspots) h.destroy();
    for (const f of this.particles) f.dispose();
    G.scene.remove(this.root);
    this.root.traverse((o) => { if (o.geometry && !o.geometry.parameters) o.geometry.dispose?.(); });
  }
}

// ---------- interactive moments ----------
const HOT_COLORS = { little: 0xfff2d2, story: 0xffc96b, work: 0x8fc4ff, exit: 0xffffff, quiet: 0xd8e6ff, secret: 0xe8d8ff };
export class Hotspot {
  constructor(world, def) {
    this.world = world;
    Object.assign(this, { id: def.id, label: def.label ?? '', kind: def.kind ?? 'little', radius: def.radius ?? 1.1, enabled: def.enabled ?? true, done: false, def });
    this.anchor = def.anchor ?? null; // object to follow (Character or Object3D)
    this.offset = new THREE.Vector3(...(def.offset ?? [0, 0, 0]));
    this.pos = new THREE.Vector3(def.x ?? 0, def.y ?? 0, def.z ?? 0);
    this.obj = new THREE.Group();
    const col = HOT_COLORS[this.kind] ?? HOT_COLORS.little;
    this.glow = glowSprite(col, this.kind === 'story' ? 1.5 : 1.15, 0.85);
    this.core = glowSprite(0xffffff, 0.35, 0.9);
    this.obj.add(this.glow, this.core);
    this.sparks = [];
    for (let i = 0; i < 5; i++) { const s = glowSprite(col, 0.16, 0.8); this.obj.add(s); this.sparks.push({ s, ph: i / 5 }); }
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.48, 24), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.0, depthWrite: false, fog: false }));
    this.ring.rotation.x = -Math.PI / 2;
    world.root.add(this.obj);
    world.root.add(this.ring);
    this.alpha = this.enabled ? 1 : 0;
    this.t = Math.random() * 10;
    this.near = false;
  }
  get position() {
    if (this.anchor) {
      const p = this.anchor.position ?? this.anchor;
      return new THREE.Vector3(p.x, 0, p.z).add(this.offset);
    }
    return this.pos;
  }
  setEnabled(v) { this.enabled = v; }
  complete() { this.done = true; this.enabled = false; }
  update(dt, t) {
    this.t += dt;
    const target = this.enabled && !this.done ? 1 : 0;
    this.alpha += (target - this.alpha) * Math.min(1, dt * 3);
    const p = this.position;
    const h = this.def.height ?? (this.anchor?.height ? this.anchor.height + 0.25 : 1.0);
    this.obj.position.set(p.x, h + Math.sin(this.t * 2) * 0.08, p.z);
    const pulse = this.kind === 'work' ? 0.75 + 0.25 * Math.sign(Math.sin(this.t * 6)) : 0.85 + Math.sin(this.t * 2.5) * 0.15;
    this.glow.material.opacity = this.alpha * 0.85 * pulse * (this.near ? 1.25 : 1);
    this.glow.scale.setScalar((this.kind === 'story' ? 1.5 : 1.15) * (this.near ? 1.25 : 1) * (0.95 + 0.05 * Math.sin(this.t * 3)));
    this.core.material.opacity = this.alpha * 0.9;
    for (const s of this.sparks) {
      const k = (this.t * 0.35 + s.ph) % 1;
      const a = s.ph * Math.PI * 2 + this.t * 0.5;
      s.s.position.set(Math.cos(a) * 0.35, -0.6 + k * 1.3, Math.sin(a) * 0.35);
      s.s.material.opacity = this.alpha * Math.sin(k * Math.PI) * 0.8;
    }
    this.ring.position.set(p.x, 0.03, p.z);
    this.ring.material.opacity = this.alpha * (this.near ? 0.55 : 0.18);
    this.ring.scale.setScalar(1 + (this.near ? 0.15 * Math.sin(this.t * 4) : 0));
    this.obj.visible = this.alpha > 0.01;
    this.ring.visible = this.obj.visible;
    if (this.kind === 'secret') { this.obj.visible = this.near; this.ring.visible = false; this.glow.material.opacity *= 0.5; }
  }
  destroy() { this.obj.parent?.remove(this.obj); this.ring.parent?.remove(this.ring); }
}

// ---------- small creatures ----------
class Butterfly {
  constructor(color, area, seed) {
    const r = rng(seed * 13);
    this.obj = new THREE.Group();
    const wg = new THREE.PlaneGeometry(0.16, 0.12); wg.translate(0.08, 0, 0);
    const m = mat(color, { side: THREE.DoubleSide, emissive: color, emissiveIntensity: 0.2 });
    this.l = new THREE.Mesh(wg, m); this.r = new THREE.Mesh(wg, m); this.r.scale.x = -1;
    this.l.rotation.x = this.r.rotation.x = -Math.PI / 2;
    const wl = new THREE.Group(); wl.add(this.l); const wr = new THREE.Group(); wr.add(this.r);
    this.wl = wl; this.wr = wr;
    this.obj.add(wl, wr);
    this.area = area; this.ph = r.range(0, 10); this.sp = r.range(0.25, 0.45);
    this.obj.scale.setScalar(1.3);
  }
  update(dt, t) {
    const a = this.area, k = t * this.sp + this.ph;
    const x = a.x + Math.sin(k) * a.r * 0.8 + Math.sin(k * 2.3) * 0.8;
    const z = a.z + Math.cos(k * 0.8) * a.r * 0.8 + Math.cos(k * 1.7) * 0.8;
    const y = 0.8 + Math.sin(k * 3.1) * 0.35;
    const nx = x - this.obj.position.x, nz = z - this.obj.position.z;
    this.obj.position.set(x, y, z);
    this.obj.rotation.y = Math.atan2(nx, nz) - Math.PI / 2;
    const f = Math.sin(t * 18 + this.ph) * 1.1;
    this.wl.rotation.z = f; this.wr.rotation.z = -f;
  }
  get position() { return this.obj.position; }
}

class BirdFlock {
  constructor(n, seed) {
    this.obj = new THREE.Group();
    this.birds = [];
    const r = rng(seed);
    for (let i = 0; i < n; i++) {
      const b = new THREE.Group();
      const wg = new THREE.PlaneGeometry(0.3, 0.1); wg.translate(0.15, 0, 0);
      const m = mat(0x3a3a48, { side: THREE.DoubleSide });
      const l = new THREE.Mesh(wg, m), rr = new THREE.Mesh(wg, m); rr.scale.x = -1;
      l.rotation.x = rr.rotation.x = -Math.PI / 2;
      const gl = new THREE.Group(); gl.add(l); const gr = new THREE.Group(); gr.add(rr);
      b.add(gl, gr); this.obj.add(b);
      this.birds.push({ b, gl, gr, off: new THREE.Vector3(r.range(-2, 2), r.range(-0.6, 0.6), r.range(-2, 2)), ph: r.range(0, 6) });
    }
    this.t = r.range(0, 30); this.period = 26;
  }
  update(dt, t) {
    this.t += dt;
    const k = (this.t % this.period) / this.period;
    const c = G.renderer.camTarget;
    const x = c.x - 30 + k * 60, z = c.z + 12 - k * 24, y = 7 + Math.sin(k * 6) * 0.5;
    for (const b of this.birds) {
      b.b.position.set(x + b.off.x, y + b.off.y, z + b.off.z);
      b.b.rotation.y = -Math.PI / 4 - Math.PI / 2 + Math.PI;
      const f = Math.sin(this.t * 10 + b.ph) * 0.8;
      b.gl.rotation.z = f; b.gr.rotation.z = -f;
    }
  }
}
