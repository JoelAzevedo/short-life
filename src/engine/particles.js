// Ambient particle fields: petals, leaves, snow, rain, fireflies, dust motes, bubbles, sparkles.
import * as THREE from 'three';
import { G, rng } from './game.js';
import { glowTexture } from './props.js';

const KINDS = {
  petals: { color: [0xf7c0cf, 0xfbd8e2, 0xf3a8bd], size: 0.09, fall: 0.35, drift: 0.6, spin: 2, shape: 'flake', count: 120 },
  leaves: { color: [0xe39a3b, 0xd2603e, 0xeec04a, 0xc77a2a], size: 0.12, fall: 0.6, drift: 0.8, spin: 3, shape: 'flake', count: 110 },
  snow: { color: [0xffffff, 0xf2f6ff], size: 0.06, fall: 0.55, drift: 0.35, spin: 1, shape: 'flake', count: 260 },
  rain: { color: [0xbcd0e6], size: 0.02, fall: 9, drift: 0.05, spin: 0, shape: 'streak', count: 420 },
  fireflies: { color: [0xf6ff9a, 0xdfff7a], size: 0.35, fall: 0, drift: 0.35, spin: 0, shape: 'glow', count: 40 },
  motes: { color: [0xfff4d8], size: 0.14, fall: -0.02, drift: 0.12, spin: 0, shape: 'glow', count: 60 },
  stars: { color: [0xffffff, 0xfff4d0, 0xd8e4ff], size: 0.3, fall: 0, drift: 0, spin: 0, shape: 'glow', count: 120 },
  bubbles: { color: [0xdff2ff, 0xf6e0ff], size: 0.28, fall: -0.4, drift: 0.5, spin: 0, shape: 'glow', count: 25 },
  memories: { color: [0xffe7b8, 0xffd0e0, 0xd8eaff], size: 0.5, fall: -0.25, drift: 0.3, spin: 0, shape: 'glow', count: 50 },
};

export class ParticleField {
  constructor(kind, opts = {}) {
    const k = { ...KINDS[kind], ...opts };
    this.k = k; this.kind = kind;
    this.area = opts.area ?? { w: 30, h: 12, d: 30 };
    this.center = opts.center ?? null; // fixed centre (Vector3) or null → follow camera target
    this.y0 = opts.y0 ?? 0;
    const n = k.count;
    this.n = n;
    const r = rng(opts.seed ?? 7);
    this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.ph = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      this.p[i * 3] = r.range(-0.5, 0.5) * this.area.w;
      this.p[i * 3 + 1] = this.y0 + r.range(0, 1) * this.area.h;
      this.p[i * 3 + 2] = r.range(-0.5, 0.5) * this.area.d;
      this.ph[i] = r.range(0, Math.PI * 2);
    }
    this.opacity = opts.opacity ?? 1;
    this.target = 1; this.fade = 1;
    if (k.shape === 'glow') {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(this.p.slice(), 3));
      const cols = new Float32Array(n * 3);
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) { c.setHex(k.color[i % k.color.length]); cols.set([c.r, c.g, c.b], i * 3); }
      geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
      this.mat = new THREE.PointsMaterial({ size: k.size, map: glowTexture(), vertexColors: true, transparent: true, opacity: this.opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true, fog: false });
      this.obj = new THREE.Points(geo, this.mat);
      this.geo = geo;
    } else {
      const g = k.shape === 'streak' ? new THREE.BoxGeometry(0.012, 0.35, 0.012) : new THREE.PlaneGeometry(k.size, k.size * 0.7);
      this.mat = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, flatShading: true, transparent: true, opacity: this.opacity, roughness: 1, depthWrite: k.shape !== 'streak' });
      this.obj = new THREE.InstancedMesh(g, this.mat, n);
      const c = new THREE.Color();
      for (let i = 0; i < n; i++) { c.setHex(k.color[i % k.color.length]); this.obj.setColorAt(i, c); }
      this.dummy = new THREE.Object3D();
    }
    this.obj.frustumCulled = false;
    this.obj.renderOrder = 5;
  }
  setOpacity(o) { this.target = o; }
  update(dt, t) {
    const k = this.k, n = this.n;
    this.fade += (this.target - this.fade) * Math.min(1, dt * 1.5);
    this.mat.opacity = this.opacity * this.fade;
    this.obj.visible = this.mat.opacity > 0.01;
    const c = this.center ?? G.renderer.camTarget;
    const A = this.area;
    for (let i = 0; i < n; i++) {
      const j = i * 3;
      const ph = this.ph[i];
      this.p[j] += Math.sin(t * 0.7 + ph) * k.drift * dt + (k.wind ?? 0) * dt;
      this.p[j + 1] -= k.fall * dt * (0.7 + 0.6 * Math.sin(ph));
      this.p[j + 2] += Math.cos(t * 0.6 + ph * 1.3) * k.drift * dt;
      if (this.kind === 'fireflies' || this.kind === 'motes' || this.kind === 'memories') this.p[j + 1] += Math.sin(t * 1.3 + ph) * 0.15 * dt;
      // wrap around the area
      if (this.p[j + 1] < this.y0) this.p[j + 1] += A.h;
      if (this.p[j + 1] > this.y0 + A.h) this.p[j + 1] -= A.h;
      // keep relative to centre
      const rx = this.p[j], rz = this.p[j + 2];
      if (rx < -A.w / 2) this.p[j] += A.w; if (rx > A.w / 2) this.p[j] -= A.w;
      if (rz < -A.d / 2) this.p[j + 2] += A.d; if (rz > A.d / 2) this.p[j + 2] -= A.d;
    }
    if (this.geo) {
      const pos = this.geo.attributes.position;
      for (let i = 0; i < n; i++) {
        let tw = 1;
        if (this.kind === 'fireflies' || this.kind === 'stars') tw = 0.5 + 0.5 * Math.sin(t * (this.kind === 'stars' ? 1.2 : 2.5) + this.ph[i] * 3);
        pos.setXYZ(i, c.x + this.p[i * 3], this.p[i * 3 + 1] - (1 - tw) * 0.0, c.z + this.p[i * 3 + 2]);
      }
      pos.needsUpdate = true;
      if (this.kind === 'fireflies' || this.kind === 'stars') this.mat.size = k.size * (0.85 + 0.15 * Math.sin(t * 3));
    } else {
      const d = this.dummy;
      for (let i = 0; i < n; i++) {
        d.position.set(c.x + this.p[i * 3], this.p[i * 3 + 1], c.z + this.p[i * 3 + 2]);
        if (k.spin) d.rotation.set(t * k.spin * 0.5 + this.ph[i], t * k.spin * 0.3 + this.ph[i] * 2, this.ph[i]);
        else d.rotation.set(0, 0, 0.12);
        d.updateMatrix(); this.obj.setMatrixAt(i, d.matrix);
      }
      this.obj.instanceMatrix.needsUpdate = true;
    }
  }
  dispose() { this.obj.geometry.dispose(); this.mat.dispose(); }
}

// one-shot burst of sparkles at a point (e.g. when a moment is kept)
export class Burst {
  constructor(pos, { color = 0xfff0c0, count = 40, speed = 2, life = 1.6, size = 0.3 } = {}) {
    this.life = life; this.t = 0; this.n = count;
    const geo = new THREE.BufferGeometry();
    this.p = new Float32Array(count * 3); this.v = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      this.p.set([pos.x, pos.y, pos.z], i * 3);
      const a = Math.random() * Math.PI * 2, e = Math.random() * Math.PI - Math.PI / 4, s = speed * (0.4 + Math.random());
      this.v.set([Math.cos(a) * Math.cos(e) * s, Math.abs(Math.sin(e)) * s + 0.5, Math.sin(a) * Math.cos(e) * s], i * 3);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(this.p, 3));
    this.mat = new THREE.PointsMaterial({ size, color, map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false });
    this.obj = new THREE.Points(geo, this.mat); this.obj.frustumCulled = false;
    this.geo = geo;
  }
  update(dt) {
    this.t += dt;
    for (let i = 0; i < this.n; i++) {
      const j = i * 3;
      this.v[j + 1] -= dt * 0.8;
      this.v[j] *= 0.985; this.v[j + 2] *= 0.985;
      this.p[j] += this.v[j] * dt; this.p[j + 1] += this.v[j + 1] * dt; this.p[j + 2] += this.v[j + 2] * dt;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.mat.opacity = Math.max(0, 1 - this.t / this.life);
    return this.t >= this.life;
  }
  dispose() { this.geo.dispose(); this.mat.dispose(); }
}
