"use client";
import { useCallback } from "react";

import { ChatInputRow } from "@/app/components/chat-input-row";
import { ChatList } from "@/app/components/chat-list";
import { NarrativePanel } from "@/app/components/narrative-panel";
import { usePageController } from "@/app/hooks/use-page-controller";
import type { ChatMessage } from "@/app/types/chat";

function initialAssistantMessage(): ChatMessage {
  return {
    role: "assistant",
    content:
      "Welcome. Tell me what you see and what you know.\n\nI use the Los Angeles County Prehospital Care Manual. Reference a protocol, provider impression, or chief complaint so I can map it to the appropriate guidance.",
  };
}

function ChatExperience({ controller }: { controller: ReturnType<typeof usePageController> }) {
  const handleExampleSelect = useCallback(
    (value: string) => {
      controller.chat.setInput(value);
      controller.taRef.current?.focus();
    },
    [controller.chat, controller.taRef],
  );

  return (
    <div className="container">
      <ChatList
        messages={controller.chat.messages}
        onProtocolSelect={controller.sendProtocolSelection}
        onExampleSelect={handleExampleSelect}
        errorBanner={controller.errorBanner}
      />
      <NarrativePanel
        soap={controller.narrative.soap}
        chronological={controller.narrative.chronological}
        nemsis={controller.narrative.nemsis}
        carePlan={controller.narrative.carePlan}
        citations={controller.narrative.citations}
        recentOrders={controller.narrative.recentOrders}
        onBuildNarrative={controller.buildNarrative}
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
