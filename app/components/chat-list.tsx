import { MessageItem } from "@/app/components/sob-protocols";
import type { ChatMessage } from "@/app/types/chat";
import { HealthStatusBanner } from "@/app/components/health-status-banner";

type ChatListProps = {
  messages: ChatMessage[];
  onProtocolSelect: (key: string) => void;
};

export function ChatList({ messages, onProtocolSelect, errorBanner }: ChatListProps & { errorBanner?: string | null }) {
  return (
    <div>
      <HealthStatusBanner hidden={Boolean(errorBanner)} />
      {errorBanner ? (
        <div className="errorBanner" role="status">
          {errorBanner}
        </div>
      ) : null}
      <div className="chat">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={`msg ${message.role}`}>
            <MessageItem m={message} onProtocolSelect={onProtocolSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}
