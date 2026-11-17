export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function CleanData(dirtyData: unknown) {
  const isRealObject = isPlainObject(dirtyData);
  //Clear null value
  const cleanData: Record<string, unknown> = {};

  if (isRealObject) {
    // Find dirty value here
    for (const [key, value] of Object.entries(dirtyData)) {
      // Start finding
      if (typeof value !== "object" && typeof value !== null) {
        cleanData[key] = value;
      } else if (
        typeof value === "object" &&
        Object.keys(value as Record<string, unknown>).length !== 0
      ) {
        cleanData[key] = CleanData(value);
      }
    }
  }
  return cleanData;
}
