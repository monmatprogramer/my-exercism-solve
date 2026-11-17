export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function CleanData(dirtyData: unknown) {
  //Clear null value
  const cleanData: Record<string, unknown> = {};
  if (isPlainObject(dirtyData)) {
    // Find dirty value here
    for (const [key, value] of Object.entries(dirtyData)) {
      if (value !== null) {
        // Start finding
        if (typeof value !== "object") {
          cleanData[key] = value;
        } else if (
          typeof value === "object" &&
          Object.keys(value as Record<string, unknown>).length !== 0
        ) {
          //Logii
          cleanData[key] = CleanData(value);
        }
      }
    }
  }
  return cleanData;
}
function cleanFun(meta: unknown): unknown {
  throw new Error("Error");
}
export function safeStringifyMeta(meta: unknown): string {
  if (!meta) return "";
  try {
    const clean = cleanFun(meta);
    const str = JSON.stringify(clean);
    return str.length > 0 ? ` ${str}` : "";
  } catch {
    return "Error";
  }
}
