function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function CleanData(dirtyData: unknown) {
  const isRealObject = isPlainObject(dirtyData);
  if (isRealObject) {
    // Find dirty value here
  }
  console.log("isRealObject: ", isRealObject);
  //Clear null value
  const cleanData: Record<string, unknown> = {};
}
