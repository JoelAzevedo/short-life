// Keyboard, mouse and touch input mapped to a few gentle actions.
import { G } from './game.js';

const MAP = {
  ArrowUp: 'up', KeyW: 'up', ArrowDown: 'down', KeyS: 'down', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right',
  Space: 'act', Enter: 'act', KeyE: 'act', NumpadEnter: 'act',
  Escape: 'pause', KeyP: 'pause', KeyJ: 'album', Tab: 'album',
  Digit1: 'n1', Digit2: 'n2', Digit3: 'n3', Digit4: 'n4',
};

export class Input {
  constructor(el) {
    this.el = el;
    this.held = new Set(); this.pressedSet = new Set(); this.releasedSet = new Set();
    this.pointer = { x: 0, y: 0, down: false, downT: 0, moved: false, startX: 0, startY: 0 };
    this.clicks = []; // {x,y} clicks on the canvas this frame
    this.anyPress = false;
    this.lastDevice = 'keyboard';
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const a = MAP[e.code];
      if (a) { e.preventDefault(); if (!this.held.has(a)) this.pressedSet.add(a); this.held.add(a); }
      if (!e.repeat) this.anyPress = true;
      this.lastDevice = 'keyboard';
      G.audio?.init();
    });
    window.addEventListener('keyup', (e) => { const a = MAP[e.code]; if (a) { this.held.delete(a); this.releasedSet.add(a); } });
    window.addEventListener('blur', () => { this.held.clear(); this.pointer.down = false; });
    el.addEventListener('pointerdown', (e) => {
      this.pointer.down = true; this.pointer.downT = performance.now(); this.pointer.moved = false;
      this.pointer.x = this.pointer.startX = e.clientX; this.pointer.y = this.pointer.startY = e.clientY;
      this.pressedSet.add('pointer'); this.anyPress = true; this.lastDevice = e.pointerType === 'touch' ? 'touch' : 'mouse';
      G.audio?.init();
    });
    window.addEventListener('pointermove', (e) => {
      this.pointer.x = e.clientX; this.pointer.y = e.clientY;
      if (this.pointer.down && Math.hypot(e.clientX - this.pointer.startX, e.clientY - this.pointer.startY) > 12) this.pointer.moved = true;
    });
    window.addEventListener('pointerup', (e) => {
      if (this.pointer.down && e.target === el) {
        const dur = performance.now() - this.pointer.downT;
        if (!this.pointer.moved && dur < 450) this.clicks.push({ x: e.clientX, y: e.clientY });
      }
      this.pointer.down = false; this.releasedSet.add('pointer');
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  isDown(a) { return this.held.has(a); }
  pressed(a) { return this.pressedSet.has(a); }
  released(a) { return this.releasedSet.has(a); }
  consume(a) { this.pressedSet.delete(a); }
  // "hold" = Space/Enter held, or pointer/touch held anywhere
  holding() { return this.held.has('act') || this.pointer.down; }
  axis() {
    let x = 0, y = 0;
    if (this.held.has('left')) x -= 1; if (this.held.has('right')) x += 1;
    if (this.held.has('up')) y += 1; if (this.held.has('down')) y -= 1;
    return { x, y };
  }
  endFrame() { this.pressedSet.clear(); this.releasedSet.clear(); this.clicks.length = 0; this.anyPress = false; }
}
