'use strict';

const fs = require('fs');
const path = require('path');

const kbPath = path.join(__dirname, '..', 'data', 'ems_kb.json');

function main() {
  const json = JSON.parse(fs.readFileSync(kbPath, 'utf8'));
  const idx = json.findIndex((x) => x && x.id === 'ems-policy-832-minors-treatment');
  if (idx === -1) {
    console.error('Policy 832 entry not found in ems_kb.json');
    process.exit(1);
  }

  const content = `**LA COUNTY EMS POLICY 832 — TREATMENT/TRANSPORT OF MINORS**\n\n**REFERENCE NO. 832**\n**SUBJECT: TREATMENT/TRANSPORT OF MINORS**\n\n**DEFINITIONS**\n- **Emergency Medical Condition**: Immediate need for medical attention. Abnormal vital signs (except isolated asymptomatic HTN), or meeting Base Contact/Receiving Hospital Notification criteria, indicate an emergency condition.\n- **Implied Consent**: In the absence of a parent/legal representative, emergency treatment and/or transport of a minor may be initiated without consent.\n- **Legal Representative**: Person granted custody or conservatorship by a court of law.\n- **Minor**: Person <18 years of age.\n\n**MINOR NOT REQUIRING PARENTAL CONSENT — A PERSON WHO IS:**\n1. Married or was previously married\n2. Currently or previously in a valid domestic partnership\n3. Not married and has an emergency medical condition and parent is not available\n4. On active duty with the Armed Forces\n5. Self‑sufficient (≥14 years), living separate and apart from parents, and managing own financial affairs\n6. Emancipated minor (court declaration or DMV ID card)\n7. Seeking care related to treatment or prevention of pregnancy\n8. In need of care for sexual assault or rape\n9. Seeking care related to an abortion\n10. ≥12 years and in need of care for communicable reportable disease, STI prevention, alcohol/substance abuse, or outpatient mental health\n\n**VOLUNTARY CONSENT**\n- Treatment/transport of a minor should be with verbal or written consent of the parent(s) or legal representative when available.\n\n**PROCEDURES**\n\n**I. TREATMENT/TRANSPORT OF MINORS**\nA. In the absence of a parent/legal representative, minors with an emergency medical condition shall be treated and transported to the appropriate receiving facility or specialty care center (e.g., EDAP, PMC, PTC, SART Center, Trauma Center).\nB. Minors should be transported using a restraint device appropriate for size, weight, transport position, and medical condition. Devices should comply with FMVSS 213.\nC. Hospital or provider agency personnel shall make every effort to inform a parent/legal representative where the child has been transported.\nD. If prehospital personnel believe a parent/legal representative is making a decision that endangers the minor by refusing indicated immediate care or transport, involve law enforcement.\nE. **Infants ≤12 months** shall be transported, regardless of chief complaint and/or mechanism of injury, per Ref. No. 1200.2 (Base Contact Criteria).\n\n**II. MINORS NOT REQUIRING TRANSPORT**\nA. A minor child **(excluding children <12 months of age)** who is evaluated by EMS and determined not to be injured, to have only minor injuries, or to have illnesses/injuries not requiring immediate treatment or transportation, may be released to:\n   1) Self (consider age, maturity, environment, and other pertinent factors)\n   2) Parent or legal representative\n   3) A responsible adult at the scene\n   4) Designated caregiver\n   5) Law enforcement\nB. **Children 13–36 months of age** require Base Hospital contact and/or transport, **except** those with no medical complaint or with isolated minor extremity injury.\nC. Document on the EMS Report Form to whom the patient was released.\n\n**CROSS-REFERENCES**\n- Ref. No. 508, Sexual Assault Patient Destination\n- Ref. No. 508.1, SART Center Roster\n- Ref. No. 510, Pediatric Patient Destination\n- Ref. No. 822, Suspected Child Abuse Reporting Guidelines\n- Ref. No. 834, Patient Refusal of Treatment/Transport & Treat and Release at Scene\n- Ref. No. 1200.2, Treatment Protocol: Base Contact Requirements`;

  json[idx].content = content;
  if (!json[idx].keywords) json[idx].keywords = [];
  const extraKeywords = [
    'Reference No. 832', 'minors', 'implied consent', 'emergency medical condition',
    'FMVSS 213', '≤12 months transport', '13-36 months base contact',
  ];
  json[idx].keywords = Array.from(new Set([...(json[idx].keywords || []), ...extraKeywords]));

  fs.writeFileSync(kbPath, JSON.stringify(json, null, 2));
  console.log('Updated Policy 832 content in data/ems_kb.json');
}

main();


