import { useEffect, useRef } from "react";

export function useScrollAnchor(messages: unknown[]): React.RefObject<HTMLDivElement> {
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return endRef;
}
