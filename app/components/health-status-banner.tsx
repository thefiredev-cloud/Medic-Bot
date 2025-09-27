"use client";

import { useEffect, useMemo, useState } from "react";

type HealthStatusBannerProps = {
  hidden: boolean;
};

export function HealthStatusBanner({ hidden }: HealthStatusBannerProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  const fallbackMessage = useMemo(() => "Limited mode - using offline guidance only.", []);

  useEffect(() => {
    let cancelled = false;
    async function fetchHealth() {
      try {
        const response = await fetch("/api/health");
        const data = (await response.json()) as { status: string; error?: { message?: string } };
        if (cancelled) return;
        if (response.ok) {
          setMessage(null);
        } else {
          setMessage(data.error?.message ?? fallbackMessage);
        }
      } catch (error: unknown) {
        if (!cancelled) setMessage("Unable to reach Medic Bot health endpoint.");
      }
    }
    void fetchHealth();
    return () => {
      cancelled = true;
    };
  }, [fallbackMessage]);

  useEffect(() => {
    if (message) {
      setDismissed(false);
    }
  }, [message]);

  if (hidden || dismissed || !message) return null;

  return (
    <div className="errorBanner" role="status" aria-live="polite">
      <span aria-hidden="true" style={{ marginRight: "8px", fontWeight: 600 }}>
        !
      </span>
      <span>{message}</span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        style={{ marginLeft: "auto", background: "none", border: "none", color: "inherit", cursor: "pointer" }}
        aria-label="Dismiss status message"
      >
        x
      </button>
    </div>
  );
}

