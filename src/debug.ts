type HttpStatus = 400 | 401 | 403 | 404 | 500;

class HttpError extends Error {
  constructor(
    public readonly status: HttpStatus,
    message: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.status = status;
  }
}
const httpError = new HttpError(401, "This is message of error");
console.log(httpError);

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
/*
const logger = new LoggerClass();
logger.info("This is my message", {
  action: "create debug",
  category: "debug category",
  status: "OPEN",
});
*/
