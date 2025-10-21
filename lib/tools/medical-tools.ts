/**
 * Medical Protocol Tools for Claude Tool Use
 * Production-grade tool definitions for medical guidance
 */

import type { LLMTool } from "@/lib/providers";

/**
 * Tool for looking up specific protocol information
 */
export const LOOKUP_PROTOCOL_TOOL: LLMTool = {
  name: "lookup_protocol",
  description: "Look up detailed information about a specific LA County EMS protocol by number or name. Returns protocol indications, contraindications, procedures, and medication guidelines.",
  input_schema: {
    type: "object",
    properties: {
      protocol_identifier: {
        type: "string",
        description: "Protocol number (e.g., '804', 'MCG 1309') or protocol name (e.g., 'Acute Coronary Syndrome', 'Pediatric Equipment')",
      },
    },
    required: ["protocol_identifier"],
  },
};

/**
 * Tool for calculating medication doses
 */
export const CALCULATE_DOSE_TOOL: LLMTool = {
  name: "calculate_dose",
  description: "Calculate PCM-authorized medication dosing based on patient weight and route. Returns accurate dose with citations from LA County protocols.",
  input_schema: {
    type: "object",
    properties: {
      medication_name: {
        type: "string",
        description: "Name of medication (e.g., 'epinephrine', 'fentanyl', 'aspirin')",
      },
      patient_weight_kg: {
        type: "number",
        description: "Patient weight in kilograms. Use 70kg if weight unknown for adults.",
      },
      route: {
        type: "string",
        enum: ["IV", "IM", "IO", "SL", "PO", "IN", "ET", "Nebulized"],
        description: "Route of administration",
      },
      indication: {
        type: "string",
        description: "Clinical indication (e.g., 'anaphylaxis', 'pain management', 'cardiac arrest')",
      },
    },
    required: ["medication_name", "route"],
  },
};

/**
 * Tool for checking contraindications
 */
export const CHECK_CONTRAINDICATIONS_TOOL: LLMTool = {
  name: "check_contraindications",
  description: "Check PCM contraindications for a medication or procedure based on patient factors. Critical for safety verification.",
  input_schema: {
    type: "object",
    properties: {
      medication_or_procedure: {
        type: "string",
        description: "Medication name or procedure (e.g., 'nitroglycerin', 'RSI', 'CPAP')",
      },
      patient_factors: {
        type: "object",
        description: "Relevant patient factors",
        properties: {
          sbp: { type: "number", description: "Systolic blood pressure" },
          heart_rate: { type: "number", description: "Heart rate" },
          allergies: { type: "array", items: { type: "string" }, description: "Known allergies" },
          age_years: { type: "number", description: "Patient age in years" },
          pregnancy: { type: "boolean", description: "Is patient pregnant" },
          other: { type: "string", description: "Other relevant factors" },
        },
      },
    },
    required: ["medication_or_procedure"],
  },
};

/**
 * Tool for searching provider impressions
 */
export const SEARCH_PROVIDER_IMPRESSIONS_TOOL: LLMTool = {
  name: "search_provider_impressions",
  description: "Search for appropriate provider impression codes based on chief complaint or clinical presentation. Returns impression codes with associated protocol mappings.",
  input_schema: {
    type: "object",
    properties: {
      chief_complaint: {
        type: "string",
        description: "Primary chief complaint or clinical presentation (e.g., 'chest pain', 'shortness of breath', 'altered mental status')",
      },
      additional_context: {
        type: "string",
        description: "Additional clinical context that might narrow the impression",
      },
    },
    required: ["chief_complaint"],
  },
};

/**
 * Tool for pediatric dosing calculations
 */
export const PEDIATRIC_DOSE_TOOL: LLMTool = {
  name: "calculate_pediatric_dose",
  description: "Calculate pediatric medication doses using LA County MCG 1309 color-coded (Broselow) dosing guidelines. NEVER calculate manually - always use this tool for pediatric patients.",
  input_schema: {
    type: "object",
    properties: {
      medication_name: {
        type: "string",
        description: "Medication name (e.g., 'epinephrine', 'atropine', 'calcium chloride')",
      },
      broselow_color: {
        type: "string",
        enum: ["grey", "pink", "red", "purple", "yellow", "white", "blue", "orange", "green"],
        description: "Broselow color code from pediatric tape/sheet",
      },
      weight_kg: {
        type: "number",
        description: "Estimated pediatric weight in kg (if known, otherwise use Broselow tape estimate)",
      },
      route: {
        type: "string",
        enum: ["IV", "IM", "IO", "IN", "ET"],
        description: "Route of administration",
      },
    },
    required: ["medication_name"],
  },
};

/**
 * All available medical tools
 */
export const MEDICAL_TOOLS: LLMTool[] = [
  LOOKUP_PROTOCOL_TOOL,
  CALCULATE_DOSE_TOOL,
  CHECK_CONTRAINDICATIONS_TOOL,
  SEARCH_PROVIDER_IMPRESSIONS_TOOL,
  PEDIATRIC_DOSE_TOOL,
];

/**
 * Tool execution handlers (to be implemented with actual protocol database)
 */
export type ToolExecutionContext = {
  knowledgeBase: unknown; // Will be typed when implementing
  patientContext?: {
    age?: number;
    weight?: number;
    vitals?: Record<string, number>;
  };
};

// Placeholder for tool execution - implement with actual protocol database
export async function executeToolCall(
  toolName: string,
  input: Record<string, unknown>,
  _context: ToolExecutionContext,
): Promise<{ result: string; citations: string[] }> {
  // This is a placeholder - actual implementation would:
  // 1. Query the knowledge base
  // 2. Calculate doses using the medication manager
  // 3. Check contraindications against protocols
  // 4. Return structured results with citations

  return {
    result: `Tool execution for ${toolName} not yet implemented. Input: ${JSON.stringify(input)}`,
    citations: [],
  };
}
