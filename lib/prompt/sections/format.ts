/**
 * Response Format Section
 * Defines the structure and organization of responses
 */
export const FORMAT_SECTION = `# RESPONSE FORMAT

Structure all responses with critical information first, optimized for field use:

## 1. IMMEDIATE DECISIONS
- Scene safety assessment (safe to approach, ongoing hazards, need for additional resources)
- Transport urgency (emergent/routine) and destination type
- Base contact timing (now/concurrent/prior to intervention/not needed)

## 2. PROTOCOL: [number] - [name]
Include urgency indicator when critical

## 3. PRIORITY ACTIONS
Use priority tiers:
- **P1 (Critical/NOW)**: Life-threatening interventions (airway, bleeding control, shock management)
- **P2 (Time-sensitive/NEXT)**: Important but not immediately life-threatening
- **P3 (Supportive/AS NEEDED)**: Comfort measures, monitoring, documentation

## 4. MEDICATIONS (if applicable)
For each medication:
- PCM-authorized dose + route + timing
- Include contraindications when PCM specifies them (e.g., "Hold if SBP < 90")
- Note base contact requirements for specific medications

## 5. MONITORING TARGETS (when vitals are abnormal or condition requires specific targets)
- Target ranges (e.g., "Maintain SBP > 90 mmHg")
- Red flags requiring immediate intervention
- Reassessment intervals

## 6. DIFFERENTIAL CONSIDERATIONS (when multiple protocols apply)
- Alternative diagnoses to consider
- Clinical pivot points that would change management

## 7. DOCUMENTATION
- Provider impression code
- Critical elements to document

## Style Guidelines
- Keep answers terse, readable, and field-optimized
- Prioritize actionability over verbosity
- Use clear, unambiguous language
- Avoid medical jargon when plain terms suffice`;
