// Three.js setup: isometric orthographic camera, soft sun, post-processing colour grade.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { G, clamp, lerp, damp, tween } from './game.js';
import { MOOD_DEFAULT, MOODS } from './palette.js';

const GradeShader = {
  defines: { BLUR_R: 2 },
  uniforms: {
    tDiffuse: { value: null },
    resolution: { value: new THREE.Vector2(1, 1) },
    time: { value: 0 },
    saturation: { value: 1 }, contrast: { value: 1 }, brightness: { value: 0 }, warmth: { value: 0 },
    tint: { value: new THREE.Color(1, 1, 1) }, tintAmt: { value: 0 },
    vignette: { value: 0.3 }, grain: { value: 0.03 }, tilt: { value: 0.5 }, dream: { value: 0 },
    focus: { value: new THREE.Vector2(0.5, 0.5) }, focusRadius: { value: 2 }, focusDesat: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
  `,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform vec2 resolution; uniform float time;
    uniform float saturation, contrast, brightness, warmth, tintAmt, vignette, grain, tilt, dream;
    uniform vec3 tint; uniform vec2 focus; uniform float focusRadius, focusDesat;
    varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    vec3 blurred(vec2 uv, float amt){
      vec2 px = amt / resolution * (2.0 / float(BLUR_R));
      vec3 c = vec3(0.0); float w = 0.0;
      for(int i=-BLUR_R;i<=BLUR_R;i++){ for(int j=-BLUR_R;j<=BLUR_R;j++){
        vec2 o = vec2(float(i), float(j)) * px;
        float k = 1.0 / (1.0 + float(i*i + j*j));
        c += texture2D(tDiffuse, uv + o).rgb * k; w += k;
      }}
      return c / w;
    }
    void main(){
      vec2 uv = vUv;
      vec3 col = texture2D(tDiffuse, uv).rgb;
      // tilt-shift: blur top and bottom of the frame, like a miniature
      float d = abs(uv.y - 0.5) * 2.0;
      float b = smoothstep(0.45, 1.0, d) * tilt;
      if (b > 0.01) col = mix(col, blurred(uv, b * 3.0), clamp(b * 1.4, 0.0, 1.0));
      // dream glow: soft halation for memories
      if (dream > 0.01) {
        vec3 soft = blurred(uv, 4.0 + dream * 4.0);
        col = mix(col, max(col, soft), dream * 0.65);
        col += soft * dream * 0.12;
      }
      col += brightness;
      col = (col - 0.5) * contrast + 0.5;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, saturation);
      // selective colour: outside the focus circle we drain colour
      if (focusDesat > 0.001) {
        vec2 a = vec2(resolution.x / resolution.y, 1.0);
        float fd = length((uv - focus) * a);
        float m = smoothstep(focusRadius * 0.55, focusRadius, fd);
        float l2 = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, mix(vec3(l2), col, 0.12) * vec3(0.96, 0.98, 1.04), m * focusDesat);
      }
      col.r += warmth * 0.05; col.g += warmth * 0.012; col.b -= warmth * 0.05;
      col = mix(col, col * tint, tintAmt);
      vec2 vc = uv - 0.5; vc.x *= resolution.x / resolution.y;
      float v = smoothstep(0.35, 1.05, length(vc) * 1.15);
      col *= 1.0 - v * vignette;
      col += (hash(uv * resolution + fract(time) * 100.0) - 0.5) * grain;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `,
};

export class Renderer {
  constructor(container) {
    this.container = container;
    // MSAA happens in the composer's render targets (see applyQuality); the canvas itself needs none
    const r = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    r.setPixelRatio(1);
    r.setSize(window.innerWidth, window.innerHeight);
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.toneMapping = THREE.NeutralToneMapping;
    r.toneMappingExposure = 1.0;
    r.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(r.domElement);
    this.r = r;

    this.scene = new THREE.Scene();
    // sky gradient background (tiny canvas, updated when mood changes)
    this.skyCanvas = document.createElement('canvas');
    this.skyCanvas.width = 2; this.skyCanvas.height = 128;
    this.skyTex = new THREE.CanvasTexture(this.skyCanvas);
    this.skyTex.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = this.skyTex;
    this.scene.fog = new THREE.Fog(0xffffff, 50, 120);

    // camera
    this.viewSize = 14;
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.OrthographicCamera(-aspect * 7, aspect * 7, 7, -7, 0.1, 300);
    this.camAz = 45; this.camEl = 33; this.camDist = 70;
    this.camTarget = new THREE.Vector3();
    this.camGoal = new THREE.Vector3();
    this.zoomGoal = 14;
    this.followSpeed = 3;
    this.follow = null;      // object with .position to follow
    this.followOffset = new THREE.Vector3();
    this.shake = 0;
    this.camBounds = null;   // {minX,maxX,minZ,maxZ}

    // lights
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1.2);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xffffff, 2.5);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.03;
    this.sun.shadow.radius = 3;
    const sc = this.sun.shadow.camera; sc.left = -22; sc.right = 22; sc.top = 22; sc.bottom = -22; sc.near = 1; sc.far = 120;
    this.scene.add(this.sun); this.scene.add(this.sun.target);
    // cool fill / rim light opposite the warm key — the classic low-poly lighting recipe
    this.fill = new THREE.DirectionalLight(0x9fb4e8, 0.5);
    this.scene.add(this.fill); this.scene.add(this.fill.target);

    // post
    const composer = new EffectComposer(r);
    composer.addPass(new RenderPass(this.scene, this.camera));
    // ambient occlusion grounds every object (toggle in the pause menu)
    this.ao = new GTAOPass(this.scene, this.camera, window.innerWidth, window.innerHeight);
    this.ao.updateGtaoMaterial({ radius: 0.4, distanceExponent: 1.4, thickness: 0.35, scale: 1.1, samples: 12, distanceFallOff: 0.6 });
    this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
    this.ao.blendIntensity = 0.85;
    this.ao.enabled = false;
    // glow sprites, particles and other see-through effects must not cast AO
    // (otherwise their flat quads show up as dark rectangles)
    this.ao.overrideVisibility = function () {
      const cache = this._visibilityCache;
      this.scene.traverse((o) => {
        cache.set(o, o.visible);
        const m = o.material;
        if (o.isPoints || o.isLine || o.isSprite || (m && (m.transparent || m.depthWrite === false || m.blending === THREE.AdditiveBlending))) o.visible = false;
      });
    };
    composer.addPass(this.ao);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2), 0.3, 0.55, 0.82);
    composer.addPass(this.bloom);
    composer.addPass(new OutputPass());
    this.grade = new ShaderPass(GradeShader);
    composer.addPass(this.grade);
    this.composer = composer;

    // mood state
    this.mood = this._expand(MOOD_DEFAULT);
    this.moodFrom = this._clone(this.mood);
    this.moodTo = this._clone(this.mood);
    this.moodT = 1; this.moodDur = 0;
    this.overrides = {}; // transient multiplicative/additive modifiers (keep moments etc.)
    this._applyMood();

    window.addEventListener('resize', () => this.resize());
    this.resize();
  }

  _expand(m) {
    const o = {};
    for (const k in m) o[k] = Renderer.isColorKey(k) ? new THREE.Color(m[k]) : m[k];
    return o;
  }
  _clone(m) { const o = {}; for (const k in m) o[k] = m[k] instanceof THREE.Color ? m[k].clone() : m[k]; return o; }
  static isColorKey(k) { return ['skyTop', 'skyBottom', 'fog', 'sun', 'hemiSky', 'hemiGround', 'tint', 'fill'].includes(k); }
  setAO(on) { this.ao.enabled = on; }

  // graphics quality, applied live from Settings
  applyQuality(q, pixelRatio) {
    this.quality = q;
    this.ao.enabled = !!q.ao;
    this.bloom.enabled = !!q.bloom;
    const fx = { off: 0, simple: 1, full: 2 }[q.effects] ?? 2;
    this.fx = fx;
    if (fx > 0 && this.grade.material.defines.BLUR_R !== fx) { this.grade.material.defines.BLUR_R = fx; this.grade.material.needsUpdate = true; }
    // shadows
    const want = q.shadows ?? 'high';
    const sm = this.r.shadowMap;
    const prevEnabled = sm.enabled, prevType = sm.type;
    sm.enabled = want !== 'off';
    sm.type = want === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
    const size = want === 'high' ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== size) { this.sun.shadow.mapSize.set(size, size); if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; } }
    this.sun.castShadow = sm.enabled;
    if (prevEnabled !== sm.enabled || prevType !== sm.type) this.scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
    // anti-aliasing in the post-processing targets (WebGL2 MSAA)
    const samples = this.r.capabilities.isWebGL2 ? (q.msaa || 0) : 0;
    for (const rt of [this.composer.renderTarget1, this.composer.renderTarget2]) if (rt.samples !== samples) { rt.samples = samples; rt.dispose(); }
    this.setPixelRatio(pixelRatio);
  }
  setPixelRatio(pr) {
    if (Math.abs(this.r.getPixelRatio() - pr) < 0.01) return;
    this.r.setPixelRatio(pr);
    this.composer.setPixelRatio(pr);
    this.resize();
  }

  // mood can be a preset name, an object, or a preset name + overrides
  setMood(mood, seconds = 2, extra = null) {
    let target = typeof mood === 'string' ? { ...MOOD_DEFAULT, ...MOODS[mood] } : { ...this._flat(this.moodTo), ...mood };
    if (typeof mood === 'string' && !MOODS[mood]) console.warn('unknown mood', mood);
    if (extra) target = { ...target, ...extra };
    this.moodFrom = this._clone(this.mood);
    const to = {};
    for (const k in target) to[k] = Renderer.isColorKey(k) ? new THREE.Color(target[k]) : target[k];
    this.moodTo = to;
    this.moodT = 0; this.moodDur = Math.max(0.0001, seconds);
    if (seconds <= 0) { this.moodT = 1; this.mood = this._clone(to); this._applyMood(); }
  }
  _flat(m) { const o = {}; for (const k in m) o[k] = m[k] instanceof THREE.Color ? m[k].getHex() : m[k]; return o; }
  moodTarget() { return this._flat(this.moodTo); }

  _updateMood(dt) {
    if (this.moodT < 1) {
      this.moodT = Math.min(1, this.moodT + dt / this.moodDur);
      const t = this.moodT * this.moodT * (3 - 2 * this.moodT);
      for (const k in this.moodTo) {
        const a = this.moodFrom[k], b = this.moodTo[k];
        if (b instanceof THREE.Color) {
          if (!(this.mood[k] instanceof THREE.Color)) this.mood[k] = new THREE.Color();
          this.mood[k].copy(a instanceof THREE.Color ? a : b).lerp(b, t);
        } else if (typeof b === 'number') this.mood[k] = lerp(a ?? b, b, t);
      }
      this._applyMood();
    } else this._applyMood(true);
  }

  _applyMood(lightOnly = false) {
    const m = this.mood, o = this.overrides;
    if (!lightOnly) {
      // sky gradient
      const ctx = this.skyCanvas.getContext('2d');
      const g = ctx.createLinearGradient(0, 0, 0, 128);
      g.addColorStop(0, '#' + m.skyTop.getHexString());
      g.addColorStop(1, '#' + m.skyBottom.getHexString());
      ctx.fillStyle = g; ctx.fillRect(0, 0, 2, 128);
      this.skyTex.needsUpdate = true;
      this.scene.fog.color.copy(m.fog);
      this.sun.color.copy(m.sun);
      if (m.fill) this.fill.color.copy(m.fill);
      this.hemi.color.copy(m.hemiSky);
      this.hemi.groundColor.copy(m.hemiGround);
    }
    const fs = Math.max(0.8, this.viewSize / 14);
    this.scene.fog.near = this.camDist + m.fogNear * fs;
    this.scene.fog.far = this.camDist + m.fogFar * fs;
    this.sun.intensity = m.sunIntensity * (o.light ?? 1);
    this.fill.intensity = (m.fillIntensity ?? 0.5) * (o.light ?? 1);
    this.hemi.intensity = m.hemiIntensity * (o.light ?? 1);
    this.r.toneMappingExposure = m.exposure;
    const u = this.grade.uniforms;
    u.saturation.value = m.saturation * (o.saturation ?? 1);
    u.contrast.value = m.contrast;
    u.brightness.value = m.brightness + (o.brightness ?? 0);
    u.warmth.value = m.warmth + (o.warmth ?? 0);
    u.tint.value.copy(m.tint); u.tintAmt.value = m.tintAmt;
    u.vignette.value = m.vignette + (o.vignette ?? 0);
    u.grain.value = m.grain;
    const fxk = this.fx === 0 ? 0 : 1;
    u.tilt.value = m.tilt * fxk;
    u.dream.value = clamp(m.dream + (o.dream ?? 0), 0, 1.2) * fxk;
    u.focus.value.set(o.focusX ?? m.focusX, o.focusY ?? m.focusY);
    u.focusRadius.value = o.focusRadius ?? m.focusRadius;
    u.focusDesat.value = o.focusDesat ?? m.focusDesat;
    this.bloom.strength = m.bloom + (o.bloom ?? 0);
  }

  // transient override (e.g. while keeping a moment); returns a promise when done
  pulse(key, value, seconds = 1) {
    const from = this.overrides[key] ?? (key === 'saturation' || key === 'light' ? 1 : 0);
    return tween(seconds, (t) => { this.overrides[key] = lerp(from, value, t); });
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.r.setSize(w, h);
    this.composer.setSize(w, h);
    const pr = this.r.getPixelRatio();
    this.grade.uniforms.resolution.value.set(w * pr, h * pr);
    this._updateProjection();
  }

  _updateProjection() {
    const w = window.innerWidth, h = window.innerHeight;
    const aspect = w / h;
    // keep a bit more view on portrait phones
    const vs = this.viewSize * (aspect < 1 ? 1.25 : 1);
    this.camera.left = -vs * aspect / 2; this.camera.right = vs * aspect / 2;
    this.camera.top = vs / 2; this.camera.bottom = -vs / 2;
    this.camera.updateProjectionMatrix();
  }

  // ---------- camera ----------
  camOffset() {
    const az = THREE.MathUtils.degToRad(this.camAz), el = THREE.MathUtils.degToRad(this.camEl);
    return new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).multiplyScalar(this.camDist);
  }
  // screen-relative movement basis on the ground plane
  groundBasis() {
    const az = THREE.MathUtils.degToRad(this.camAz);
    const fwd = new THREE.Vector3(-Math.sin(az), 0, -Math.cos(az)); // screen up
    const right = new THREE.Vector3(Math.cos(az), 0, -Math.sin(az));
    return { fwd, right };
  }
  setFollow(obj, offset = null) { this.follow = obj; if (offset) this.followOffset.copy(offset); else this.followOffset.set(0, 0, 0); }
  snapCamera() {
    if (this.follow) this.camGoal.copy(this.follow.position).add(this.followOffset);
    this.camTarget.copy(this.camGoal);
    this.viewSize = this.zoomGoal;
    this._updateProjection();
  }
  // move camera to a point (and optional zoom) — while not following
  async cameraTo(pos, zoom = null, seconds = 2) {
    this.follow = null;
    const from = this.camTarget.clone(), z0 = this.viewSize;
    const to = new THREE.Vector3(pos.x, pos.y ?? 0, pos.z);
    await tween(seconds, (t) => {
      this.camGoal.copy(from).lerp(to, t); this.camTarget.copy(this.camGoal);
      if (zoom) { this.zoomGoal = lerp(z0, zoom, t); this.viewSize = this.zoomGoal; this._updateProjection(); }
    });
  }
  zoomTo(z, seconds = 2) {
    const z0 = this.zoomGoal;
    return tween(seconds, (t) => { this.zoomGoal = lerp(z0, z, t); });
  }

  update(dt) {
    this._updateMood(dt);
    if (this.follow) {
      this.camGoal.copy(this.follow.position).add(this.followOffset);
      this.camGoal.y = Math.max(0, this.camGoal.y * 0.5);
    }
    if (this.camBounds && this.follow) {
      const b = this.camBounds;
      this.camGoal.x = clamp(this.camGoal.x, b.minX, b.maxX);
      this.camGoal.z = clamp(this.camGoal.z, b.minZ, b.maxZ);
    }
    const k = this.followSpeed;
    this.camTarget.x = damp(this.camTarget.x, this.camGoal.x, k, dt);
    this.camTarget.y = damp(this.camTarget.y, this.camGoal.y, k, dt);
    this.camTarget.z = damp(this.camTarget.z, this.camGoal.z, k, dt);
    const nv = damp(this.viewSize, this.zoomGoal, 2.5, dt);
    if (Math.abs(nv - this.viewSize) > 1e-4) { this.viewSize = nv; this._updateProjection(); }
    const off = this.camOffset();
    this.camera.position.copy(this.camTarget).add(off);
    if (this.shake > 0) {
      this.camera.position.x += (Math.random() - 0.5) * this.shake;
      this.camera.position.y += (Math.random() - 0.5) * this.shake;
      this.shake = Math.max(0, this.shake - dt * 2);
    }
    this.camera.lookAt(this.camTarget);
    // sun follows the view so shadows stay crisp around the action
    const m = this.mood;
    const saz = THREE.MathUtils.degToRad(m.sunAz), sel = THREE.MathUtils.degToRad(m.sunEl);
    const sdir = new THREE.Vector3(Math.sin(saz) * Math.cos(sel), Math.sin(sel), Math.cos(saz) * Math.cos(sel));
    this.sun.position.copy(this.camTarget).addScaledVector(sdir, 50);
    this.sun.target.position.copy(this.camTarget);
    const faz = saz + Math.PI, fel = THREE.MathUtils.degToRad(28);
    this.fill.position.copy(this.camTarget).add(new THREE.Vector3(Math.sin(faz) * Math.cos(fel), Math.sin(fel), Math.cos(faz) * Math.cos(fel)).multiplyScalar(50));
    this.fill.target.position.copy(this.camTarget);
    const ss = Math.max(14, this.viewSize * 1.25);
    const sc = this.sun.shadow.camera;
    if (Math.abs(sc.right - ss) > 0.5) { sc.left = -ss; sc.right = ss; sc.top = ss; sc.bottom = -ss; sc.updateProjectionMatrix(); }
    this.grade.uniforms.time.value = G.realTime;
  }

  render() { this.composer.render(); }

  // grab the current frame as a small jpeg (call right after render)
  snapshot(w = 320, h = 240) {
    const src = this.r.domElement;
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    const sa = src.width / src.height, da = w / h;
    let sw = src.width, sh = src.height, sx = 0, sy = 0;
    if (sa > da) { sw = sh * da; sx = (src.width - sw) / 2; } else { sh = sw / da; sy = (src.height - sh) / 2; }
    // crop slightly towards the centre for a more intimate frame
    const crop = 0.82; const cw = sw * crop, ch = sh * crop;
    sx += (sw - cw) / 2; sy += (sh - ch) / 2;
    ctx.drawImage(src, sx, sy, cw, ch, 0, 0, w, h);
    try { return c.toDataURL('image/jpeg', 0.72); } catch (e) { return null; }
  }

  // world → screen pixels
  project(v) {
    const p = v.clone().project(this.camera);
    return { x: (p.x + 1) / 2 * window.innerWidth, y: (1 - p.y) / 2 * window.innerHeight, visible: p.z < 1 };
  }
  // screen → ground plane (y = h)
  unproject(x, y, h = 0) {
    const ndc = new THREE.Vector2(x / window.innerWidth * 2 - 1, -(y / window.innerHeight) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -h);
    const out = new THREE.Vector3();
    return ray.ray.intersectPlane(plane, out) ? out : null;
  }
}
