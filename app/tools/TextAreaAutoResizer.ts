export class TextAreaAutoResizer {
  private readonly minHeight: number;
  private readonly maxHeight: number;

  constructor({ minHeight, maxHeight }: { minHeight: number; maxHeight: number }) {
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }

  public adjust(element: HTMLTextAreaElement): void {
    if (!element) return;

    element.style.height = "auto";
    const nextHeight = Math.min(this.maxHeight, element.scrollHeight);
    element.style.height = `${Math.max(this.minHeight, nextHeight)}px`;
  }
}
