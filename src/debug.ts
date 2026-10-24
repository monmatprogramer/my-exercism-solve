function runWithCorrelationId(correlationId: string, next: () => void): string {
  console.log("correlationId: ", correlationId);
  console.log(next);
  return "string";
}

runWithCorrelationId("correlationId", () => {
  console.log("Hello from cb");
});
