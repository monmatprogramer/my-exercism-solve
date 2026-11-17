import { isPlainObject } from "./recursionFuns/clean-null";

function cleanEmptyValue(dataTesting: unknown) {
  console.log("clean data");

  // It must be type Record<string, unknow> that return from isPlainObject
  if (isPlainObject(dataTesting)) {
    console.log(Object.keys(dataTesting.b).length === 0);
    const { b, ...newData } = dataTesting;
    console.log(newData);
  }
}
