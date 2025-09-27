export function WelcomeCardProtocols({ items }: { items: string[] }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
      {items.map((item) => (
        <span
          key={item}
          style={{
            borderRadius: "6px",
            background: "var(--bg-muted)",
            padding: "6px 10px",
            fontSize: "13px",
            color: "var(--muted)",
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

