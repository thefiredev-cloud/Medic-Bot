"use client";
import { ChatInputRow } from "@/app/components/chat-input-row";
import { ChatList } from "@/app/components/chat-list";
import { NarrativePanel } from "@/app/components/narrative-panel";
import { usePageController } from "@/app/hooks/use-page-controller";
import type { ChatMessage } from "@/app/types/chat";

function initialAssistantMessage(): ChatMessage {
  return {
    role: "assistant",
    content:
      "I'm EmergiBot. Tell me what you see? What do you know?\n\nI’m limited to the Los Angeles County Prehospital Care Manual. Reference an LA County protocol, provider impression, or describe the chief complaint so I can map it to the appropriate protocol.",
  };
}

function ChatExperience({ controller }: { controller: ReturnType<typeof usePageController> }) {
  return (
    <div className="container">
      <ChatList messages={controller.chat.messages} onProtocolSelect={controller.sendProtocolSelection} />
      <NarrativePanel
        soap={controller.narrative.soap}
        chronological={controller.narrative.chronological}
        nemsis={controller.narrative.nemsis}
        carePlan={controller.narrative.carePlan}
        citations={controller.narrative.citations}
        recentOrders={controller.narrative.recentOrders}
      />
      <div ref={controller.endRef} />
      <ChatInputRow
        input={controller.chat.input}
        loading={controller.chat.loading}
        onInput={controller.chat.setInput}
        onSend={controller.send}
        taRef={controller.taRef}
        onKeyDown={controller.onKeyDown}
        onToggleVoice={controller.onToggleVoice}
        voiceSupported={controller.voice.voiceSupported}
        listening={controller.voice.listening}
        onBuildNarrative={controller.buildNarrative}
      />
    </div>
  );
}

export default function Page() {
  const controller = usePageController([initialAssistantMessage()]);
  return <ChatExperience controller={controller} />;
}
