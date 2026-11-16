export function hideSecret(data: any): any {
  if (typeof data !== "object" || data === null) return data;

  const cleanData: any = {};

  for (const key in data) {
    const value = data[key];
    if (key === "password") {
      cleanData[key] = "*** HIDDEN ***";
    }
  }
}
