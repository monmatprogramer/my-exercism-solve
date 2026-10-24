function runWithCorrelationId(correlationId: string, next: () => void): string {
  console.log("correlationId: ", correlationId);
  return "string";
}

runWithCorrelationId("correlationId", () => {
  console.log("Hello from cb");
});
