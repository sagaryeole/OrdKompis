// Enrichment script: classify verb groups, derive imperativ + supinum for all 478 verbs
const fs = require('fs');

// Load current verbs
const code = fs.readFileSync('data/verbs.js', 'utf8');
const sandbox = {};
eval(code.replace('window.', 'sandbox.'));
const verbs = sandbox.ORDKOMPIS_VERBS;

// Manual overrides for tricky verbs
const manualGroup = {
  'vara': 'Oregelbunden', 'ha': 'Oregelbunden', 'bli': 'Grupp 4 (stark)',
  'göra': 'Oregelbunden', 'gå': 'Oregelbunden', 'se': 'Grupp 4 (stark)',
  'ge': 'Grupp 4 (stark)', 'få': 'Oregelbunden', 'säga': 'Oregelbunden',
  'kunna': 'Modal', 'vilja': 'Modal', 'måste': 'Modal', 'ska': 'Modal',
  'behöva': 'Grupp 2a', 'veta': 'Oregelbunden', 'finnas': 'Grupp 4 (stark)',
  'hända': 'Grupp 2a', 'komma': 'Grupp 4 (stark)', 'ta': 'Grupp 4 (stark)',
  'dra': 'Grupp 4 (stark)', 'låta': 'Grupp 4 (stark)', 'slå': 'Grupp 4 (stark)',
  'stå': 'Oregelbunden', 'ligga': 'Grupp 4 (stark)', 'sitta': 'Grupp 4 (stark)',
  'äta': 'Grupp 4 (stark)', 'dricka': 'Grupp 4 (stark)', 'skriva': 'Grupp 4 (stark)',
  'brinna': 'Grupp 4 (stark)', 'springa': 'Grupp 4 (stark)', 'sjunga': 'Grupp 4 (stark)',
  'flyga': 'Grupp 4 (stark)', 'falla': 'Grupp 4 (stark)', 'vinna': 'Grupp 4 (stark)',
  'bära': 'Grupp 4 (stark)', 'sticka': 'Grupp 4 (stark)', 'bita': 'Grupp 4 (stark)',
  'frysa': 'Grupp 4 (stark)', 'bryta': 'Grupp 4 (stark)', 'dyka': 'Grupp 4 (stark)',
  'glida': 'Grupp 4 (stark)', 'krypa': 'Grupp 4 (stark)', 'riva': 'Grupp 4 (stark)',
  'skina': 'Grupp 4 (stark)', 'skära': 'Grupp 4 (stark)', 'sova': 'Grupp 4 (stark)',
  'gråta': 'Grupp 4 (stark)', 'hålla': 'Grupp 4 (stark)', 'växa': 'Grupp 4 (stark)',
  'välja': 'Grupp 4 (stark)', 'förstå': 'Oregelbunden', 'lägga': 'Oregelbunden',
  'sätta': 'Oregelbunden', 'be': 'Grupp 4 (stark)', 'hinna': 'Grupp 4 (stark)',
  'slippa': 'Grupp 4 (stark)', 'duga': 'Grupp 4 (stark)',
  'lyckas': 'Deponent', 'hoppas': 'Deponent', 'minnas': 'Deponent',
  'andas': 'Deponent', 'svettas': 'Deponent', 'kräkas': 'Deponent',
  'födas': 'Deponent', 'finnas': 'Deponent', 'trivas': 'Deponent',
  'skämmas': 'Deponent', 'synas': 'Deponent', 'märkas': 'Deponent',
  'töras': 'Deponent', 'lära': 'Grupp 2a'
};

const manualImperativ = {
  'vara': 'var', 'ha': 'ha', 'göra': 'gör', 'gå': 'gå', 'ge': 'ge',
  'se': 'se', 'ta': 'ta', 'få': '—', 'säga': 'säg', 'komma': 'kom',
  'kunna': '—', 'vilja': '—', 'måste': '—', 'ska': '—', 'veta': '—',
  'bli': 'bli', 'stå': 'stå', 'dra': 'dra', 'slå': 'slå', 'be': 'be',
  'låta': 'låt', 'dö': 'dö', 'må': '—', 'nå': 'nå', 'hinna': '—',
  'behöva': '—', 'bruka': '—', 'orka': '—', 'slippa': '—', 'duga': '—',
  'lyckas': '—', 'hoppas': '—', 'finnas': '—', 'minnas': '—',
  'andas': '—', 'svettas': '—', 'kräkas': '—', 'födas': '—',
  'trivas': '—', 'skämmas': '—', 'synas': '—', 'märkas': '—',
  'verka': '—', 'töras': '—', 'behaga': '—', 'gälla': '—',
  'regna': '—', 'snöa': '—', 'hagla': '—', 'dugga': '—', 'storma': '—',
  'blixtra': '—', 'åska': '—', 'ljusna': '—', 'skymma': '—',
  'ske': '—', 'hända': '—', 'inträffa': '—', 'kosta': '—', 'fungera': '—',
  'stämma': '—', 'bestå': '—'
};

function classifyGroup(v) {
  const inf = v[2], pres = v[3], pret = v[4], perf = v[5];
  const baseInf = inf.split(' ')[0]; // Handle particle verbs

  // Check manual overrides first (use base infinitive for particle verbs)
  if (manualGroup[baseInf]) return manualGroup[baseInf];
  if (manualGroup[inf]) return manualGroup[inf];

  const basePres = pres.split(' ')[0];
  const basePret = pret.split('/')[0].trim().split(' ')[0];

  // Deponent verbs (passive form as main form)
  if (basePres.endsWith('s') && baseInf.endsWith('s')) return 'Deponent';

  // Group 1: presens ends in -ar
  if (basePres.endsWith('ar')) return 'Grupp 1';

  // Group 3: short verbs where presens = stem + r, no -er/-ar
  if (baseInf.length <= 3 && !basePres.endsWith('ar') && !basePres.endsWith('er') && basePres.endsWith('r')) {
    return 'Grupp 3';
  }

  // Group 2 vs Group 4
  if (basePres.endsWith('er')) {
    // Check preteritum ending
    if (basePret.endsWith('ade')) return 'Grupp 1'; // Loanwords that have -erar
    if (basePret.endsWith('de')) return 'Grupp 2a';
    if (basePret.endsWith('te')) return 'Grupp 2b';
    // If vowel change in preteritum → Group 4
    return 'Grupp 4 (stark)';
  }

  // Special presens forms (like "är", "vet", "kan", etc.)
  return 'Oregelbunden';
}

function deriveImperativ(v, group) {
  const inf = v[2];
  const baseInf = inf.split(' ')[0];
  const particle = inf.includes(' ') ? ' ' + inf.split(' ').slice(1).join(' ') : '';

  function commandForm(value) {
    return value === '—' ? value : value.replace(/\bsig$/, 'dig');
  }

  // Check manual override
  if (manualImperativ[inf] !== undefined) return commandForm(manualImperativ[inf]);
  if (manualImperativ[baseInf] !== undefined) {
    const imp = manualImperativ[baseInf];
    return commandForm(imp === '—' ? '—' : imp + particle);
  }

  // Deponent verbs generally don't have imperativ
  if (group === 'Deponent') return '—';
  if (group === 'Modal') return '—';

  // Group 1: imperativ = infinitive (keep -a)
  if (group === 'Grupp 1') return commandForm(inf);

  // Group 2a, 2b, 4: remove trailing -a
  if (baseInf.endsWith('a')) {
    return commandForm(baseInf.slice(0, -1) + particle);
  }

  // Group 3: same as infinitive
  if (group === 'Grupp 3') return commandForm(inf);

  return commandForm(inf); // Fallback
}

function deriveSupinum(v) {
  const perf = v[5];
  if (perf === '—') return '—';
  return perf.replace(/^har\s+/, '');
}

// Enrich every verb
const enriched = verbs.map(v => {
  const group = classifyGroup(v);
  const imperativ = deriveImperativ(v, group);
  const supinum = deriveSupinum(v);
  // Return extended array: original 8 + imperativ[8] + supinum[9] + group[10]
  return [...v.slice(0, 8), imperativ, supinum, group];
});

// Verify
const groupCounts = {};
enriched.forEach(v => {
  const g = v[10];
  groupCounts[g] = (groupCounts[g] || 0) + 1;
});

console.log('Enriched', enriched.length, 'verbs');
console.log('Group distribution:', JSON.stringify(groupCounts, null, 2));

// Sample a few
['skriva', 'tala', 'köpa', 'ringa', 'bo', 'kunna', 'gå', 'lära sig'].forEach(name => {
  const v = enriched.find(x => x[0] === name);
  if (v) console.log(`  ${v[0]}: imperativ="${v[8]}", supinum="${v[9]}", group="${v[10]}"`);
});

// Write enriched data
const jsContent = `// OrdKompis - Curated Swedish Verbs Dataset (${enriched.length} verbs)
// Format: [infinitive, english, infinitive, presens, preteritum, perfekt, exSv, exEn, imperativ, supinum, verbGroup]
// Verb groups: Grupp 1 (-ar), Grupp 2a (-er/-de), Grupp 2b (-er/-te), Grupp 3 (-r), Grupp 4 (stark/strong), Modal, Deponent, Oregelbunden
window.ORDKOMPIS_VERBS = ${JSON.stringify(enriched, null, 2)};
`;

fs.writeFileSync('data/verbs.js', jsContent, 'utf8');
console.log('Saved enriched data/verbs.js');
