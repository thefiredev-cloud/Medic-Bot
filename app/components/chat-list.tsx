import { HealthStatusBanner } from "@/app/components/health-status-banner";
import { MessageItem } from "@/app/components/sob-protocols";
import { WelcomeCard } from "@/app/components/welcome-card";
import type { ChatMessage } from "@/app/types/chat";

type ChatListProps = {
  messages: ChatMessage[];
  onProtocolSelect: (key: string) => void;
  onExampleSelect?: (value: string) => void;
};

export function ChatList({ messages, onProtocolSelect, onExampleSelect, errorBanner }: ChatListProps & { errorBanner?: string | null }) {
  const onlyIntroMessage = messages.length === 1 && messages[0]?.role === "assistant";

  return (
    <div>
      <HealthStatusBanner hidden={Boolean(errorBanner)} />
      {errorBanner ? (
        <div className="errorBanner" role="status">
          {errorBanner}
        </div>
      ) : null}
      {onlyIntroMessage ? <WelcomeCard onExampleSelect={onExampleSelect} /> : null}
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
