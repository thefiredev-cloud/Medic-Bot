'use strict';

// Generate exact pediatric color code dosing entries per MCG 1309
// Writes to data/ems_epinephrine_dosing.json (already loaded by retrieval.ts)

const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, '..', 'data', 'ems_epinephrine_dosing.json');

const colorByWeight = (kg) => {
  if (kg >= 3 && kg <= 5) return 'Grey';
  if (kg >= 6 && kg <= 7) return 'Pink';
  if (kg >= 8 && kg <= 9) return 'Red';
  if (kg >= 10 && kg <= 11) return 'Purple';
  if (kg >= 12 && kg <= 14) return 'Yellow';
  if (kg >= 15 && kg <= 18) return 'White';
  if (kg >= 19 && kg <= 22) return 'Blue';
  if (kg >= 24 && kg <= 28) return 'Orange';
  if (kg >= 30 && kg <= 36) return 'Green';
  return 'Unknown';
};

function round(val, digits = 2) {
  const p = Math.pow(10, digits);
  return Math.round(val * p) / p;
}

function entryForWeight(kg) {
  const color = colorByWeight(kg);
  // Epinephrine 1 mg/mL IM 0.01 mg/kg
  const epiMg = round(kg * 0.01, 2);
  const epiMl = round(epiMg, 2); // 1 mg/mL
  // Naloxone 1 mg/mL 0.1 mg/kg
  const naloMg = round(kg * 0.1, 2);
  const naloMl = round(naloMg, 2); // 1 mg/mL
  // Morphine 4 mg/mL 0.1 mg/kg
  const morphineMg = round(kg * 0.1, 2);
  const morphineMl = round(morphineMg / 4, 2);
  // Adenosine 3 mg/mL 0.1 mg/kg
  const adenosineMg = round(kg * 0.1, 2);
  const adenosineMl = round(adenosineMg / 3, 2);
  // Cardioversion/Defibrillation (initial, second)
  const cardioJ = kg; // initial
  const cardioJ2 = kg * 2; // second
  const defibJ = kg * 2; // initial
  const defibJ2 = kg * 4; // second

  const idSuffix = `${String(kg).padStart(2, '0')}kg-${color.toLowerCase()}`.replace(/\s+/g, '');

  const docs = [
    {
      id: `peds-dose-epi:${idSuffix}`,
      title: `Epinephrine Pediatric Color Code Dosing - EXACT VALUES — ${color} ${kg}kg`,
      category: 'Pediatric Dosing',
      subcategory: 'MCG 1309',
      keywords: ['1309', 'color code', 'pediatric', color, `${kg}kg`, 'epinephrine', '1mg/mL', 'IM'],
      content: `${color} ${kg}kg — Epinephrine 1mg/mL IM: ${epiMg} mg (${epiMl} mL)`
    },
    {
      id: `peds-dose-naloxone:${idSuffix}`,
      title: `Naloxone Pediatric Color Code Dosing - EXACT VALUES — ${color} ${kg}kg`,
      category: 'Pediatric Dosing',
      subcategory: 'MCG 1309',
      keywords: ['1309', 'color code', 'pediatric', color, `${kg}kg`, 'naloxone', '1mg/mL'],
      content: `${color} ${kg}kg — Naloxone 1mg/mL IV/IM/IN: ${naloMg} mg (${naloMl} mL)`
    },
    {
      id: `peds-dose-morphine:${idSuffix}`,
      title: `Morphine Pediatric Color Code Dosing - EXACT VALUES — ${color} ${kg}kg`,
      category: 'Pediatric Dosing',
      subcategory: 'MCG 1309',
      keywords: ['1309', 'color code', 'pediatric', color, `${kg}kg`, 'morphine', '4mg/mL'],
      content: `${color} ${kg}kg — Morphine 4mg/mL IV/IM/IO: ${morphineMg} mg (${morphineMl} mL)`
    },
    {
      id: `peds-dose-adenosine:${idSuffix}`,
      title: `Adenosine Pediatric Color Code Dosing - EXACT VALUES — ${color} ${kg}kg`,
      category: 'Pediatric Dosing',
      subcategory: 'MCG 1309',
      keywords: ['1309', 'color code', 'pediatric', color, `${kg}kg`, 'adenosine', '3mg/mL'],
      content: `${color} ${kg}kg — Adenosine 3mg/mL rapid IV push: ${adenosineMg} mg (${adenosineMl} mL)`
    },
    {
      id: `peds-dose-energy:${idSuffix}`,
      title: `Pediatric Cardioversion/Defibrillation — EXACT VALUES — ${color} ${kg}kg`,
      category: 'Pediatric Dosing',
      subcategory: 'MCG 1309',
      keywords: ['1309', 'color code', 'pediatric', color, `${kg}kg`, 'cardioversion', 'defibrillation', 'joules'],
      content: `${color} ${kg}kg — Cardioversion: ${cardioJ} J (initial), ${cardioJ2} J (second). Defibrillation: ${defibJ} J (initial), ${defibJ2} J (second)`
    }
  ];

  // Additional meds based on MCG 1309 formulations
  // Atropine 0.1 mg/mL, 0.02 mg/kg (max pediatric single 0.5 mg)
  const atropineMg = Math.min(round(kg * 0.02, 2), 0.5);
  const atropineMl = round(atropineMg / 0.1, 2);
  docs.push({
    id: `peds-dose-atropine:${idSuffix}`,
    title: `Atropine Pediatric Color Code Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'atropine','0.1mg/mL'],
    content: `${color} ${kg}kg — Atropine 0.1mg/mL IV/IO: ${atropineMg} mg (${atropineMl} mL)`
  });

  // Calcium Chloride 100 mg/mL, 20 mg/kg (max 1 g); dilute 1:1 if <1 year (~ <= 9kg)
  const caMg = Math.min(round(kg * 20, 0), 1000);
  const caMl = round(caMg / 100, 2);
  const caNote = kg <= 9 ? ' (dilute 1:1 with NS if <1 year)' : '';
  docs.push({
    id: `peds-dose-calcium:${idSuffix}`,
    title: `Calcium Chloride Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'calcium chloride','100mg/mL'],
    content: `${color} ${kg}kg — Calcium Chloride 100mg/mL IV/IO: ${caMg} mg (${caMl} mL)${caNote}`
  });

  // Dextrose 10% (0.1 g/mL) 5 mL/kg
  const d10Ml = round(kg * 5, 0);
  docs.push({
    id: `peds-dose-d10:${idSuffix}`,
    title: `Dextrose 10% Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'dextrose','D10W'],
    content: `${color} ${kg}kg — Dextrose 10% slow IV: ${d10Ml} mL (5 mL/kg)`
  });

  // Diphenhydramine 50 mg/mL, 1 mg/kg
  const benadrylMg = round(kg * 1, 0);
  const benadrylMl = round(benadrylMg / 50, 2);
  docs.push({
    id: `peds-dose-diphenhydramine:${idSuffix}`,
    title: `Diphenhydramine Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'diphenhydramine','50mg/mL'],
    content: `${color} ${kg}kg — Diphenhydramine IV/IM: ${benadrylMg} mg (${benadrylMl} mL)`
  });

  // Epinephrine Push Dose 0.01 mg/mL: 0.1 mL/kg (max 1 mL at a time)
  const epiPushMl = round(kg * 0.1, 2);
  const epiPushMg = round(epiPushMl * 0.01, 3);
  docs.push({
    id: `peds-dose-epi-push:${idSuffix}`,
    title: `Epinephrine Push-Dose (0.01mg/mL) — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'epinephrine','push dose','0.01mg/mL'],
    content: `${color} ${kg}kg — Epinephrine 0.01mg/mL: ${epiPushMg} mg (${epiPushMl} mL) every 1–5 min prn (max 1 mL per push)`
  });

  // Epinephrine 0.1 mg/mL IV 0.01 mg/kg
  const epiIvMg = round(kg * 0.01, 2);
  const epiIvMl = round(epiIvMg / 0.1, 2);
  docs.push({
    id: `peds-dose-epi-iv:${idSuffix}`,
    title: `Epinephrine (0.1mg/mL) IV — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'epinephrine','0.1mg/mL','IV'],
    content: `${color} ${kg}kg — Epinephrine 0.1mg/mL IV: ${epiIvMg} mg (${epiIvMl} mL)`
  });

  // Fentanyl 50 mcg/mL: IV/IM 1 mcg/kg; IN 1.5 mcg/kg
  const fentIvMcg = round(kg * 1, 0);
  const fentIvMl = round(fentIvMcg / 50, 2);
  const fentInMcg = round(kg * 1.5, 1);
  const fentInMl = round(fentInMcg / 50, 2);
  docs.push({
    id: `peds-dose-fentanyl-ivim:${idSuffix}`,
    title: `Fentanyl IV/IM Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'fentanyl','50mcg/mL','IV','IM'],
    content: `${color} ${kg}kg — Fentanyl IV/IM: ${fentIvMcg} mcg (${fentIvMl} mL)`
  });
  docs.push({
    id: `peds-dose-fentanyl-in:${idSuffix}`,
    title: `Fentanyl IN Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'fentanyl','50mcg/mL','IN'],
    content: `${color} ${kg}kg — Fentanyl IN: ${fentInMcg} mcg (${fentInMl} mL)`
  });

  // Glucagon: <1 year 0.5 mg, >=1 year 1 mg (approx threshold: <=9 kg <1 year)
  const glucagonMg = kg <= 9 ? 0.5 : 1;
  const glucagonMl = glucagonMg; // 1 mg/mL
  docs.push({
    id: `peds-dose-glucagon:${idSuffix}`,
    title: `Glucagon Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'glucagon','1mg/mL'],
    content: `${color} ${kg}kg — Glucagon IM: ${glucagonMg} mg (${glucagonMl} mL) (${kg <= 9 ? '<1 year' : '≥1 year'})`
  });

  // Hydroxocobalamin 70 mg/kg; 25 mg/mL (reconstitute 5 g in 200 mL NS)
  const hydroMg = round(kg * 70, 0);
  const hydroMl = round(hydroMg / 25, 1);
  docs.push({
    id: `peds-dose-hydroxocobalamin:${idSuffix}`,
    title: `Hydroxocobalamin Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'hydroxocobalamin','25mg/mL'],
    content: `${color} ${kg}kg — Hydroxocobalamin IV/IO: ${hydroMg} mg (${hydroMl} mL). Reconstitute 5 g vial in 200 mL NS (25 mg/mL).`
  });

  // Lidocaine 2% (20 mg/mL) IO 0.5 mg/kg
  const lidoMg = round(kg * 0.5, 2);
  const lidoMl = round(lidoMg / 20, 2);
  docs.push({
    id: `peds-dose-lidocaine-io:${idSuffix}`,
    title: `Lidocaine 2% (IO) Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'lidocaine','2%','IO'],
    content: `${color} ${kg}kg — Lidocaine 2% IO: ${lidoMg} mg (${lidoMl} mL)`
  });

  // Midazolam IV/IO 0.1 mg/kg (5 mg/mL)
  const midIvMg = round(kg * 0.1, 2);
  const midIvMl = round(midIvMg / 5, 2);
  docs.push({
    id: `peds-dose-midazolam-ivio:${idSuffix}`,
    title: `Midazolam IV/IO Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'midazolam','5mg/mL','IV','IO'],
    content: `${color} ${kg}kg — Midazolam IV/IO: ${midIvMg} mg (${midIvMl} mL)`
  });
  // Midazolam Agitation/Sedation IN/IM 0.2 mg/kg
  const midInMg = round(kg * 0.2, 2);
  const midInMl = round(midInMg / 5, 2);
  docs.push({
    id: `peds-dose-midazolam-inim:${idSuffix}`,
    title: `Midazolam IN/IM Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'midazolam','5mg/mL','IN','IM'],
    content: `${color} ${kg}kg — Midazolam IN/IM: ${midInMg} mg (${midInMl} mL)`
  });

  // Normal Saline bolus 20 mL/kg
  const nsMl = round(kg * 20, 0);
  docs.push({
    id: `peds-dose-ns-bolus:${idSuffix}`,
    title: `Normal Saline Bolus — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'normal saline','bolus'],
    content: `${color} ${kg}kg — Normal Saline: ${nsMl} mL (20 mL/kg)`
  });

  // Albuterol NEB and MDI (age-based thresholds)
  const albuterolNebMg = kg < 19 ? 2.5 : 5;
  docs.push({
    id: `peds-dose-albuterol-neb:${idSuffix}`,
    title: `Albuterol NEB — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'albuterol','neb'],
    content: `${color} ${kg}kg — Albuterol NEB: ${albuterolNebMg} mg` 
  });
  const mdiPuffs = kg < 19 ? 2 : 4;
  docs.push({
    id: `peds-dose-albuterol-mdi:${idSuffix}`,
    title: `Albuterol MDI — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'albuterol','mdi'],
    content: `${color} ${kg}kg — Albuterol MDI: ${mdiPuffs} puffs`
  });

  // Sodium Bicarbonate 1 mEq/mL: 1 mEq/kg (dilute 1:1 if <1 year)
  const bicarbMeq = round(kg * 1, 0);
  const bicarbMl = bicarbMeq; // 1 mEq/mL
  const bicarbNote = kg <= 9 ? ' (dilute 1:1 with NS if <1 year)' : '';
  docs.push({
    id: `peds-dose-bicarb:${idSuffix}`,
    title: `Sodium Bicarbonate Pediatric Dosing — ${color} ${kg}kg`,
    category: 'Pediatric Dosing',
    subcategory: 'MCG 1309',
    keywords: ['1309','color code','pediatric',color,`${kg}kg`,'sodium bicarbonate','1mEq/mL'],
    content: `${color} ${kg}kg — Sodium Bicarbonate IV: ${bicarbMeq} mEq (${bicarbMl} mL)${bicarbNote}`
  });

  return docs;
}

function main() {
  const docs = [];
  const weights = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,24,26,28,30,32,34,36];
  for (const kg of weights) {
    docs.push(...entryForWeight(kg));
  }
  fs.writeFileSync(outPath, JSON.stringify(docs, null, 2));
  console.log(`Wrote ${docs.length} dosing entries to ${outPath}`);
}

main();


