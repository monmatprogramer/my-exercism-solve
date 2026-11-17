export function CleanData(dirtyData: Record<string, unknown>) {
  //Clear null value
  for (const key in dirtyData) {
    console.log("key: ", key);
    console.log("\n\n");
    console.log(dirtyData[key]);
  }
}
