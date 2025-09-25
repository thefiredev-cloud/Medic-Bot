/* eslint-disable unicorn/filename-case */
export type SpeechRecognitionEvents = {
  onStart?: () => void;
  onStop?: () => void;
  onResult?: (text: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
};

// eslint-disable-next-line unicorn/filename-case
export class SpeechRecognitionManager {
  private recognition: SpeechRecognition | null = null;
  private isListeningInternal = false;
  private accumulator = "";
  private events: SpeechRecognitionEvents;

  constructor(events: SpeechRecognitionEvents = {}) {
    this.events = events;
    if (typeof window !== "undefined") {
      this.initializeRecognition();
    }
  }

  private initializeRecognition(): void {
    const win = window as unknown as {
      SpeechRecognition?: typeof window.SpeechRecognition;
      webkitSpeechRecognition?: typeof window.SpeechRecognition;
    };
    const RecognitionCtor = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (!RecognitionCtor) return;
    // Narrow type to standard SpeechRecognition where supported
    this.recognition = new (RecognitionCtor as unknown as new () => SpeechRecognition)();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";

    this.recognition.onstart = () => {
      this.isListeningInternal = true;
      this.accumulator = "";
      this.events.onStart?.();
    };

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const { accumulator, interim } = this.processResultEvent(event);
      this.accumulator = accumulator;
      if (interim) this.events.onResult?.((accumulator + interim).trim(), false);
    };

    this.recognition.onerror = (event: Event & { error?: string }) => {
      const errorEvent = event as { error?: string };
      const message = typeof errorEvent.error === "string" ? errorEvent.error : "unknown_error";
      this.events.onError?.(message);
    };

    this.recognition.onend = () => {
      this.isListeningInternal = false;
      this.events.onStop?.();
    };
  }

  private processResultEvent(event: SpeechRecognitionEvent): { accumulator: string; interim: string } {
    let interim = "";
    let accumulator = this.accumulator;
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        accumulator += transcript + " ";
        this.events.onResult?.(accumulator.trim(), true);
      } else {
        interim += transcript;
      }
    }
    return { accumulator, interim };
  }

  get supported(): boolean {
    return !!this.recognition;
  }

  get isListening(): boolean {
    return this.isListeningInternal;
  }

  start() {
    if (!this.recognition || this.isListeningInternal) return;
    try {
      this.recognition.start();
    } catch (e) {
      // Some browsers throw if already started
    }
  }

  stop() {
    if (!this.recognition || !this.isListeningInternal) return;
    try {
      this.recognition.stop();
    } catch (e) {
      // ignore
    }
  }

  abort() {
    if (!this.recognition) return;
    try {
      this.recognition.abort();
    } catch (e) {
      // ignore
    }
  }
}


