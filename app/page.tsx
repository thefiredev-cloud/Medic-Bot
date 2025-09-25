"use client";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { SpeechRecognitionManager } from "../lib/SpeechRecognitionManager";

type Msg = { role: "user" | "assistant"; content: string };

type ProtocolDef = {
  name: string;
  description: string;
  medications: string[];
  criticalInfo: string[];
};

// SOB Protocol data with medications and critical info
const SOB_PROTOCOLS: Record<string, ProtocolDef> = {
  "Airway Obstruction 1231": {
    name: "Airway Obstruction (1231)",
    description: "Complete/partial airway obstruction, foreign body, choking, stridor",
    medications: [
      "Oxygen 15L/min via non-rebreather - If O2 sat <94%",
      "Epinephrine 0.5mg IM - For severe allergic reaction"
    ],
    criticalInfo: [
      "For conscious patient: Heimlich maneuver (adults) or back blows and chest thrusts (infants)",
      "For unconscious patient: Begin CPR, check mouth for visible foreign body",
      "Do not perform blind finger sweeps",
      "Base Contact: YES - Severe respiratory distress or arrest"
    ]
  },
  "Respiratory Distress Bronchospasm 1233": {
    name: "Respiratory Distress - Bronchospasm (1233)",
    description: "COPD/asthma exacerbation, wheezing, bronchospasm",
    medications: [
      "Albuterol 5mg via nebulizer - May repeat q20min",
      "Epinephrine 0.5mg IM - For severe bronchospasm",
      "Oxygen 15L/min via non-rebreather - If O2 sat <94%"
    ],
    criticalInfo: [
      "Position patient upright if respiratory status allows",
      "Consider CPAP if severe respiratory distress",
      "Base Hospital Contact: Required for severe respiratory distress unresponsive or not amenable to CPAP"
    ]
  },
  "Respiratory Distress Other 1237": {
    name: "Respiratory Distress - Other (1237)",
    description: "Bronchospasm, COPD or asthma exacerbation",
    medications: [
      "Oxygen 15L/min via non-rebreather - If O2 sat <94%",
      "Albuterol 5mg (6mL) via nebulizer or 4 puffs via MDI",
      "  - May repeat x2 prn wheezing",
      "  - May be administered in-line with CPAP for moderate or severe respiratory distress",
      "Epinephrine 0.5mg (0.5mL) IM - For deteriorating respiratory status despite albuterol",
      "  - Consider early in asthma exacerbation with poor perfusion",
      "  - Unlikely to benefit patients with COPD exacerbation"
    ],
    criticalInfo: [
      "Position patient upright if respiratory status allows",
      "Document Provider Impression as Respiratory Distress / Bronchospasm",
      "Consider CPAP if severe respiratory distress",
      "Base Hospital Contact: Required for severe respiratory distress unresponsive or not amenable to CPAP"
    ]
  },
  "Respiratory Distress Pulmonary Edema 1214": {
    name: "Respiratory Distress - Pulmonary Edema/CHF (1214)",
    description: "Congestive heart failure, pulmonary edema",
    medications: [
      "Nitroglycerin - For SBP >100 with no sexually enhancing drugs within 48 hours:",
      "  - 0.4mg SL for SBP ≥ 100mmHg",
      "  - 0.8mg SL for SBP ≥ 150mmHg",
      "  - 1.2mg SL for SBP ≥ 200mmHg",
      "  - Repeat every 3-5min prn x2 for persistent dyspnea",
      "  - Hold if SBP < 100mmHg",
      "Oxygen 15L/min via non-rebreather - If O2 sat <94%"
    ],
    criticalInfo: [
      "Position patient upright if respiratory status allows",
      "Assess blood pressure prior to each nitroglycerin administration",
      "Consider CPAP if severe respiratory distress",
      "Base Hospital Contact: Required for severe respiratory distress unresponsive or not amenable to CPAP"
    ]
  },
  "Inhalation Injury 1236": {
    name: "Inhalation Injury (1236)",
    description: "Smoke inhalation, chemical exposure",
    medications: [
      "Oxygen 15L/min via non-rebreather - If O2 sat <94%",
      "Epinephrine 0.5mg IM - For severe allergic reaction"
    ],
    criticalInfo: [
      "Remove patient from source of exposure",
      "Consider decontamination if chemical exposure",
      "Monitor for delayed respiratory symptoms",
      "Base Hospital Contact: Required for severe respiratory distress unresponsive or not amenable to CPAP"
    ]
  }
};

function isSOBProtocolMessage(content: string) {
  return content.includes("Select the appropriate respiratory protocol") &&
    content.includes("Airway Obstruction") &&
    content.includes("Respiratory Distress");
}

function MessageItem({ m }: { m: Msg }) {
  if (!isSOBProtocolMessage(m.content)) {
    return <div style={{ whiteSpace: 'pre-wrap' }}>{m.content}</div>;
  }
  return <SOBProtocolGateway />;
}

function ProtocolDetails({ protocol }: { protocol: ProtocolDef }) {
  return (
    <div className="protocol-dropdown" style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '16px',
      marginTop: '8px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>Medications:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {protocol.medications.map((med, idx) => (
            <li key={idx} style={{ marginBottom: '4px', fontSize: '14px' }}>
              {med}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>Critical Information:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {protocol.criticalInfo.map((info, idx) => (
            <li key={idx} style={{ marginBottom: '4px', fontSize: '14px' }}>
              {info}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProtocolCard({ k, protocol, expanded, onToggle }: { k: string; protocol: ProtocolDef; expanded: boolean; onToggle: (k: string) => void }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <button
        className="protocol-button"
        onClick={() => onToggle(k)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '12px 16px',
          marginBottom: '8px',
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          color: '#e6e9ee',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
            {protocol.name}
          </div>
          <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
            {protocol.description}
          </div>
        </div>
        <div style={{ fontSize: '20px' }}>
          {expanded ? '▼' : '▶'}
        </div>
      </button>
      {expanded && <ProtocolDetails protocol={protocol} />}
    </div>
  );
}

function SOBSelector({ protocols }: { protocols: Record<string, ProtocolDef> }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (key: string) => setExpanded(expanded === key ? null : key);
  return (
    <div>
      <div style={{ marginBottom: '16px', fontWeight: 'bold' }}>
        Select the appropriate respiratory protocol:
      </div>
      {Object.entries(protocols).map(([key, protocol]) => (
        <ProtocolCard key={key} k={key} protocol={protocol} expanded={expanded === key} onToggle={toggle} />
      ))}
    </div>
  );
}

function ChatList({ messages }: { messages: Msg[] }) {
  return (
    <div className="chat">
      {messages.map((m, i) => (
        <div key={i} className={`msg ${m.role}`}>
          <MessageItem m={m} />
        </div>
      ))}
    </div>
  );
}

function InputRow({ input, loading, onInput, onSend, taRef, onKeyDown, onToggleVoice, voiceSupported, listening }: { input: string; loading: boolean; onInput: (v: string) => void; onSend: () => void; taRef: React.RefObject<HTMLTextAreaElement>; onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void; onToggleVoice: () => void; voiceSupported: boolean; listening: boolean }) {
  return (
    <div className="inputRow">
      <div className="inputInner">
        <textarea
          ref={taRef}
          value={input}
          placeholder="Ask about medical protocols, treatments, base contact requirements, emergency scenarios..."
          onChange={(e) => onInput(e.target.value)}
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
          {listening ? "●" : "🎤"}
        </button>
        <button onClick={onSend} disabled={loading}>{loading ? "Thinking…" : "Send"}</button>
      </div>
    </div>
  );
}

export default function Page() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "I'm EmergiBot. Tell me what you see?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const speechRef = useRef<SpeechRecognitionManager | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  useEffect(() => {
    const mgr = new SpeechRecognitionManager({
      onStart: () => setListening(true),
      onStop: () => setListening(false),
      onResult: (text, isFinal) => {
        setInput(text);
        if (isFinal) {
          // Optional: auto-send on final result
          // do not auto-send while loading
        }
      },
      onError: () => {
        setListening(false);
      }
    });
    speechRef.current = mgr;
    setVoiceSupported(mgr.supported);
    return () => {
      speechRef.current?.abort();
      speechRef.current = null;
    };
  }, []);

  async function send() {
    if (!input.trim() || loading) return;
    const newMessages = [...messages, { role: "user", content: input.trim() }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.text }]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setMessages([...newMessages, { role: "assistant", content: `Sorry, something went wrong: ${message}` }]);
    } finally {
      setLoading(false);
      taRef.current?.focus();
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  function onToggleVoice() {
    if (!speechRef.current) return;
    if (listening) {
      speechRef.current.stop();
      // After stop, we can auto-send if there's input
      // Avoid sending if already loading
      if (!loading && input.trim()) {
        setTimeout(() => {
          // slight delay to ensure onStop fired
          send();
        }, 50);
      }
    } else {
      // Focus textarea for better UX
      taRef.current?.focus();
      speechRef.current.start();
    }
  }

  function sendProtocolSelection(protocolKey: string) {
    const text = protocolKey;
    setInput(text);
    if (!loading) {
      setTimeout(() => {
        send();
      }, 10);
    }
  }

  function SOBProtocolGateway() {
    return (
      <div>
        <SOBSelector protocols={SOB_PROTOCOLS} />
        <div className="quickBar" aria-label="Quick protocol send">
          {Object.keys(SOB_PROTOCOLS).map(k => (
            <button key={k} className="quickChip" onClick={() => sendProtocolSelection(k)}>
              {k}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <ChatList messages={messages} />
      <div ref={endRef} />
      <InputRow input={input} loading={loading} onInput={setInput} onSend={send} taRef={taRef} onKeyDown={onKeyDown} onToggleVoice={onToggleVoice} voiceSupported={voiceSupported} listening={listening} />
    </div>
  );
}
