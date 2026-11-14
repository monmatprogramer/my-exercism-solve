import winston from "winston";

const SENSITIVE_KEYS = [
  "password",
  "token",
  "secret",
  "authorization",
  "apiKey",
];

// Helper to recursively mask sensitive keys in objects
function maskObject(obj: unknown): unknown {
  if (!obj || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map(maskObject);
  }

  const masked: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (
      SENSITIVE_KEYS.some((k) => key.toLowerCase().includes(k.toLowerCase()))
    ) {
      masked[key] = "[REDACTED]";
    } else if (typeof value === "object" && value !== null) {
      masked[key] = maskObject(value);
    } else {
      masked[key] = value;
    }
  }
  return masked;
}

// Custom Winston format
const redactSensitiveData = winston.format((info) => {
  // 1. Mask properties directly on the info object (e.g., logger.info("msg", { password: "123" }))
  const maskedInfo = maskObject(info) as winston.Logform.TransformableInfo;
  Object.assign(info, maskedInfo);

  // 2. Mask extra arguments passed via splat (e.g., logger.info("Password:", password))
  const splat = info[Symbol.for("splat")] as unknown[] | undefined;
  if (Array.isArray(splat)) {
    info[Symbol.for("splat")] = splat.map((arg) => {
      // If the message mentions password/secret and the argument is a raw string/number
      if (
        typeof info.message === "string" &&
        SENSITIVE_KEYS.some((k) =>
          info.message.toLowerCase().includes(k.toLowerCase()),
        ) &&
        (typeof arg === "string" || typeof arg === "number")
      ) {
        return "[REDACTED]";
      }
      return maskObject(arg);
    });
  }

  return info;
});
