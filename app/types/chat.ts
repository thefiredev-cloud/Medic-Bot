export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type NarrativeSection = {
  title: string;
  lines: string[];
};

export type NarrativeDraft = {
  template: string;
  sections: NarrativeSection[];
};

export type NarrativeMedicationEntry = {
  time?: string;
  name: string;
  dose?: string;
  route?: string;
  response?: string;
};

export type NarrativeProcedureEntry = {
  time?: string;
  name: string;
  response?: string;
};

export type NarrativeVitalEntry = {
  time?: string;
  bp?: string;
  hr?: string;
  rr?: string;
  spo2?: string;
  gcs?: string;
  temp?: string;
};

export type NemsisNarrative = {
  eTimes?: {
    unitNotified?: string;
    unitEnRoute?: string;
    unitArrived?: string;
    patientContact?: string;
    departScene?: string;
    arriveDest?: string;
    transfer?: string;
  };
  eSituation?: {
    primaryComplaint?: string;
    providerPrimaryImpression?: string;
    mechanismOfInjury?: string;
  };
  eVitals?: NarrativeVitalEntry[];
  eMedications?: NarrativeMedicationEntry[];
  eProcedures?: NarrativeProcedureEntry[];
  eDisposition?: {
    destination?: string;
    transportMode?: string;
    condition?: string;
  };
  baseContact?: {
    time?: string;
    hospital?: string;
    physician?: string;
    summary?: string;
  };
};

export type CarePlan = {
  protocolCode: string;
  protocolTitle: string;
  actions: string[];
  baseContact: string;
  basicMedications: string[];
  criticalNotes: string[];
};

export type Citation = {
  title: string;
  category: string;
  subcategory?: string;
};
