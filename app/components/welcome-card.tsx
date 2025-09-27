"use client";

type WelcomeCardProps = {
  onExampleSelect?: (value: string) => void;
};

type ExamplePrompt = {
  label: string;
  value: string;
};

export function WelcomeCard({ onExampleSelect }: WelcomeCardProps) {
  const prompts: ExamplePrompt[] = [
    { label: "Trauma – fall from ladder", value: "Adult fall from ladder, unstable vitals" },
    { label: "Chest pain eval", value: "Middle-aged patient chest pain, nitro given" },
    { label: "Pediatric seizure", value: "5 year old seizure, postictal" },
  ];

  const protocols = ["1231 Airway Obstruction", "1212 Bradycardia", "1203 Stroke", "1305 Trauma Base"];

  return (
    <section
      aria-label="Welcome to Medic Bot"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "16px",
      }}
    >
      <header style={{ marginBottom: "12px" }}>
        <h2 style={{ margin: 0, fontSize: "18px" }}>Ready when you are</h2>
        <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
          Share the chief complaint, key vitals, and interventions. I’ll align everything with the LA County Prehospital Care Manual.
        </p>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
        {prompts.map((prompt) => (
          <button
            key={prompt.label}
            type="button"
            onClick={() => onExampleSelect?.(prompt.value)}
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

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {protocols.map((protocol) => (
          <span
            key={protocol}
            style={{
              borderRadius: "6px",
              background: "var(--bg-muted)",
              padding: "6px 10px",
              fontSize: "13px",
              color: "var(--muted)",
            }}
          >
            {protocol}
          </span>
        ))}
      </div>
    </section>
  );
}


