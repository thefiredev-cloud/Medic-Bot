"use client";

import type { CarePlan, Citation, NarrativeDraft, NemsisNarrative } from "@/app/types/chat";

function SectionCard({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <div
      className="protocol-dropdown"
      style={{
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "8px",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0", color: "var(--accent)" }}>{title}</h4>
      <ul style={{ margin: 0, paddingLeft: "20px" }}>
        {items.map((line, idx) => (
          <li key={idx} style={{ marginBottom: "4px", fontSize: "14px" }}>
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function draftHasLines(draft?: NarrativeDraft): boolean {
  if (!draft) return false;
  return draft.sections.some((section) => (section.lines || []).some((line) => line.trim().length > 0));
}

function OrdersSection({ orders }: { orders: string[] }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>Recent Base Orders / Notes</h3>
      <SectionCard title="Orders" items={orders} />
    </div>
  );
}

function NarrativeSections({ draft, label }: { draft: NarrativeDraft; label: string }) {
  if (!draftHasLines(draft)) return null;
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>{label}</h3>
      {draft.sections
        .map((section, index) => {
          const lines = (section.lines || []).filter((line) => line.trim().length > 0);
          return lines.length ? <SectionCard key={`${label}-${index}`} title={section.title} items={lines} /> : null;
        })
        .filter(Boolean)}
    </div>
  );
}

function NemsisSection({ nemsis }: { nemsis: NemsisNarrative }) {
  const hasContent = Boolean(nemsis.eSituation?.primaryComplaint || nemsis.eVitals?.length);
  if (!hasContent) return null;
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>NEMSIS (summary)</h3>
      <div style={{ fontSize: "14px", color: "var(--muted)" }}>
        eSituation.primaryComplaint: {nemsis.eSituation?.primaryComplaint || "—"}
      </div>
    </div>
  );
}

function CarePlanSection({ carePlan }: { carePlan: CarePlan }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>
        Care Plan – {carePlan.protocolCode} {carePlan.protocolTitle}
      </h3>
      <SectionCard title="Actions" items={carePlan.actions} />
      <SectionCard title="Basic Medications" items={carePlan.basicMedications} />
      <SectionCard title="Critical Notes" items={carePlan.criticalNotes} />
      <div style={{ marginTop: "8px", fontWeight: "bold" }}>Base Contact: {carePlan.baseContact}</div>
    </div>
  );
}

function CitationsSection({ citations }: { citations: Citation[] }) {
  if (!citations.length) return null;
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3>Source Citations</h3>
      <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
        {citations.map((citation, index) => (
          <li key={`${citation.title}-${index}`}>
            {citation.title} ({citation.category} – {citation.subcategory || "LA County EMS"})
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmptyNarrativeState() {
  return (
    <div className="narrative-panel" style={{ marginTop: "16px", fontStyle: "italic", color: "var(--muted)" }}>
      Provide patient details (chief complaint, vitals, interventions) and try “Build Narrative” again to auto-fill
      documentation.
    </div>
  );
}

type CandidateInput = {
  soap?: NarrativeDraft;
  chronological?: NarrativeDraft;
  nemsis?: NemsisNarrative;
  carePlan?: CarePlan | null;
  citations?: Citation[];
  recentOrders?: string[];
};

type RenderCandidate = {
  shouldRender: boolean;
  node: JSX.Element | null;
};

function buildCandidates({ soap, chronological, nemsis, carePlan, citations, recentOrders }: CandidateInput): RenderCandidate[] {
  return [
    { shouldRender: Boolean(recentOrders?.length), node: recentOrders ? <OrdersSection orders={recentOrders} /> : null },
    { shouldRender: draftHasLines(soap), node: soap ? <NarrativeSections draft={soap} label="SOAP Narrative" /> : null },
    {
      shouldRender: draftHasLines(chronological),
      node: chronological ? <NarrativeSections draft={chronological} label="Chronological Narrative" /> : null,
    },
    {
      shouldRender: Boolean(nemsis && (nemsis.eSituation?.primaryComplaint || nemsis.eVitals?.length)),
      node: nemsis ? <NemsisSection nemsis={nemsis} /> : null,
    },
    { shouldRender: Boolean(carePlan), node: carePlan ? <CarePlanSection carePlan={carePlan} /> : null },
    { shouldRender: Boolean(citations?.length), node: citations ? <CitationsSection citations={citations} /> : null },
  ];
}

export function NarrativePanel({
  soap,
  chronological,
  nemsis,
  carePlan,
  citations,
  recentOrders,
}: {
  soap?: NarrativeDraft;
  chronological?: NarrativeDraft;
  nemsis?: NemsisNarrative;
  carePlan?: CarePlan | null;
  citations?: Citation[];
  recentOrders?: string[];
}) {
  const candidates = buildCandidates({ soap, chronological, nemsis, carePlan, citations, recentOrders });
  const sections = candidates.filter((candidate) => candidate.shouldRender && candidate.node !== null);
  if (!sections.length) return <EmptyNarrativeState />;

  return (
    <div className="narrative-panel" style={{ marginTop: "16px" }}>
      {sections.map((candidate, index) => (
        <div key={index}>{candidate.node}</div>
      ))}
    </div>
  );
}
