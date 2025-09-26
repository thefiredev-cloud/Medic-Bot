import { useCallback, useEffect, useRef, useState } from "react";

import { SpeechRecognitionManager } from "@/lib/SpeechRecognitionManager";

export type VoiceInputController = {
  listening: boolean;
  voiceSupported: boolean;
  toggle: (textAreaRef: React.RefObject<HTMLTextAreaElement>, loading: boolean, hasInput: boolean) => void;
};

export function useVoiceInput(setInput: (text: string) => void, onAutoSend: () => void): VoiceInputController {
  const [listening, setListening] = useState(false);
  const [voiceSupported, setVoiceSupported] = useState(false);
  const speechRef = useRef<SpeechRecognitionManager | null>(null);

  useEffect(() => {
    const manager = new SpeechRecognitionManager({
      onStart: () => setListening(true),
      onStop: () => setListening(false),
      onResult: (text, isFinal) => {
        setInput(text);
        if (isFinal) onAutoSend();
      },
      onError: () => setListening(false),
    });
    speechRef.current = manager;
    setVoiceSupported(manager.supported);
    return () => {
      speechRef.current?.abort();
      speechRef.current = null;
    };
  }, [onAutoSend, setInput]);

  const toggle = useCallback(
    (textAreaRef: React.RefObject<HTMLTextAreaElement>, loading: boolean, hasInput: boolean) => {
      if (!speechRef.current) return;
      if (listening) {
        speechRef.current.stop();
        if (!loading && hasInput) {
          setTimeout(() => {
            onAutoSend();
          }, 50);
        }
      } else {
        textAreaRef.current?.focus();
        speechRef.current.start();
      }
    },
    [listening, onAutoSend],
  );

  return { listening, voiceSupported, toggle };
}
