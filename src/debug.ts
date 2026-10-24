console.log("Hello world");

function runWithCorrelationId(correlationId: string): string {
  console.log("correlationId: ", correlationId);
  return "string";
}

runWithCorrelationId("correlationId");
