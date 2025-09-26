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
  request: (payload: unknown) => Promise<{ text?: string; citations?: Citation[]; carePlan?: CarePlan } & Record<string, unknown>>;
};

export function useSendHandler({ chat, narrative, taRef, appendAssistant, handleCitations, handleOrders, request }: SendDeps) {
  return useCallback(async () => {
    if (!chat.input.trim() || chat.loading) return;
    const nextMessages: ChatMessage[] = [...chat.messages, { role: "user", content: chat.input.trim() }];
    chat.replaceMessages(nextMessages);
    chat.setInput("");
    chat.setLoading(true);
    try {
      const data = await request({ messages: nextMessages });
      appendAssistant(String(data.text ?? ""));
      narrative.reset();
      handleCitations(data?.citations);
      handleOrders(data?.text);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      appendAssistant(`Sorry, something went wrong: ${message}`);
    } finally {
      chat.setLoading(false);
      taRef.current?.focus();
    }
  }, [appendAssistant, chat, handleCitations, handleOrders, narrative, request, taRef]);
}
