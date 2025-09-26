"use client";

import type { KeyboardEvent } from "react";

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
  return (
    <div className="inputRow">
      <div className="inputInner" style={{ gap: "8px" }}>
        <textarea
          ref={taRef}
          value={input}
          placeholder="Ask about medical protocols, treatments, base contact requirements, emergency scenarios..."
          onChange={(event) => onInput(event.target.value)}
          onKeyDown={onKeyDown}
        />
        <button
          type="button"
          className={`micButton${listening ? " listening" : ""}`}
          onClick={onToggleVoice}
          disabled={loading || !voiceSupported}
          aria-label={voiceSupported ? (listening ? "Stop voice input" : "Start voice input") : "Voice not supported"}
          title={voiceSupported ? (listening ? "Stop voice input" : "Start voice input") : "Voice not supported in this browser"}
        >
          {listening ? "Stop" : "Voice"}
        </button>
        <button onClick={onSend} disabled={loading}>
          {loading ? "Thinking…" : "Send"}
        </button>
        <button onClick={onBuildNarrative} disabled={loading} title="Build SOAP/Chrono/NEMSIS narrative + care plan">
          Build Narrative
        </button>
      </div>
    </div>
  );
}
