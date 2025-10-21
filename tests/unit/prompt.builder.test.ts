import { describe, expect, it } from 'vitest';

import { PromptBuilder } from '../../lib/prompt/PromptBuilder';

describe('PromptBuilder', () => {
  it('builds a non-empty system prompt that includes key sections', () => {
    const prompt = new PromptBuilder().build();
    expect(prompt.length).toBeGreaterThan(100);
    expect(prompt).toContain('GUARDRAILS');
    expect(prompt).toContain('RESPONSE FORMAT');
    expect(prompt).toContain('SPECIAL HANDLING');
  });

  it('can build minimal prompt without all sections', () => {
    const minimal = new PromptBuilder().buildMinimal();
    expect(minimal.length).toBeGreaterThan(50);
    expect(minimal).toContain('Medic Bot');
    expect(minimal).toContain('GUARDRAILS');
  });

  it('can compose prompts with specific sections', () => {
    const withoutExamples = new PromptBuilder({ includeExamples: false }).build();
    expect(withoutExamples).not.toContain('RESPONSE EXAMPLES');
  });

  it('can estimate token count', () => {
    const builder = new PromptBuilder();
    const tokens = builder.estimateTokens();
    expect(tokens).toBeGreaterThan(100);
    expect(tokens).toBeLessThan(10000);
  });
});


