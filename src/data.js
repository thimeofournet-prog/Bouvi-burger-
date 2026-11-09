// Données du jeu : recettes, produits, niveaux, améliorations.
export const euro = v => v.toFixed(2).replace('.', ',') + ' €';

export const NAMES = {
  bun: 'Pain', raw: 'Steak cru', patty: 'Steak cuit', burnt: 'Steak brûlé', lettuce: 'Salade', tomato: 'Tomate', cheese: 'Cheddar', onion: 'Oignons',
  maroilles: 'Maroilles', rawbacon: 'Bacon cru', bacon: 'Bacon', burntbacon: 'Bacon brûlé', ketchup: 'Ketchup', mayo: 'Mayo', mustard: 'Moutarde',
  frozen: 'Frites surgelées', fries: 'Frites', charred: 'Frites brûlées', nugfrozen: 'Nuggets surgelés', nuggets: 'Nuggets', charnug: 'Nuggets brûlés',
  cup: 'Gobelet vide', soda: 'Soda', shake: 'Milkshake', burger: 'Burger', sauce: 'Sauce', shakemix: 'Mix milkshake',
};

// Garnitures posables sur un burger (tout ce qui n'est pas une sauce)
export const FILL = ['patty', 'lettuce', 'tomato', 'cheese', 'onion', 'bacon', 'maroilles'];
export const SAUCES = ['ketchup', 'mayo', 'mustard'];

export const RECIPES = [
  { id: 'classique', n: 'Le Classique', f: ['patty', 'lettuce', 'tomato', 'ketchup'], p: 6.5, lvl: 1 },
  { id: 'cheese', n: 'Le Cheese', f: ['patty', 'cheese', 'ketchup', 'mustard'], p: 6.9, lvl: 1 },
  { id: 'double', n: 'Le Double', f: ['patty', 'patty', 'cheese', 'cheese', 'ketchup'], p: 8.9, lvl: 1 },
  { id: 'chti', n: "Le Ch'ti", f: ['patty', 'cheese', 'onion', 'mustard'], p: 7.5, lvl: 2 },
  { id: 'bouvines', n: 'Le Bouvines', f: ['patty', 'lettuce', 'tomato', 'onion', 'mayo'], p: 7.9, lvl: 2 },
  { id: 'bacon', n: 'Le Bacon', f: ['patty', 'cheese', 'bacon', 'ketchup'], p: 8.4, lvl: 3 },
  { id: 'maroilles', n: 'Le Maroilles', f: ['patty', 'maroilles', 'onion', 'mayo'], p: 9.5, lvl: 6 },
];

export const PRICE = { fries: 2.5, soda: 2, nuggets: 3.5, shake: 3.5 };

// Produits en stock. id = identifiant de la caisse (crate:<id>) ; pack = quantité livrée ; cost = prix du lot.
export const PRODUCTS = [
  { id: 'bun', n: 'Pains', pack: 12, cost: 5, lvl: 1, icon: 'bun' },
  { id: 'raw', n: 'Steaks', pack: 10, cost: 11, lvl: 1, icon: 'patty' },
  { id: 'lettuce', n: 'Salade', pack: 10, cost: 4, lvl: 1, icon: 'lettuce' },
  { id: 'tomato', n: 'Tomates', pack: 10, cost: 4.5, lvl: 1, icon: 'tomato' },
  { id: 'cheese', n: 'Cheddar', pack: 12, cost: 6, lvl: 1, icon: 'cheese' },
  { id: 'ketchup', n: 'Ketchup', pack: 20, cost: 3, lvl: 1, icon: 'ketchup', unit: 'doses' },
  { id: 'mustard', n: 'Moutarde', pack: 20, cost: 3, lvl: 1, icon: 'mustard', unit: 'doses' },
  { id: 'frozen', n: 'Frites surgelées', pack: 6, cost: 7, lvl: 1, icon: 'fries', unit: 'sachets' },
  { id: 'cup', n: 'Gobelets', pack: 12, cost: 4, lvl: 1, icon: 'soda' },
  { id: 'onion', n: 'Oignons', pack: 10, cost: 3.5, lvl: 2, icon: 'onion' },
  { id: 'mayo', n: 'Mayo', pack: 20, cost: 3, lvl: 2, icon: 'mayo', unit: 'doses' },
  { id: 'rawbacon', n: 'Bacon', pack: 10, cost: 9, lvl: 3, icon: 'bacon' },
  { id: 'nugfrozen', n: 'Nuggets surgelés', pack: 6, cost: 8, lvl: 4, icon: 'nuggets', unit: 'sachets' },
  { id: 'shakemix', n: 'Mix milkshake', pack: 8, cost: 8, lvl: 5, icon: 'shake', unit: 'doses' },
  { id: 'maroilles', n: 'Maroilles', pack: 8, cost: 13, lvl: 6, icon: 'maroilles' },
];
export const PROD = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));
export const START_STOCK = { bun: 24, raw: 18, lettuce: 14, tomato: 14, cheese: 14, ketchup: 30, mustard: 30, frozen: 10, cup: 16 };
export const DELIVERY_T = 8; // secondes

// Niveaux : xp cumulée nécessaire pour atteindre chaque niveau (index 0 = niveau 1)
export const XP_AT = [0, 90, 230, 430, 690, 1010, 1400, 1880, 2460, 3150];
export const MAX_LEVEL = XP_AT.length;
export const UNLOCKS = {
  2: { t: 'Oignons et mayo', d: 'Nouveaux burgers : Le Ch’ti et Le Bouvines.' },
  3: { t: 'Bacon sur la plancha', d: 'Nouveau burger : Le Bacon.' },
  4: { t: 'Nuggets à la friteuse', d: 'Les clients commandent aussi des nuggets.' },
  5: { t: 'Machine à milkshake', d: 'Les clients peuvent prendre un milkshake.' },
  6: { t: 'Burger au Maroilles', d: 'Le Maroilles, la fierté du Nord.' },
  7: { t: 'Rush du midi', d: 'Plus de clients : la pub fait son effet.' },
  8: { t: 'Clients exigeants', d: 'Les commandes se complexifient.' },
  9: { t: 'Réputation locale', d: 'Les pourboires augmentent.' },
  10: { t: 'Maître burger', d: 'Vous êtes une légende de Bouvines !' },
};
export const levelFor = xp => { let l = 1; for (let i = 0; i < XP_AT.length; i++) if (xp >= XP_AT[i]) l = i + 1; return l; };

// Boutique d'améliorations (entre deux jours)
export const UPGRADES = [
  { id: 'grill', n: 'Plancha plus grande', d: n => n === 0 ? '4 steaks à la fois → 6' : '6 steaks à la fois → 8', costs: [70, 150], icon: 'patty' },
  { id: 'fryer', n: 'Troisième panier', d: () => 'Une 3e cuve à la friteuse', costs: [90], icon: 'fries' },
  { id: 'machine', n: 'Machines plus rapides', d: n => 'Soda et milkshake ' + (n === 0 ? '−25 %' : '−45 %') + ' de temps', costs: [50, 120], icon: 'soda' },
  { id: 'deco', n: 'Belle déco', d: n => 'Clients plus patients (+' + (n + 1) * 12 + ' %)', costs: [40, 90, 160], icon: 'tomato' },
  { id: 'ad', n: 'Publicité', d: n => 'Plus de clients (+' + (n + 1) * 15 + ' %)', costs: [60, 120, 220], icon: 'cheese' },
];

// Temps de cuisson (secondes)
export const GRILL_T1 = 10, GRILL_T2 = 32, FRY_T1 = 9, FRY_T2 = 34, SODA_T = 3, SHAKE_T = 5, DAY = 360;

// Lieux (mètres)
export const DOOR = { x: 2.5, z: 7.3 }, REG = { x: -2.6, z: 2.5 }, PICK = { x: 1.0, z: 2.5 };
export const WAITS = [{ x: 1.0, z: 3.4 }, { x: 2.0, z: 3.8 }, { x: 3.0, z: 3.4 }, { x: 3.9, z: 3.9 }, { x: 1.6, z: 4.6 }];
export const SPAWN = [{ x: -0.8, z: -0.6 }, { x: 0.8, z: -0.6 }];
