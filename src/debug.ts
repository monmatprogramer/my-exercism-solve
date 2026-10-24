function runWithCorrelationId(correlationId: string, next: () => void): string {
  console.log("correlationId: ", correlationId);
  next();
  return "string";
}

runWithCorrelationId("correlationId", () => {
  console.log("Hello from cb");
});

logger.info("message", {
  action: "create debug",
  category: "debug category",
  status: "OPEN",
});
