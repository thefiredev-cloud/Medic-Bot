import providerImpressions from "@/data/provider_impressions.json";

export type Vitals = {
  systolic?: number;
  diastolic?: number;
  heartRate?: number;
  respiratoryRate?: number;
  spo2?: number;
  temperatureF?: number;
  temperatureC?: number;
  glucose?: number;
  gcs?: number;
};

export type TriageResult = {
  age?: number;
  sex?: "male" | "female" | "unknown";
  pregnant?: boolean;
  weightKg?: number;
  chiefComplaint?: string;
  painLocation?: string; // e.g., "LUQ", "RUQ", etc.
  vitals: Vitals;
  allergies?: string[];
  medications?: string[];
  matchedProtocols: Array<{
    pi_name: string;
    pi_code: string;
    tp_name: string;
    tp_code: string;
    tp_code_pediatric?: string;
    score: number;
  }>;
};

function parseAge(text: string): number | undefined {
  const ageMatch = text.match(/\b(\d{1,3})\s*(?:yo|y\/o|years? old|y\s?o)\b/i);
  if (ageMatch) {
    const age = parseInt(ageMatch[1], 10);
    if (!isNaN(age) && age > 0 && age < 120) return age;
  }
  return undefined;
}

function parseSex(text: string): "male" | "female" | "unknown" {
  const lower = text.toLowerCase();
  // Handle common misspellings/short forms for female (e.g., "femal", "fml", "fem")
  if (/\b(female|femal|femae|femail|woman|lady|girl|f|fml|fem)\b/.test(lower)) return "female";
  if (/\b(male|man|guy|boy|m)\b/.test(lower)) return "male";
  return "unknown";
}

function parsePregnancy(text: string): boolean {
  return /\b(preg|pregnant|gravida|g\d+p\d+)\b/i.test(text);
}

function parseWeightKg(text: string): number | undefined {
  const lower = text.toLowerCase();
  // Match kilograms first
  const kgMatch = lower.match(/\b(\d{1,3}(?:\.\d+)?)\s*(?:kg|kilograms?)\b/);
  if (kgMatch) {
    const kg = parseFloat(kgMatch[1]);
    return (!isNaN(kg) && kg > 1 && kg < 200) ? kg : undefined;
  }
  // Match pounds and convert
  const lbMatch = lower.match(/\b(\d{1,3}(?:\.\d+)?)\s*(?:lb|lbs|pounds?)\b/);
  if (lbMatch) {
    const lbs = parseFloat(lbMatch[1]);
    if (isNaN(lbs) || lbs <= 2 || lbs >= 440) return undefined;
    const kg = lbs * 0.45359237;
    const rounded = Math.round(kg * 10) / 10;
    return (rounded > 1 && rounded < 200) ? rounded : undefined;
  }
  return undefined;
}

function toNumber(s: string | undefined): number | undefined {
  if (!s) return undefined;
  const n = parseFloat(s);
  return isNaN(n) ? undefined : n;
}

function parseVitals(text: string): Vitals {
  const vitals: Vitals = {};

  const bp = text.match(/\b(?:bp|blood pressure)\s*(\d{2,3})\s*\/\s*(\d{2,3})\b/i);
  if (bp) {
    vitals.systolic = toNumber(bp[1]);
    vitals.diastolic = toNumber(bp[2]);
  }

  const hr = text.match(/\b(?:hr|heart ?rate|pulse)\s*(\d{2,3})\b/i);
  if (hr) vitals.heartRate = toNumber(hr[1]);

  const rr = text.match(/\b(?:rr|resp(?:iratory)? ?rate|resp)\s*(\d{1,2})\b/i);
  if (rr) vitals.respiratoryRate = toNumber(rr[1]);

  const spo2 = text.match(/\b(?:spo2|o2 sat|oxygen(?: saturation)?)\s*(\d{2,3})\s*%?\b/i);
  if (spo2) vitals.spo2 = toNumber(spo2[1]);

  const tempF = text.match(/\b(?:t|temp(?:erature)?)\s*(\d{2,3}(?:\.\d)?)\s*(?:f|\u00B0f)\b/i);
  const tempC = text.match(/\b(?:t|temp(?:erature)?)\s*(\d{2,3}(?:\.\d)?)\s*(?:c|\u00B0c)\b/i);
  if (tempF) vitals.temperatureF = toNumber(tempF[1]);
  if (tempC) vitals.temperatureC = toNumber(tempC[1]);

  const glucose = text.match(/\b(?:bs|dex(?:tro)?|glucose|bgl)\s*(\d{2,3})\b/i);
  if (glucose) vitals.glucose = toNumber(glucose[1]);

  const gcs = text.match(/\bgcs\s*(\d{1,2})\b/i);
  if (gcs) vitals.gcs = toNumber(gcs[1]);

  return vitals;
}

function parseAllergies(text: string): string[] | undefined {
  const lower = text.toLowerCase();
  const m = lower.match(/(?:allerg(?:y|ies)\s*[:\-]\s*)([^\n;\.]+)/i);
  if (!m) {
    if (/\b(nkda|no known drug allergies)\b/i.test(lower)) return ["NKDA"];
    return undefined;
  }
  return m[1]
    .split(/[,;\/]|\band\b/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function parseMedications(text: string): string[] | undefined {
  const lower = text.toLowerCase();
  const m = lower.match(/\b(?:meds?|medications?)\s*[:\-]\s*([^\n;\.]+)/i);
  if (!m) return undefined;
  return m[1]
    .split(/[,;\/]|\band\b/)
    .map(s => s.trim())
    .filter(Boolean)
    .slice(0, 12);
}

function normalizeQuadrant(text: string): string | undefined {
  const lower = text.toLowerCase();
  if (/\b(luq|left upper quadrant|upper left quadrant)\b/.test(lower)) return "LUQ";
  if (/\b(ruq|right upper quadrant|upper right quadrant)\b/.test(lower)) return "RUQ";
  if (/\b(llq|left lower quadrant|lower left quadrant)\b/.test(lower)) return "LLQ";
  if (/\b(rlq|right lower quadrant|lower right quadrant)\b/.test(lower)) return "RLQ";
  return undefined;
}

function parseChiefComplaint(text: string): { cc?: string; painLocation?: string } {
  const lower = text.toLowerCase();
  const painLoc = normalizeQuadrant(lower);
  if (/\babdominal|abd\b|stomach|belly\b/.test(lower) || painLoc) {
    return { cc: "abdominal pain", painLocation: painLoc };
  }
  if (/\b(chest pain|cp)\b/.test(lower)) return { cc: "chest pain" };
  if (/\b(asthma|bronchospasm|copd)\b/.test(lower)) {
    return { cc: "asthma" };
  }
  if (/\b(short(ness)? of breath|sob|dyspnea|wheez(?:e|ing))\b/.test(lower)) {
    return { cc: "shortness of breath" };
  }
  if (/\bstroke|cva|tia|facial droop\b/.test(lower)) return { cc: "stroke" };
  if (/\bseizure|postictal\b/.test(lower)) return { cc: "seizure" };
  if (/\bsyncope|faint(?:ed|ing)|passed out\b/.test(lower)) return { cc: "syncope" };
  if (/\boverdose|ingestion|poison\b/.test(lower)) return { cc: "overdose" };
  if (/\btrauma|injur(y|ies)|fall|mvc|accident\b/.test(lower)) return { cc: "traumatic injury" };
  return {};
}

type ProviderImpression = {
  pi_name: string;
  pi_code: string;
  tp_name: string;
  tp_code: string;
  tp_code_pediatric?: string;
  guidelines?: string;
  keywords?: string[];
};

function scorePI(lowerText: string, pi: ProviderImpression): number {
  let score = 0;
  const allKeywords = new Set<string>([
    ...(pi.keywords || []),
    ...pi.pi_name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean),
    ...pi.tp_name.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
  ]);

  for (const kw of allKeywords) {
    if (!kw || kw.length < 3) continue;
    if (lowerText.includes(kw)) score += 1;
  }

  // Quadrant heuristics map to abdominal pain
  if ((/\blu[q]|ru[q]|ll[q]|rl[q]\b/.test(lowerText) || /quadrant/.test(lowerText)) && /abdominal|gi|gu/.test(pi.tp_name.toLowerCase())) {
    score += 2;
  }

  return score;
}

export function triageInput(text: string): TriageResult {
  const age = parseAge(text);
  const sex = parseSex(text);
  const pregnant = parsePregnancy(text);
  const weightKg = parseWeightKg(text);
  const vitals = parseVitals(text);
  const { cc, painLocation } = parseChiefComplaint(text);
  const allergies = parseAllergies(text);
  const medications = parseMedications(text);

  const lower = text.toLowerCase();
  const scored = (providerImpressions as ProviderImpression[])
    .map(pi => ({ ...pi, score: scorePI(lower, pi) }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(p => ({
      pi_name: p.pi_name,
      pi_code: p.pi_code,
      tp_name: p.tp_name,
      tp_code: p.tp_code,
      tp_code_pediatric: p.tp_code_pediatric,
      score: p.score
    }));

  return {
    age,
    sex,
    pregnant,
    weightKg,
    chiefComplaint: cc,
    painLocation,
    vitals,
    allergies,
    medications,
    matchedProtocols: scored
  };
}

function formatDemographics(result: TriageResult): string[] {
  const demo: string[] = [];
  if (result.age) demo.push(`${result.age}y`);
  if (result.sex && result.sex !== "unknown") demo.push(result.sex);
  if (result.pregnant) demo.push("pregnant");
  if (typeof result.weightKg === "number") demo.push(`${result.weightKg}kg`);
  if (result.chiefComplaint) demo.push(result.chiefComplaint + (result.painLocation ? ` (${result.painLocation})` : ""));
  return demo;
}

function formatVitals(result: TriageResult): string | undefined {
  const v = result.vitals || {};
  const parts: string[] = [];
  const hasBloodPressure = v.systolic !== undefined && v.diastolic !== undefined;
  pushIf(parts, hasBloodPressure, `BP ${v.systolic}/${v.diastolic}`);
  pushIf(parts, !!v.heartRate, `HR ${v.heartRate}`);
  pushIf(parts, !!v.respiratoryRate, `RR ${v.respiratoryRate}`);
  pushIf(parts, !!v.spo2, `SpO2 ${v.spo2}%`);
  pushIf(parts, !!v.temperatureF, `Temp ${v.temperatureF}F`);
  pushIf(parts, !!v.temperatureC, `Temp ${v.temperatureC}C`);
  pushIf(parts, !!v.glucose, `Glucose ${v.glucose}`);
  pushIf(parts, !!v.gcs, `GCS ${v.gcs}`);
  return parts.length ? parts.join(", ") : undefined;
}

function pushIf(list: string[], condition: boolean, value: string) {
  if (condition) list.push(value);
}

function formatProtocolCandidates(result: TriageResult): string[] {
  const seen = new Set<string>();
  const unique = result.matchedProtocols.filter(mp => {
    const key = mp.tp_code;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 3);
  return unique.map(mp => (
    `- ${mp.pi_name} (${mp.pi_code}) → ${mp.tp_name} ${mp.tp_code}${mp.tp_code_pediatric ? "/" + mp.tp_code_pediatric : ""}`
  ));
}

export function buildTriageContext(result: TriageResult): string {
  const lines: string[] = [];
  lines.push("**Structured Intake**");

  const demo = formatDemographics(result);
  if (demo.length) lines.push(`- ${demo.join(", ")}`);

  const vitals = formatVitals(result);
  if (vitals) lines.push(`- Vitals: ${vitals}`);

  if (result.allergies && result.allergies.length) lines.push(`- Allergies: ${result.allergies.join(", ")}`);
  if (result.medications && result.medications.length) lines.push(`- Meds: ${result.medications.join(", ")}`);

  if (result.matchedProtocols.length) {
    lines.push("\n**Protocol Candidates (LA County)**");
    lines.push(...formatProtocolCandidates(result));
  }

  return lines.join("\n");
}

export function buildSearchAugmentation(result: TriageResult): string {
  const parts: string[] = [];
  if (result.chiefComplaint) parts.push(result.chiefComplaint);
  if (result.painLocation) parts.push(result.painLocation);
  result.matchedProtocols.slice(0, 3).forEach(mp => {
    parts.push(mp.tp_name);
    parts.push(mp.tp_code);
    if (mp.tp_code_pediatric) parts.push(mp.tp_code_pediatric);
  });
  return parts.join(" ");
}


