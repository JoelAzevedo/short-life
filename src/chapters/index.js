// The whole life, in order.
import { prologue } from './ch0_prologue.js';
import { nursery, firstSpring } from './ch1_tiny.js';
import { garden, summerNight } from './ch2_wonder.js';
import { town, rain } from './ch3_running.js';
import { festival, wedding } from './ch4_together.js';
import { newborn, firstSteps, backyard, bedtime } from './ch5_little.js';
import { sofast, leaving } from './ch6_sofast.js';
import { quietHouse, snowDay, lastNight } from './ch7_winter.js';
import { epilogue } from './ch8_epilogue.js';

export const SCENES = [
  prologue,
  nursery, firstSpring,
  garden, summerNight,
  town, rain,
  festival, wedding,
  newborn, firstSteps, backyard, bedtime,
  sofast, leaving,
  quietHouse, snowDay, lastNight,
  epilogue,
];
