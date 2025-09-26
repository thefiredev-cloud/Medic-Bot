type LogLevel = "debug" | "info" | "warn" | "error";

type LogPayload = Record<string, unknown>;

export class Logger {
  constructor(private readonly context: string) {}

  public debug(message: string, payload: LogPayload = {}): void {
    this.log("debug", message, payload);
  }

  public info(message: string, payload: LogPayload = {}): void {
    this.log("info", message, payload);
  }

  public warn(message: string, payload: LogPayload = {}): void {
    this.log("warn", message, payload);
  }

  public error(message: string, payload: LogPayload = {}): void {
    this.log("error", message, payload);
  }

  private log(level: LogLevel, message: string, payload: LogPayload): void {
    const sanitized = this.redactSensitive(payload);
    const entry = {
      timestamp: new Date().toISOString(),
      context: this.context,
      level,
      message,
      ...sanitized,
    };
    // eslint-disable-next-line no-console
    console[level === "error" ? "error" : level === "warn" ? "warn" : "log"](JSON.stringify(entry));
  }

  private redactSensitive(payload: LogPayload): LogPayload {
    const clone: LogPayload = {};
    for (const [key, value] of Object.entries(payload)) {
      if (typeof value === "string" && /content|message|prompt|input/i.test(key)) {
        clone[key] = "[REDACTED]";
      } else if (value && typeof value === "object") {
        clone[key] = this.redactSensitive(value as LogPayload);
      } else {
        clone[key] = value;
      }
    }
    return clone;
  }
}

export function createLogger(context: string): Logger {
  return new Logger(context);
}

