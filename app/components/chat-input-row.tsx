"use client";

import { useEffect, useMemo } from "react";
import type { KeyboardEvent } from "react";

import { TextAreaAutoResizer } from "@/app/tools/TextAreaAutoResizer";

export type ChatInputRowProps = {
  input: string;
  loading: boolean;
  onInput: (value: string) => void;
  onSend: () => void;
  taRef: React.RefObject<HTMLTextAreaElement>;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onToggleVoice: () => void;
  voiceSupported: boolean;
  listening: boolean;
  onBuildNarrative: () => void;
};

export function ChatInputRow({
  input,
  loading,
  onInput,
  onSend,
  taRef,
  onKeyDown,
  onToggleVoice,
  voiceSupported,
  listening,
  onBuildNarrative,
}: ChatInputRowProps) {
  const resizer = useMemo(() => new TextAreaAutoResizer({ minHeight: 64, maxHeight: 208 }), []);

  useEffect(() => {
    if (taRef.current) {
      resizer.adjust(taRef.current);
    }
  }, [input, resizer, taRef]);

  const handleSubmit = () => {
    if (!input.trim() || loading) return;
    onSend();
  };

  return (
    <div className="inputRow" role="form" aria-label="Chat controls">
      <div className="inputInner">
        <textarea
          ref={taRef}
          value={input}
          placeholder="Ask about LA County protocols, treatments, base contact requirements, emergency scenarios…"
          onChange={(event) => onInput(event.target.value)}
          onKeyDown={(event) => {
            onKeyDown(event);
          }}
          aria-label="Message the medic bot"
        />
        <div className="inputActions">
          <button
            type="button"
            className={`micButton${listening ? " listening" : ""}`}
            onClick={onToggleVoice}
            disabled={loading || !voiceSupported}
            aria-label={
              voiceSupported ? (listening ? "Stop voice input" : "Start voice input") : "Voice not supported"
            }
            title={
              voiceSupported
                ? listening
                  ? "Stop voice input"
                  : "Start voice input"
                : "Voice not supported in this browser"
            }
          >
            {listening ? "Stop" : "Voice"}
          </button>
          <button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Thinking…" : "Send"}
          </button>
          <button
            type="button"
            onClick={onBuildNarrative}
            disabled={loading}
            title="Build SOAP/Chrono/NEMSIS narrative + care plan"
          >
            Narrative
          </button>
        </div>
      </div>
    </div>
  );
}
