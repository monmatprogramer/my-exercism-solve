export function hideSecret(data: any): any {
  console.log("\n\ndata: ", data);
  if (typeof data !== "object" || data === null) return data;

  const cleanData: any = {};
  console.log("\t\t\n\nCleanData: ", JSON.stringify(cleanData));
  for (const key in data) {
    const value = data[key];
    console.log("\t\tvalue: ", value);
    if (key === "password") {
      cleanData[key] = "*** HIDDEN ***";
    } else if (typeof value === "object" && value !== null) {
      cleanData[key] = hideSecret(value);
    } else {
      cleanData[key] = value;
    }
  }
  return cleanData;
}
