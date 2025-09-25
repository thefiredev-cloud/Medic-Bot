export type SpeechRecognitionEvents = {
  onStart?: () => void;
  onStop?: () => void;
  onResult?: (text: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
};

export class SpeechRecognitionManager {
  private recognition: any | null = null;
  private isListeningInternal = false;
  private accumulator = "";
  private events: SpeechRecognitionEvents;

  constructor(events: SpeechRecognitionEvents = {}) {
    this.events = events;
    if (typeof window !== "undefined") {
      const SpeechRecognition: any =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true;
        this.recognition.interimResults = true;
        this.recognition.lang = "en-US";

        this.recognition.onstart = () => {
          this.isListeningInternal = true;
          this.accumulator = "";
          this.events.onStart?.();
        };

        this.recognition.onresult = (event: any) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              this.accumulator += transcript + " ";
              this.events.onResult?.(this.accumulator.trim(), true);
            } else {
              interim += transcript;
            }
          }
          if (interim) {
            this.events.onResult?.((this.accumulator + interim).trim(), false);
          }
        };

        this.recognition.onerror = (event: any) => {
          const message = typeof event?.error === "string" ? event.error : "unknown_error";
          this.events.onError?.(message);
        };

        this.recognition.onend = () => {
          this.isListeningInternal = false;
          this.events.onStop?.();
        };
      }
    }
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


