import type { CarePlan, ChatMessage, Citation } from "@/app/types/chat";

type SendRequestPayload = {
  messages: ChatMessage[];
};

type SendResponse = {
  text?: string;
  citations?: Citation[];
  carePlan?: CarePlan;
  fallback?: boolean;
  error?: { message?: string };
} & Record<string, unknown>;

export type StreamHandler = {
  appendAssistant: (text: string) => void;
  resetNarrative: () => void;
  handleCitations: (value: unknown) => void;
  handleOrders: (text: string | undefined) => void;
  setErrorBanner: (message: string | null) => void;
};

type SendDependencies = {
  request: (payload: SendRequestPayload, options?: { stream?: boolean }) => Promise<SendResponse | ReadableStream<Uint8Array>>;
  streamHandler: StreamHandler;
};

export class MessageSendManager {
  private readonly request: SendDependencies["request"];

  private readonly streamHandler: StreamHandler;

  constructor({ request, streamHandler }: SendDependencies) {
    this.request = request;
    this.streamHandler = streamHandler;
  }

  async send(payload: SendRequestPayload, options?: { stream?: boolean }) {
    const response = await this.request(payload, options);
    if (response instanceof ReadableStream) {
      await this.handleStreamResponse(response);
      return;
    }

    this.handleResponseBody(response);
  }

  private handleResponseBody(body: SendResponse) {
    this.streamHandler.appendAssistant(String(body.text ?? ""));
    this.streamHandler.resetNarrative();
    this.streamHandler.handleCitations(body?.citations);
    this.streamHandler.handleOrders(body?.text);
    if (body?.fallback) {
      this.streamHandler.setErrorBanner("Limited mode - using offline guidance only.");
    }
  }

  private async handleStreamResponse(stream: ReadableStream<Uint8Array>) {
    const payloadText = await new Response(stream).text();
    let data: unknown;

    try {
      data = payloadText ? JSON.parse(payloadText) : {};
    } catch (error) {
      throw new Error("Unable to parse streamed response");
    }

    const typed = data as SendResponse;
    this.handleResponseBody(typed);
  }
}

