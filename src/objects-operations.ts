import { isPlainObject } from "./recursionFuns/clean-null";

export function cleanEmptyValue(dataTesting: unknown) {
  console.log("clean data");

  // It must be type Record<string, unknow> that return from isPlainObject
  if (isPlainObject(dataTesting)) {
    // We use loop to find key and value
    for (const [key, value] of Object.entries(dataTesting)) {
      if (typeof value === "object") {
        console.log(value);
      }
    }
    const { b, ...newData } = dataTesting;
    console.log(newData);
  }
}
