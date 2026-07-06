import { SplitSecondStopwatch } from "./split-second-stopwatch";

const stopwatch = new SplitSecondStopwatch();
try {
  stopwatch.start();
  stopwatch.advanceTime("00:11:22");
  stopwatch.lap();
  //expect(stopwatch.currentLap).toBe("00:00:00");
  console.log(stopwatch.previousLaps);
  stopwatch.stop();
  //expect(stopwatch.currentLap).toBe("00:00:15");
  console.log(stopwatch.previousLaps);
} catch (er: any) {
  console.log(er.message);
}
