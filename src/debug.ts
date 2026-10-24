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
  status: string;
}
class LoggerClass {
  info(message: string, obj: LoggObj) {
    console.log("message: ", message);
    console.log(obj.action);
    console.log(obj.category);
    console.log(obj.status);
  }
}
const logger = new LoggerClass();

logger.info("This is my message", {
  action: "create debug",
  category: "debug category",
  status: "OPEN",
});
