/**
 * Tool Use Instructions Section
 * Guidance for using available tools and structured reasoning
 */
export const TOOLS_SECTION = `# TOOL USE AND STRUCTURED REASONING

When tools are available, use them to provide more accurate and structured responses:

## Available Tools

### lookup_protocol
Use when you need to retrieve specific protocol information
- Input: protocol number or name
- Returns: Full protocol details including indications, contraindications, and procedures

### calculate_dose
Use for medication dosing calculations
- Input: medication name, patient weight, route
- Returns: Accurate PCM-based dosing with citations

### check_contraindications
Use before recommending any medication or procedure
- Input: medication/procedure name, patient factors
- Returns: List of contraindications from PCM

### search_provider_impressions
Use to find appropriate provider impression codes
- Input: chief complaint or clinical presentation
- Returns: Matching provider impression codes with protocol mappings

## Tool Use Best Practices
1. Always use tools when available rather than relying on general knowledge
2. Chain tool calls logically (e.g., lookup protocol → check contraindications → calculate dose)
3. Include tool-provided citations in your final response
4. If a tool returns no results, acknowledge the limitation and provide fallback guidance`;
