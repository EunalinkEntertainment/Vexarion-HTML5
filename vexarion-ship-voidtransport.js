// ═══════════════════════════════════════════════════════════════
//  VEXARION — SHIP DEFINITION FILE
//  vexarion-ship-voidtransport.js
//
//  VXT-07 HAULER — Casual Transport Voidship
//  A heavy-bodied bulk transport. Wide cargo hull, stubby wings,
//  dual rear thruster banks. Orange hull plating over a black
//  reinforced frame. Built for endurance, not speed.
//
//  Color theme: burnt orange + charcoal black + rust accents
// ═══════════════════════════════════════════════════════════════

const SHIP_DEF = {

  // ── Identity ────────────────────────────────────────────────
  name:    'VXT-07 HAULER',
  version: '1.0',

  // ── Color Palette ───────────────────────────────────────────
  palette: {
    hull:    '#c45a10',   // main burnt orange hull
    hull2:   '#a04008',   // darker orange panel
    hull3:   '#e07020',   // bright orange highlight
    frame:   '#1a1a1a',   // black structural frame
    frame2:  '#2a2020',   // dark charcoal inner frame
    cargo:   '#3a2810',   // dark cargo bay brown-black
    cargo2:  '#201808',   // deep cargo interior
    rust:    '#7a3010',   // rust accent / worn edges
    eng:     '#ff8c00',   // engine glow orange
    eng2:    '#ff4400',   // engine core hot
    eng3:    '#cc3000',   // engine exhaust dark
    light:   '#ffe0a0',   // nav light pale yellow
    trim:    '#ff6a00',   // orange trim stripe
  },

  // ── Voxel Map ───────────────────────────────────────────────
  //  Nose points toward +Y. Thrusters at -Y end.
  //  This ship is wide and boxy — cargo hauler profile.
  //  Top-down silhouette: rectangular cargo body, short blunt nose,
  //  wide thruster bank at rear.
  voxels: [

    // ═══ NOSE — blunt rounded prow ═══
    [ 0,  5, 0, '#e07020'],
    [ 0,  5, 1, '#c45a10'],
    [-1,  5, 0, '#c45a10'],
    [ 1,  5, 0, '#c45a10'],

    // ═══ FORWARD HULL ═══
    [-1,  4, 0, '#c45a10'],
    [-1,  4, 1, '#a04008'],
    [ 0,  4, 0, '#c45a10'],
    [ 0,  4, 1, '#e07020'],
    [ 0,  4, 2, '#c45a10'],
    [ 1,  4, 0, '#c45a10'],
    [ 1,  4, 1, '#a04008'],

    // ═══ CARGO BODY — wide boxy midsection ═══
    [-2,  3, 0, '#a04008'],
    [-2,  3, 1, '#c45a10'],
    [-1,  3, 0, '#c45a10'],
    [-1,  3, 1, '#3a2810'],
    [-1,  3, 2, '#c45a10'],
    [ 0,  3, 0, '#1a1a1a'],
    [ 0,  3, 1, '#3a2810'],
    [ 0,  3, 2, '#201808'],
    [ 1,  3, 0, '#c45a10'],
    [ 1,  3, 1, '#3a2810'],
    [ 1,  3, 2, '#c45a10'],
    [ 2,  3, 0, '#a04008'],
    [ 2,  3, 1, '#c45a10'],

    [-2,  2, 0, '#1a1a1a'],
    [-2,  2, 1, '#c45a10'],
    [-2,  2, 2, '#a04008'],
    [-1,  2, 0, '#c45a10'],
    [-1,  2, 1, '#201808'],
    [-1,  2, 2, '#3a2810'],
    [ 0,  2, 0, '#1a1a1a'],
    [ 0,  2, 1, '#201808'],
    [ 0,  2, 2, '#1a1a1a'],
    [ 1,  2, 0, '#c45a10'],
    [ 1,  2, 1, '#201808'],
    [ 1,  2, 2, '#3a2810'],
    [ 2,  2, 0, '#1a1a1a'],
    [ 2,  2, 1, '#c45a10'],
    [ 2,  2, 2, '#a04008'],

    [-2,  1, 0, '#a04008'],
    [-2,  1, 1, '#c45a10'],
    [-2,  1, 2, '#a04008'],
    [-1,  1, 0, '#c45a10'],
    [-1,  1, 1, '#3a2810'],
    [-1,  1, 2, '#c45a10'],
    [ 0,  1, 0, '#1a1a1a'],
    [ 0,  1, 1, '#3a2810'],
    [ 0,  1, 2, '#1a1a1a'],
    [ 1,  1, 0, '#c45a10'],
    [ 1,  1, 1, '#3a2810'],
    [ 1,  1, 2, '#c45a10'],
    [ 2,  1, 0, '#a04008'],
    [ 2,  1, 1, '#c45a10'],
    [ 2,  1, 2, '#a04008'],

    // ═══ CENTER SPINE ═══
    [ 0,  0, 0, '#1a1a1a'],
    [ 0,  0, 1, '#2a2020'],
    [ 0,  0, 2, '#1a1a1a'],
    [-1,  0, 0, '#c45a10'],
    [-1,  0, 1, '#a04008'],
    [ 1,  0, 0, '#c45a10'],
    [ 1,  0, 1, '#a04008'],

    // ═══ STUBBY WINGS — wide flat ═══
    [-4,  1, 0, '#7a3010'],
    [-4,  1, 1, '#a04008'],
    [-3,  1, 0, '#a04008'],
    [-3,  1, 1, '#c45a10'],
    [-3,  2, 0, '#a04008'],
    [-3,  2, 1, '#7a3010'],
    [-4,  2, 0, '#7a3010'],

    [ 3,  1, 0, '#a04008'],
    [ 3,  1, 1, '#c45a10'],
    [ 4,  1, 0, '#7a3010'],
    [ 4,  1, 1, '#a04008'],
    [ 3,  2, 0, '#a04008'],
    [ 3,  2, 1, '#7a3010'],
    [ 4,  2, 0, '#7a3010'],

    // Wing tip nav lights
    [-4,  1, 2, '#ffe0a0'],
    [ 4,  1, 2, '#ffe0a0'],

    // ═══ AFT CONNECTOR ═══
    [-1, -1, 0, '#1a1a1a'],
    [-1, -1, 1, '#2a2020'],
    [ 0, -1, 0, '#1a1a1a'],
    [ 0, -1, 1, '#1a1a1a'],
    [ 1, -1, 0, '#1a1a1a'],
    [ 1, -1, 1, '#2a2020'],

    // ═══ THRUSTER BANK — wide quad-engine aft ═══
    [-2, -2, 0, '#ff8c00'],
    [-2, -2, 1, '#ff4400'],
    [-1, -2, 0, '#ff8c00'],
    [-1, -2, 1, '#cc3000'],
    [ 0, -2, 0, '#1a1a1a'],
    [ 0, -2, 1, '#2a2020'],
    [ 1, -2, 0, '#ff8c00'],
    [ 1, -2, 1, '#cc3000'],
    [ 2, -2, 0, '#ff8c00'],
    [ 2, -2, 1, '#ff4400'],

    // Thruster housing
    [-2, -3, 0, '#cc3000'],
    [-1, -3, 0, '#a04008'],
    [ 0, -3, 0, '#1a1a1a'],
    [ 1, -3, 0, '#a04008'],
    [ 2, -3, 0, '#cc3000'],

    // ═══ ORANGE TRIM STRIPE (top spine highlight) ═══
    [ 0,  4, 3, '#ff6a00'],
    [ 0,  3, 3, '#ff6a00'],
    [ 0,  2, 3, '#ff6a00'],
    [ 0,  1, 3, '#ff6a00'],

  ],

  // ── Top-down render hints ────────────────────────────────────
  topdown: {
    voxelSize: 7,
  },

  // ── Isometric render hints ───────────────────────────────────
  iso: {
    tileSize: 12,
  },

};

Object.freeze(SHIP_DEF);
Object.freeze(SHIP_DEF.voxels);
