"use client";

import { useEffect, useState } from "react";

export function HealthStatusBanner({ hidden }: { hidden: boolean }) {
  const [message, setMessage] = useState<string | null>(null);

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
          setMessage(data.error?.message ?? "Service degraded. Fallback guidance only.");
        }
      } catch (error: unknown) {
        if (!cancelled) setMessage("Unable to reach Medic Bot health endpoint.");
      }
    }
    void fetchHealth();
    return () => {
      cancelled = true;
    };
  }, []);

  if (hidden || !message) return null;

  return (
    <div className="errorBanner" role="status">
      {message}
    </div>
  );
}

