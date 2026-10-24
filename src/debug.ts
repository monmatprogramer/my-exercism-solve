function runWithCorrelationId(correlationId: string, next: () => void): string {
  console.log("correlationId: ", correlationId);
  next();
  return "string";
}

runWithCorrelationId("correlationId", () => {
  console.log("Hello from cb");
});
interface LoggObj {
  action: string;
  category: string;
  state: string;
}
interface Logger {
  info: (message: string, obj: LoggObj) => void;
}
const logger = {};

logger.info("message", {
  action: "create debug",
  category: "debug category",
  status: "OPEN",
});
