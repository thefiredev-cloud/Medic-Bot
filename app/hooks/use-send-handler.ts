import { useCallback } from "react";

import type { CarePlan, ChatMessage, Citation } from "@/app/types/chat";

type ChatState = {
  messages: ChatMessage[];
  input: string;
  loading: boolean;
  replaceMessages: (messages: ChatMessage[]) => void;
  setInput: (value: string) => void;
  setLoading: (value: boolean) => void;
};

type NarrativeState = {
  reset: () => void;
};

type SendDeps = {
  chat: ChatState;
  narrative: NarrativeState;
  taRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  appendAssistant: (text: string) => void;
  handleCitations: (value: unknown) => void;
  handleOrders: (text: string | undefined) => void;
  request: (payload: unknown) => Promise<
    {
      text?: string;
      citations?: Citation[];
      carePlan?: CarePlan;
      fallback?: boolean;
      error?: { message?: string };
    } & Record<string, unknown>
  >;
  setErrorBanner: (message: string | null) => void;
};

export function useSendHandler({ chat, narrative, taRef, appendAssistant, handleCitations, handleOrders, request, setErrorBanner }: SendDeps) {
  return useCallback(async () => {
    if (!chat.input.trim() || chat.loading) return;
    const nextMessages: ChatMessage[] = [...chat.messages, { role: "user", content: chat.input.trim() }];
    chat.replaceMessages(nextMessages);
    chat.setInput("");
    chat.setLoading(true);
    setErrorBanner(null);
    try {
      const data = await request({ messages: nextMessages });
      appendAssistant(String(data.text ?? ""));
      narrative.reset();
      handleCitations(data?.citations);
      handleOrders(data?.text);
      if (data?.fallback) {
        setErrorBanner("Service degraded. Providing fallback guidance only.");
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      appendAssistant(`Sorry, something went wrong: ${message}`);
      setErrorBanner("Unable to reach Medic Bot. Please retry shortly.");
    } finally {
      chat.setLoading(false);
      taRef.current?.focus();
    }
  }, [appendAssistant, chat, handleCitations, handleOrders, narrative, request, setErrorBanner, taRef]);
}
