// Mood presets: sky, light and colour grading. The renderer blends between these.
// Colours are hex numbers; everything else is a float.

export const MOOD_DEFAULT = {
  skyTop: 0xbfd8f0, skyBottom: 0xf7e6d8, fog: 0xf2e2d6, fogNear: 6, fogFar: 46,
  sun: 0xfff1dc, sunIntensity: 2.6, sunAz: 210, sunEl: 52,
  hemiSky: 0xdfe9ff, hemiGround: 0xb59a86, hemiIntensity: 1.25,
  exposure: 1.0,
  saturation: 1.0, contrast: 1.0, brightness: 0.0, warmth: 0.0,
  tint: 0xffffff, tintAmt: 0.0,
  vignette: 0.35, grain: 0.035, bloom: 0.28, tilt: 0.6,
  focusX: 0.5, focusY: 0.5, focusRadius: 2.0, focusDesat: 0.0,
  dream: 0.0, // soft glow/blur used for memories and dreams
};

export const MOODS = {
  dawnNursery: {
    skyTop: 0xf4c7c3, skyBottom: 0xfbe6d4, fog: 0xf7dccf,
    sun: 0xffd2b0, sunIntensity: 2.4, sunAz: 235, sunEl: 28,
    hemiSky: 0xffe0e6, hemiGround: 0xc49a8c, hemiIntensity: 1.35,
    saturation: 0.95, warmth: 0.35, vignette: 0.45, bloom: 0.42, tilt: 0.9, dream: 0.25,
  },
  springMorning: {
    skyTop: 0xa9d3f2, skyBottom: 0xfbeee0, fog: 0xf5ece4,
    sun: 0xfff0d6, sunIntensity: 2.8, sunAz: 220, sunEl: 48,
    hemiSky: 0xe3efff, hemiGround: 0x9fb48a, hemiIntensity: 1.3,
    saturation: 1.05, warmth: 0.15, vignette: 0.32, bloom: 0.32, tilt: 0.75, dream: 0.12,
  },
  summerDay: {
    skyTop: 0x7fc4f0, skyBottom: 0xe6f4ff, fog: 0xdfeefa,
    sun: 0xfff6e0, sunIntensity: 3.1, sunAz: 205, sunEl: 58,
    hemiSky: 0xe9f4ff, hemiGround: 0x8fae6e, hemiIntensity: 1.25,
    saturation: 1.18, contrast: 1.04, warmth: 0.1, vignette: 0.28, bloom: 0.26, tilt: 0.6,
  },
  summerDusk: {
    skyTop: 0x5b5f9e, skyBottom: 0xf6b98a, fog: 0xe8a98a,
    sun: 0xffb27a, sunIntensity: 2.1, sunAz: 250, sunEl: 14,
    hemiSky: 0x9c8fd0, hemiGround: 0x8b6a5a, hemiIntensity: 1.1,
    saturation: 1.1, warmth: 0.45, vignette: 0.42, bloom: 0.45, tilt: 0.75,
  },
  summerNight: {
    skyTop: 0x141a3a, skyBottom: 0x3a3f72, fog: 0x2c3263,
    sun: 0x9fb4ff, sunIntensity: 0.9, sunAz: 140, sunEl: 40,
    hemiSky: 0x5a66b0, hemiGround: 0x2a2440, hemiIntensity: 0.9,
    saturation: 0.95, warmth: -0.1, vignette: 0.55, bloom: 0.7, tilt: 0.8,
  },
  goldenAfternoon: {
    skyTop: 0x8fb8e6, skyBottom: 0xffdcae, fog: 0xf8d9b4,
    sun: 0xffcf8c, sunIntensity: 3.0, sunAz: 240, sunEl: 30,
    hemiSky: 0xfde3c0, hemiGround: 0xa08060, hemiIntensity: 1.2,
    saturation: 1.12, contrast: 1.05, warmth: 0.4, vignette: 0.35, bloom: 0.35, tilt: 0.65,
  },
  rainyGrey: {
    skyTop: 0x7c8794, skyBottom: 0xb9c2c8, fog: 0xaab3ba,
    sun: 0xd8e2ec, sunIntensity: 1.1, sunAz: 200, sunEl: 60,
    hemiSky: 0xc7d2dc, hemiGround: 0x6a6f70, hemiIntensity: 1.35,
    saturation: 0.55, contrast: 0.95, warmth: -0.25, vignette: 0.5, bloom: 0.15, tilt: 0.7,
  },
  autumnEvening: {
    skyTop: 0x3d3a6b, skyBottom: 0xf39a6b, fog: 0xd9876a,
    sun: 0xff9f6a, sunIntensity: 1.9, sunAz: 255, sunEl: 12,
    hemiSky: 0x8f7cc0, hemiGround: 0x7a5040, hemiIntensity: 1.05,
    saturation: 1.15, warmth: 0.5, vignette: 0.45, bloom: 0.6, tilt: 0.7,
  },
  festivalNight: {
    skyTop: 0x101436, skyBottom: 0x3b2d5c, fog: 0x2e2650,
    sun: 0xa3a8ff, sunIntensity: 0.7, sunAz: 130, sunEl: 45,
    hemiSky: 0x6a5aa8, hemiGround: 0x3a2a3a, hemiIntensity: 0.95,
    saturation: 1.1, warmth: 0.2, vignette: 0.5, bloom: 0.85, tilt: 0.75,
  },
  weddingDay: {
    skyTop: 0x9fcff2, skyBottom: 0xfff1e2, fog: 0xfbefe4,
    sun: 0xfff3dc, sunIntensity: 3.0, sunAz: 215, sunEl: 50,
    hemiSky: 0xf1f4ff, hemiGround: 0xa6b88a, hemiIntensity: 1.35,
    saturation: 1.08, warmth: 0.25, vignette: 0.3, bloom: 0.45, tilt: 0.7, dream: 0.15,
  },
  nurseryNight: {
    skyTop: 0x1d2448, skyBottom: 0x3d4a7a, fog: 0x2e3866,
    sun: 0x8ea6ff, sunIntensity: 0.55, sunAz: 140, sunEl: 40,
    hemiSky: 0x6070b8, hemiGround: 0x3a3048, hemiIntensity: 0.75,
    saturation: 0.95, warmth: 0.15, vignette: 0.55, bloom: 0.8, tilt: 0.9,
  },
  homeMorning: {
    skyTop: 0xb4d6f2, skyBottom: 0xfdeedd, fog: 0xf8eadc,
    sun: 0xffeccc, sunIntensity: 2.7, sunAz: 225, sunEl: 40,
    hemiSky: 0xf0f0ff, hemiGround: 0xb39a80, hemiIntensity: 1.4,
    saturation: 1.05, warmth: 0.28, vignette: 0.32, bloom: 0.35, tilt: 0.7,
  },
  fastForward: {
    skyTop: 0x9aaecb, skyBottom: 0xe8dccf, fog: 0xded3c8,
    sun: 0xfff0e0, sunIntensity: 2.4, sunAz: 210, sunEl: 45,
    hemiSky: 0xe0e6f0, hemiGround: 0x9a9080, hemiIntensity: 1.3,
    saturation: 0.85, contrast: 1.08, warmth: 0.0, vignette: 0.5, bloom: 0.3, tilt: 0.95,
  },
  emptyHouse: {
    skyTop: 0x9aa3ad, skyBottom: 0xd6d2cc, fog: 0xcfcac4,
    sun: 0xf0e8de, sunIntensity: 1.8, sunAz: 230, sunEl: 26,
    hemiSky: 0xd8dde4, hemiGround: 0x8a8076, hemiIntensity: 1.25,
    saturation: 0.45, contrast: 0.96, warmth: -0.05, vignette: 0.55, bloom: 0.2, tilt: 0.8,
  },
  winterMorning: {
    skyTop: 0xb7c6d8, skyBottom: 0xeef1f4, fog: 0xe6eaef,
    sun: 0xf3f2ff, sunIntensity: 2.2, sunAz: 205, sunEl: 22,
    hemiSky: 0xeef3ff, hemiGround: 0xb8c0cc, hemiIntensity: 1.5,
    saturation: 0.35, contrast: 0.98, warmth: -0.2, vignette: 0.45, bloom: 0.3, tilt: 0.8,
  },
  winterDusk: {
    skyTop: 0x37406a, skyBottom: 0xd9a8a0, fog: 0xbfa6aa,
    sun: 0xffc2a0, sunIntensity: 1.6, sunAz: 250, sunEl: 10,
    hemiSky: 0x9aa4d0, hemiGround: 0x9090a0, hemiIntensity: 1.2,
    saturation: 0.7, warmth: 0.3, vignette: 0.5, bloom: 0.6, tilt: 0.8,
  },
  dream: {
    skyTop: 0xf6d7e6, skyBottom: 0xfff6e8, fog: 0xfff1ea,
    sun: 0xfff4e6, sunIntensity: 2.6, sunAz: 220, sunEl: 40,
    hemiSky: 0xfff0f6, hemiGround: 0xe6cfc0, hemiIntensity: 1.6,
    saturation: 1.0, warmth: 0.3, vignette: 0.25, bloom: 0.75, tilt: 0.9, dream: 0.6,
    fogNear: 2, fogFar: 34,
  },
  kitchenNight: {
    skyTop: 0x161a30, skyBottom: 0x2d3150, fog: 0x262a45,
    sun: 0xa8b4ff, sunIntensity: 0.5, sunAz: 140, sunEl: 40,
    hemiSky: 0x5a5f90, hemiGround: 0x3a3030, hemiIntensity: 0.6,
    saturation: 0.75, warmth: 0.35, vignette: 0.6, bloom: 0.75, tilt: 0.9,
  },
  black: {
    skyTop: 0x050508, skyBottom: 0x0a0a10, fog: 0x08080c, sunIntensity: 0.0, hemiIntensity: 0.1,
  },
};
