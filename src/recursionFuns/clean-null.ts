export function CleanData(dirtyData: Record<string, unknown>) {
  //Clear null value
  for (const [key, value] of Object.entries(dirtyData)) {
    console.log(value);
  }
  for (const key in dirtyData) {
    console.log(dirtyData[key]);
  }
}
