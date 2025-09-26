"use client";

import { MessageItem } from "@/app/components/sob-protocols";
import type { ChatMessage } from "@/app/types/chat";

type ChatListProps = {
  messages: ChatMessage[];
  onProtocolSelect: (key: string) => void;
};

export function ChatList({ messages, onProtocolSelect }: ChatListProps) {
  return (
    <div className="chat">
      {messages.map((message, index) => (
        <div key={`${message.role}-${index}`} className={`msg ${message.role}`}>
          <MessageItem m={message} onProtocolSelect={onProtocolSelect} />
        </div>
      ))}
    </div>
  );
}
