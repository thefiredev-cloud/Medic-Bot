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
  request: (payload: unknown, options?: { stream?: boolean }) => Promise<
    | ({
        text?: string;
        citations?: Citation[];
        carePlan?: CarePlan;
        fallback?: boolean;
        error?: { message?: string };
      } & Record<string, unknown>)
    | ReadableStream<Uint8Array>
  >;
  setErrorBanner: (message: string | null) => void;
  enableStreaming?: boolean;
};

export function useSendHandler({ chat, narrative, taRef, appendAssistant, handleCitations, handleOrders, request, setErrorBanner, enableStreaming }: SendDeps) {
  return useCallback(async () => {
    if (!chat.input.trim() || chat.loading) return;
    const nextMessages: ChatMessage[] = [...chat.messages, { role: "user", content: chat.input.trim() }];
    chat.replaceMessages(nextMessages);
    chat.setInput("");
    chat.setLoading(true);
    setErrorBanner(null);
    try {
      const response = await request({ messages: nextMessages }, enableStreaming ? { stream: true } : undefined);
      if (response instanceof ReadableStream) {
        await handleStreamResponse(response, {
          appendAssistant,
          resetNarrative: narrative.reset,
          handleCitations,
          handleOrders,
          setErrorBanner,
        });
      } else {
        appendAssistant(String(response.text ?? ""));
        narrative.reset();
        handleCitations(response?.citations);
        handleOrders(response?.text);
        if (response?.fallback) {
          setErrorBanner("Limited mode - using offline guidance only.");
        }
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      appendAssistant(`Sorry, something went wrong: ${message}`);
      setErrorBanner("Unable to reach Medic Bot. Please retry shortly.");
    } finally {
      chat.setLoading(false);
      taRef.current?.focus();
    }
  }, [appendAssistant, chat, enableStreaming, handleCitations, handleOrders, narrative, request, setErrorBanner, taRef]);
}

async function handleStreamResponse(
  stream: ReadableStream<Uint8Array>,
  handlers: {
    appendAssistant: (text: string) => void;
    resetNarrative: () => void;
    handleCitations: (value: unknown) => void;
    handleOrders: (text: string | undefined) => void;
    setErrorBanner: (message: string | null) => void;
  },
) {
  const payloadText = await new Response(stream).text();
  let data: unknown;
  try {
    data = payloadText ? JSON.parse(payloadText) : {};
  } catch (error) {
    throw new Error("Unable to parse streamed response");
  }

  const typed = data as {
    text?: string;
    citations?: Citation[];
    carePlan?: CarePlan;
    fallback?: boolean;
  };

  handlers.appendAssistant(String(typed.text ?? ""));
  handlers.resetNarrative();
  handlers.handleCitations(typed?.citations);
  handlers.handleOrders(typed?.text);
  if (typed?.fallback) {
    handlers.setErrorBanner("Limited mode - using offline guidance only.");
  }
}
