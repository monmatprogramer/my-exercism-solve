import { isPlainObject } from "./recursionFuns/clean-null";

export function cleanEmptyValue(dataTesting: unknown) {
  const cleanData: Record<string, unknown> = {};
  // It must be type Record<string, unknow> that return from isPlainObject
  if (isPlainObject(dataTesting)) {
    // We use loop to find key and value
    for (const [key, value] of Object.entries(dataTesting)) {
      if (typeof value === "object") {
        // Check empty value
        if (Object.keys(value as Record<string, unknown>).length !== 0) {
          cleanData[key] = cleanEmptyValue(value);
        } else if (typeof value === "string" && value !== null) {
          cleanData[key] = value;
        }
      }
    }
    // const { b, ...newData } = dataTesting;
    // console.log(newData);
  }
  return cleanData;
}
