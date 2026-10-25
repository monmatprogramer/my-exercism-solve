//custom error
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
try {
  throw new Error("User not found");
} catch (error) {
  if (error instanceof HttpError) {
    console.error("Send 404 response to client");
  } else {
    console.error("Send 500 server crash response");
  }
}
// Test const function as asynce
const hashPassword = async (): Promise<void> => {
  // It return Promise
  console.log("Hash password.");
  return new Promise((resolve) => setTimeout(resolve, 3000));
};
hashPassword();
// Test correlation
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
