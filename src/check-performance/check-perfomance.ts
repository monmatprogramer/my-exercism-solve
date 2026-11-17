import { CleanData } from "../recursionFuns/clean-null";
const data: Record<string, unknown> = {
  serverName: "QNAP-NAS-433",
  uptime: 99.9,
  lastError: null,
  storage: {
    disk1: "Healthy",
    disk2: null,
    diagnostics: {
      temperature: 45,
      badSectors: null,
    },
  },
};
export function method1() {
  console.time("CleanData Speed.");
  const result = CleanData(data);
  console.log("result: ", result);
  console.timeEnd("CleanData Speed.");
}

export function method2() {
  console.log("\n\n----method 2----\n\n");
  const startTime = performance.now();
  CleanData(data);
  const endTime = performance.now();
  const timeTaken = endTime - startTime;
  console.log(timeTaken);
}

export function method3() {
  const numberOfRuns = 10000;
  console.time("Average CleanData Speed");
  for (let i = 0; i < numberOfRuns; i++) {
    CleanData(data);
  }
  console.timeEnd("Average CleanData Speed");
}
