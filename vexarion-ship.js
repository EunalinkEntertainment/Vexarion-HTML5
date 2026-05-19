// ═══════════════════════════════════════════════════════════════
//  VEXARION — SHIP DEFINITION FILE
//  vexarion-ship.js
//
//  This file is isolated from the main game engine.
//  To create a new ship design, duplicate this file, rename it,
//  and change SHIP_DEF below. The main game loads whichever
//  ship file is referenced in the <script> tag.
//
//  Voxel format: [x, y, z, color]
//    x = left/right  (0 = center)
//    y = back/front  (positive = nose direction)
//    z = down/up     (0 = ground level)
//
//  Origin [0,0,0] is the rotation pivot of the ship.
//  All cubes are rendered relative to this origin.
// ═══════════════════════════════════════════════════════════════

const SHIP_DEF = {

  // ── Identity ────────────────────────────────────────────────
  name:    'VXR-01 FALCON',
  version: '1.0',

  // ── Color Palette ───────────────────────────────────────────
  palette: {
    hull:  '#607080',
    hull2: '#4a5a6a',
    dark:  '#303840',
    eng:   '#ff6020',   // engine / thruster
    eng2:  '#cc4010',
    wing:  '#5060a0',
    wing2: '#3a4a80',
    nose:  '#909aaa',
    nose2: '#c0cad8',
  },

  // ── Voxel Map ───────────────────────────────────────────────
  //  Nose points toward +Y. Thrusters are at -Y end.
  //  Orange (eng) cubes = thruster pods — they should appear
  //  at the BACK in top-down view and at the BACK in iso view.
  voxels: [
    // NOSE
    [ 0,  4, 0, '#c0cad8'],
    [ 0,  4, 1, '#909aaa'],

    // FORWARD FUSELAGE
    [ 0,  3, 0, '#607080'],
    [ 0,  3, 1, '#607080'],
    [ 0,  2, 0, '#607080'],
    [ 0,  2, 1, '#4a5a6a'],

    // CENTER BODY
    [-1,  1, 0, '#607080'],
    [-1,  1, 1, '#607080'],
    [ 0,  1, 0, '#607080'],
    [ 0,  1, 1, '#4a5a6a'],
    [ 0,  1, 2, '#607080'],
    [ 1,  1, 0, '#607080'],
    [ 1,  1, 1, '#607080'],

    [-1,  0, 0, '#607080'],
    [-1,  0, 1, '#4a5a6a'],
    [ 0,  0, 0, '#607080'],
    [ 0,  0, 1, '#607080'],
    [ 0,  0, 2, '#303840'],
    [ 1,  0, 0, '#607080'],
    [ 1,  0, 1, '#4a5a6a'],

    // WINGS
    [-3,  0, 0, '#5060a0'],
    [-3,  0, 1, '#3a4a80'],
    [-2,  0, 0, '#5060a0'],
    [-2,  0, 1, '#5060a0'],
    [-2,  1, 0, '#3a4a80'],
    [ 2,  0, 0, '#5060a0'],
    [ 2,  0, 1, '#5060a0'],
    [ 3,  0, 0, '#5060a0'],
    [ 3,  0, 1, '#3a4a80'],
    [ 2,  1, 0, '#3a4a80'],

    // ENGINE PODS (thrusters — back of ship, -Y side)
    [-1, -1, 0, '#ff6020'],
    [-1, -1, 1, '#cc4010'],
    [ 1, -1, 0, '#ff6020'],
    [ 1, -1, 1, '#cc4010'],

    // AFT BODY
    [-1, -2, 0, '#303840'],
    [ 0, -2, 0, '#303840'],
    [ 1, -2, 0, '#303840'],
    [ 0, -1, 0, '#607080'],
    [ 0, -1, 1, '#4a5a6a'],
  ],

  // ── Top-down render hints ────────────────────────────────────
  topdown: {
    voxelSize: 8,       // px per voxel unit at scale=1
  },

  // ── Isometric render hints ───────────────────────────────────
  iso: {
    tileSize: 13,       // px per tile unit at scale=1
  },

};

// Freeze so nothing in the engine accidentally mutates the definition
Object.freeze(SHIP_DEF);
Object.freeze(SHIP_DEF.voxels);
