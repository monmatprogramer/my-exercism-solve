import { isPlainObject } from "./recursionFuns/clean-null";

export function cleanEmptyValue(dataTesting: unknown) {
  console.log("clean data");
  const a = {};
  console.log(a);
  // It must be type Record<string, unknow> that return from isPlainObject
  if (isPlainObject(dataTesting)) {
    // We use loop to find key and value
    for (const [key, value] of Object.entries(dataTesting)) {
      if (typeof value === "object") {
        console.log("tet");
      }
    }
    const { b, ...newData } = dataTesting;
    console.log(newData);
  }
}
