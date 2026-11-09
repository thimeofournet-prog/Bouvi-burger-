// Assemble les modèles CC0 (KayKit Restaurant Bits, Kenney Food Kit / Furniture Kit / Mini Characters)
// en quelques fichiers .glb optimisés dans assets/models/.
// Usage : node tools/build-assets.mjs <dossier des packs téléchargés>
import { Document, NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, mergeDocuments, unpartition } from '@gltf-transform/functions';
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';

const SRC = process.argv[2] || '/tmp/claude-0/raw';
const OUT = new URL('../assets/models/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

const KK = `${SRC}/kaykit-restaurant/3D/food/Assets/gltf/`;
const KF = `${SRC}/kenney-food-kit/3D/food/Models/GLB format/`;
const KN = `${SRC}/kenney-furniture-kit/3D/interior-furniture/Models/GLTF format/`;
const KC = `${SRC}/kenney-mini-characters/3D/characters/Models/GLB format/`;

const kk = ['crate_buns','crate_steak','crate_lettuce','crate_tomatoes','crate_cheese','crate_onions','crate_ham','crate_potatoes','crate_carrots','crate_dough','crate','crate_lid',
 'kitchencounter_straight_A','kitchencounter_straight_B','kitchencounter_straight_A_backsplash','kitchencounter_straight_B_backsplash','kitchencounter_sink','kitchencounter_sink_backsplash',
 'kitchencounter_straight_A_decorated','kitchencounter_straight_decorated','kitchentable_A','kitchentable_A_large','kitchentable_B','kitchentable_sink','kitchentable_A_large_decorated_A','kitchentable_A_large_decorated_B',
 'kitchencabinet','kitchencabinet_half','stove_multi','stove_multi_countertop','stove_multi_decorated','stove_single','stove_single_countertop','oven','pizza_oven',
 'pot_A','pot_B','pot_large','pot_A_stew','pan_A','pan_B','pan_006','lid_A','lid_B','lid_large','icecream_machine','icecream_cone','icecream_scoop','icecream_container',
 'fridge_A','fridge_B','fridge_A_decorated','extractorhood','menu','pizzabox_stacked','pizzabox_closed','ketchup','mustard','jar_A_small','jar_B_small','jar_C_small','jar_D_small','jar_A_medium','jar_C_medium','jar_D_medium',
 'papertowel','shelf_papertowel','shelf_papertowel_decorated','dishrack','dishrack_plates','towelrail','cuttingboard','knife','rollingpin','spoon','plate','plate_small','bowl','chair_A','chair_B','chair_stool',
 'table_round_A','table_round_A_small','table_round_A_decorated','table_round_A_small_decorated','table_round_B','table_round_B_tablecloth_red','table_round_B_tablecloth_green','table_round_B_tablecloth_red_decorated',
 'wall','wall_decorated','wall_doorway','wall_half','wall_orderwindow','wall_orderwindow_decorated','wall_tiles_A','wall_tiles_B','wall_window_closed','wall_window_closed_curtains_red','wall_window_closed_curtains_green','wall_window_open',
 'door_A','door_B','floor_kitchen','floor_kitchen_styleB','floor_kitchen_small','floor_kitchen_small_styleB','pillar_A','pillar_B',
 'food_burger','food_ingredient_bun','food_ingredient_bun_bottom','food_ingredient_bun_top','food_ingredient_burger_cooked','food_ingredient_burger_uncooked','food_ingredient_burger_trash',
 'food_ingredient_cheese','food_ingredient_cheese_slice','food_ingredient_lettuce','food_ingredient_lettuce_slice','food_ingredient_onion','food_ingredient_onion_rings','food_ingredient_tomato','food_ingredient_tomato_slice',
 'food_ingredient_potato','food_ingredient_potato_chopped','food_ingredient_potato_mashed','food_ingredient_ham','food_ingredient_ham_cooked','food_ingredient_steak','food_ingredient_pepperoni','food_ingredient_pepperoni_slices','food_ingredient_dough'
].map(n => [n, KK + n + '.gltf']);
const kf = ['bacon','bacon-raw','burger','burger-cheese','burger-double','cheese','cheese-cut','cup','frappe','fries','fries-empty','soda','soda-can','meat-patty','meat-raw','meat-cooked','onion','onion-half',
 'bottle-ketchup','bottle-musterd','bottle-oil','tomato-slice','sausage','corn-dog','frying-pan','cooking-spatula','cooking-fork','bag','carton','pizza-box','cocktail','sundae','ice-cream-cup','rice-ball','dim-sum','croissant','donut','cake-slicer','styrofoam']
 .map(n => ['f_' + n, KF + n + '.glb']);
const kn = ['kitchenCoffeeMachine','kitchenBlender','kitchenMicrowave','trashcan','pottedPlant','plantSmall1','plantSmall2','plantSmall3','lampSquareCeiling','lampRoundFloor','lampWall','kitchenFridgeSmall','kitchenFridgeLarge','kitchenFridge','rugDoormat','stoolBar','sideTable','loungeDesignSofa','kitchenSink','kitchenStove','kitchenCabinet']
 .map(n => ['n_' + n, KN + n + '.glb']);

async function pack(list, outName, opts = {}) {
  const main = new Document();
  main.createBuffer();
  const scene = main.createScene('kit');
  for (const [name, path] of list) {
    const src = await io.read(path);
    const before = new Set(main.getRoot().listScenes());
    mergeDocuments(main, src);
    const newScenes = main.getRoot().listScenes().filter(s => !before.has(s));
    const holder = main.createNode(name);
    for (const s of newScenes) { for (const c of s.listChildren()) { s.removeChild(c); holder.addChild(c); } s.dispose(); }
    scene.addChild(holder);
  }
  main.getRoot().setDefaultScene(scene);
  await main.transform(dedup(), prune(), unpartition());
  const bin = await io.writeBinary(main);
  writeFileSync(OUT + outName, bin);
  console.log(outName, (bin.length / 1024).toFixed(0) + ' KB,', list.length, 'modèles');
}

await pack([...kk, ...kf, ...kn], 'props.glb');

// personnages : un fichier par personnage (peau animée)
for (const l of ['a','b','c','d','e','f']) {
  for (const g of ['male','female']) {
    const doc = await io.read(`${KC}character-${g}-${l}.glb`);
    await doc.transform(dedup(), prune(), unpartition());
    const bin = await io.writeBinary(doc);
    writeFileSync(`${OUT}char-${g}-${l}.glb`, bin);
    console.log(`char-${g}-${l}.glb`, (bin.length / 1024).toFixed(0), 'KB');
  }
}
