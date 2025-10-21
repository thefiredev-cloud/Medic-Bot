import { IDENTITY_SECTION } from "./sections/identity";
import { GUARDRAILS_SECTION } from "./sections/guardrails";
import { FORMAT_SECTION } from "./sections/format";
import { SPECIAL_CASES_SECTION } from "./sections/special-cases";
import { TOOLS_SECTION } from "./sections/tools";
import { EXAMPLES_SECTION } from "./sections/examples";

/**
 * Production-grade modular prompt builder
 * Composes prompts from independently testable sections
 */
export class PromptBuilder {
  private includeSections: {
    identity: boolean;
    guardrails: boolean;
    format: boolean;
    specialCases: boolean;
    tools: boolean;
    examples: boolean;
  };

  constructor(options?: {
    includeIdentity?: boolean;
    includeGuardrails?: boolean;
    includeFormat?: boolean;
    includeSpecialCases?: boolean;
    includeTools?: boolean;
    includeExamples?: boolean;
  }) {
    this.includeSections = {
      identity: options?.includeIdentity ?? true,
      guardrails: options?.includeGuardrails ?? true,
      format: options?.includeFormat ?? true,
      specialCases: options?.includeSpecialCases ?? true,
      tools: options?.includeTools ?? false, // Disabled by default, enable when tools are implemented
      examples: options?.includeExamples ?? true,
    };
  }

  /**
   * Build complete system prompt from modular sections
   * Sections are composed in a logical order for optimal LLM understanding
   */
  public build(): string {
    const sections: string[] = [];

    if (this.includeSections.identity) {
      sections.push(IDENTITY_SECTION);
    }

    if (this.includeSections.guardrails) {
      sections.push(GUARDRAILS_SECTION);
    }

    if (this.includeSections.format) {
      sections.push(FORMAT_SECTION);
    }

    if (this.includeSections.specialCases) {
      sections.push(SPECIAL_CASES_SECTION);
    }

    if (this.includeSections.tools) {
      sections.push(TOOLS_SECTION);
    }

    if (this.includeSections.examples) {
      sections.push(EXAMPLES_SECTION);
    }

    return sections.join("\n\n---\n\n");
  }

  /**
   * Build a minimal prompt for testing or constrained contexts
   */
  public buildMinimal(): string {
    return new PromptBuilder({
      includeIdentity: true,
      includeGuardrails: true,
      includeFormat: false,
      includeSpecialCases: false,
      includeTools: false,
      includeExamples: false,
    }).build();
  }

  /**
   * Get token count estimate for prompt
   * Rough approximation: 1 token ≈ 4 characters
   */
  public estimateTokens(): number {
    const text = this.build();
    return Math.ceil(text.length / 4);
  }
}


