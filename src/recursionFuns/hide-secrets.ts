export function hideSecret(data: any): any {
  if (typeof data !== "object" || data === null) return data;

  const cleanData: any = {};
  for (const key in data) {
    const value = data[key];

    if (key === "password" || key === "apiToken" || key === "stripe_token") {
      cleanData[key] = "*** HIDDEN ***";
    } else if (typeof value === "object" && value !== null) {
      cleanData[key] = hideSecret(value);
    } else {
      cleanData[key] = value;
    }
  }
  return cleanData;
}
