import { useCallback } from "react";

import type { ChatMessage } from "@/app/types/chat";

type ChatState = {
  appendMessage: (message: ChatMessage) => void;
};

export function useAppendAssistant(chat: ChatState) {
  return useCallback(
    (text: string) => {
      chat.appendMessage({ role: "assistant", content: text });
    },
    [chat],
  );
}
