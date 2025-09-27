type ExamplePrompt = {
  label: string;
  value: string;
};

type WelcomeCardExamplesProps = {
  prompts: ExamplePrompt[];
  onSelect?: (value: string) => void;
};

export function WelcomeCardExamples({ prompts, onSelect }: WelcomeCardExamplesProps) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
      {prompts.map((prompt) => (
        <button
          key={prompt.label}
          type="button"
          onClick={() => onSelect?.(prompt.value)}
          style={{
            borderRadius: "9999px",
            border: "1px solid var(--border)",
            background: "var(--bg)",
            color: "inherit",
            padding: "6px 12px",
            cursor: "pointer",
          }}
          aria-label={`Use example: ${prompt.label}`}
        >
          {prompt.label}
        </button>
      ))}
    </div>
  );
}

