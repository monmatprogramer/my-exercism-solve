export function CleanData(dirtyData: Record<string, unknown>) {
  //Clear null value
  for (const key in dirtyData) {
    console.log("key: ", key);
    console.log(dirtyData[key]);
  }
}
