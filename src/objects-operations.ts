import { isPlainObject } from "./recursionFuns/clean-null";

function cleanEmptyValue(dataTesting: unknown) {
  console.log("clean data");

  if (isPlainObject(dataTesting)) {
    console.log(Object.keys(dataTesting.b).length === 0);
    const { b, ...newData } = dataTesting;
    console.log(newData);
  }
}
