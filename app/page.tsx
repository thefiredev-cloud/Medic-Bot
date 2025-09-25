"use client";
/* eslint-disable simple-import-sort/imports */
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { MessageItem } from "./components/sob-protocols";
import { SpeechRecognitionManager } from "../lib/SpeechRecognitionManager";

type Msg = { role: "user" | "assistant"; content: string };

type NarrativeSection = { title: string; lines: string[] };
type NarrativeDraft = { template: string; sections: NarrativeSection[] };
type NemsisNarrative = {
  eTimes?: { unitNotified?: string; unitEnRoute?: string; unitArrived?: string; patientContact?: string; departScene?: string; arriveDest?: string; transfer?: string };
  eSituation?: { primaryComplaint?: string; providerPrimaryImpression?: string; mechanismOfInjury?: string };
  eVitals?: Array<{ time?: string; bp?: string; hr?: string; rr?: string; spo2?: string; gcs?: string; temp?: string }>;
  eMedications?: Array<{ time?: string; name: string; dose?: string; route?: string; response?: string }>;
  eProcedures?: Array<{ time?: string; name: string; response?: string }>;
  eDisposition?: { destination?: string; transportMode?: string; condition?: string };
  baseContact?: { time?: string; hospital?: string; physician?: string; summary?: string };
};

type CarePlan = {
  protocolCode: string;
  protocolTitle: string;
  actions: string[];
  baseContact: string;
  basicMedications: string[];
  criticalNotes: string[];
};

type Citation = { title: string; category: string; subcategory: string };

// SOB protocol UI moved to components

 

// SOBSelector moved to components

function ChatList({ messages, onProtocolSelect }: { messages: Msg[]; onProtocolSelect: (key: string) => void }) {
  return (
    <div className="chat">
      {messages.map((m, i) => (
        <div key={i} className={`msg ${m.role}`}>
          <MessageItem m={m} onProtocolSelect={onProtocolSelect} />
        </div>
      ))}
    </div>
  );
}

function SectionCard({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="protocol-dropdown" style={{
      background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', marginTop: '8px'
    }}>
      <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}>{title}</h4>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        {items.map((line, idx) => (
          <li key={idx} style={{ marginBottom: '4px', fontSize: '14px' }}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function hasLines(draft?: NarrativeDraft): boolean {
  if (!draft) return false;
  return draft.sections.some(sec => (sec.lines || []).some(line => line.trim().length > 0));
}

function NarrativePanel({ soap, chronological, nemsis, carePlan, citations, recentOrders }: { soap?: NarrativeDraft; chronological?: NarrativeDraft; nemsis?: NemsisNarrative; carePlan?: CarePlan | null; citations?: Citation[]; recentOrders?: string[] }) {
  const hasSoap = hasLines(soap);
  const hasChrono = hasLines(chronological);
  const hasNemsis = !!(nemsis && (nemsis.eSituation?.primaryComplaint || nemsis.eVitals?.length));
  const hasCarePlan = !!carePlan;
  const hasOrders = !!(recentOrders && recentOrders.length);
  const hasCitations = !!(citations && citations.length);

  if (!hasSoap && !hasChrono && !hasNemsis && !hasCarePlan && !hasOrders && !hasCitations) {
    return (
      <div className="narrative-panel" style={{ marginTop: '16px', fontStyle: 'italic', color: 'var(--muted)' }}>
        Provide patient details (chief complaint, vitals, interventions) and try “Build Narrative” again to auto-fill documentation.
      </div>
    );
  }
  return (
    <div className="narrative-panel" style={{ marginTop: '16px' }}>
      {hasOrders ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>Recent Base Orders / Notes</h3>
          <SectionCard title="Orders" items={recentOrders!} />
        </div>
      ) : null}
      {hasSoap && soap ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>SOAP Narrative</h3>
          {soap.sections.map((sec, i) => {
            const lines = (sec.lines || []).filter(line => line.trim().length > 0);
            return <SectionCard key={`soap-${i}`} title={sec.title} items={lines} />;
          }).filter(Boolean)}
        </div>
      ) : null}
      {hasChrono && chronological ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>Chronological Narrative</h3>
          {chronological.sections.map((sec, i) => {
            const lines = (sec.lines || []).filter(line => line.trim().length > 0);
            return <SectionCard key={`chrono-${i}`} title={sec.title} items={lines} />;
          }).filter(Boolean)}
        </div>
      ) : null}
      {hasNemsis && nemsis ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>NEMSIS (summary)</h3>
          <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
            eSituation.primaryComplaint: {nemsis.eSituation?.primaryComplaint || '—'}
          </div>
        </div>
      ) : null}
      {hasCarePlan && carePlan ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>Care Plan – {carePlan.protocolCode} {carePlan.protocolTitle}</h3>
          <SectionCard title="Actions" items={carePlan.actions} />
          <SectionCard title="Basic Medications" items={carePlan.basicMedications} />
          <SectionCard title="Critical Notes" items={carePlan.criticalNotes} />
          <div style={{ marginTop: '8px', fontWeight: 'bold' }}>Base Contact: {carePlan.baseContact}</div>
        </div>
      ) : null}
      {hasCitations ? (
        <div style={{ marginBottom: '16px' }}>
          <h3>Source Citations</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            {citations!.map((c, idx) => (
              <li key={`${c.title}-${idx}`}>{c.title} ({c.category} – {c.subcategory || 'LA County EMS'})</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function InputRow({ input, loading, onInput, onSend, taRef, onKeyDown, onToggleVoice, voiceSupported, listening, onBuildNarrative }: { input: string; loading: boolean; onInput: (v: string) => void; onSend: () => void; taRef: React.RefObject<HTMLTextAreaElement>; onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void; onToggleVoice: () => void; voiceSupported: boolean; listening: boolean; onBuildNarrative: () => void }) {
  return (
    <div className="inputRow">
      <div className="inputInner" style={{ gap: "8px" }}>
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
          {listening ? "Stop" : "Voice"}
        </button>
        <button onClick={onSend} disabled={loading}>{loading ? "Thinking…" : "Send"}</button>
        <button onClick={onBuildNarrative} disabled={loading} title="Build SOAP/Chrono/NEMSIS narrative + care plan">
          Build Narrative
        </button>
      </div>
    </div>
  );
}

function extractOrders(content: string): string[] {
  if (!content) return [];
  const lines = content
    .split(/\n+/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .filter(line => /base (contact|order)|orders?:/i.test(line));
  // de-duplicate while preserving order
  const seen = new Set<string>();
  const result: string[] = [];
  for (const l of lines) {
    if (!seen.has(l)) {
      seen.add(l);
      result.push(l);
    }
  }
  return result;
}

export default function Page() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "I'm EmergiBot. Tell me what you see? What do you know?\n\nI’m limited to the Los Angeles County Prehospital Care Manual. Reference an LA County protocol, provider impression, or describe the chief complaint so I can map it to the appropriate protocol." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const [soap, setSoap] = useState<NarrativeDraft | undefined>(undefined);
  const [chrono, setChrono] = useState<NarrativeDraft | undefined>(undefined);
  const [nemsis, setNemsis] = useState<NemsisNarrative | undefined>(undefined);
  const [carePlan, setCarePlan] = useState<CarePlan | undefined>(undefined);
  const [citations, setCitations] = useState<Citation[] | undefined>(undefined);
  const [recentOrders, setRecentOrders] = useState<string[] | undefined>(undefined);
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
    const newMessages: Msg[] = [...messages, { role: "user", content: input.trim() }];
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
      const assistantMsg: Msg = { role: "assistant", content: String(data.text ?? "") };
      setMessages([...newMessages, assistantMsg]);
      // Reset narrative panels for standard chat
      setSoap(undefined);
      setChrono(undefined);
      setNemsis(undefined);
      setCarePlan(undefined);
      setCitations(Array.isArray(data?.citations) ? data.citations : undefined);
      const orders = extractOrders(String(data.text ?? ""));
      setRecentOrders(orders.length ? orders : undefined);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      const errorMsg: Msg = { role: "assistant", content: `Sorry, something went wrong: ${message}` };
      setMessages([...newMessages, errorMsg]);
    } finally {
      setLoading(false);
      taRef.current?.focus();
    }
  }

  async function buildNarrative() {
    if (loading) return;
    const newMessages: Msg[] = [...messages];
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, mode: "narrative" })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      if (data?.narrative) {
        setSoap(data.narrative.soap);
        setChrono(data.narrative.chronological);
        setNemsis(data.narrative.nemsis);
      }
      if (data?.carePlan) setCarePlan(data.carePlan);
      setCitations(Array.isArray(data?.citations) ? data.citations : undefined);
      const orders = extractOrders(String(data.text ?? ""));
      setRecentOrders(orders.length ? orders : undefined);
      // Also echo a brief confirmation message with citations count if present
      const assistantMsg: Msg = { role: "assistant", content: "Built narrative and care plan from current conversation." };
      setMessages([...newMessages, assistantMsg]);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      const errorMsg: Msg = { role: "assistant", content: `Sorry, something went wrong: ${message}` };
      setMessages([...newMessages, errorMsg]);
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

  return (
    <div className="container">
      <ChatList messages={messages} onProtocolSelect={sendProtocolSelection} />
      <NarrativePanel soap={soap} chronological={chrono} nemsis={nemsis} carePlan={carePlan} citations={citations} recentOrders={recentOrders} />
      <div ref={endRef} />
      <InputRow
        input={input}
        loading={loading}
        onInput={setInput}
        onSend={send}
        taRef={taRef}
        onKeyDown={onKeyDown}
        onToggleVoice={onToggleVoice}
        voiceSupported={voiceSupported}
        listening={listening}
        onBuildNarrative={buildNarrative}
      />
    </div>
  );
}

// SOBProtocolGateway moved to components
