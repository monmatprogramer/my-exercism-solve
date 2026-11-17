export function CleanData(dirtyData: Record<string, unknown>) {
  //Clear null value
  for (const [key, value] in dirtyData) {
    console.log(value);
  }
}
