export class SplitSecondStopwatch {
  private _state: string;
  private _currentLap: string;
  private _total: string;
  private _previousLaps: string[];

  constructor() {
    this._state = "ready"; //ready
    this._currentLap = "00:00:00";
    this._total = "00:00:00";
    this._previousLaps = [];
  }
  // state stopwatch
  public get state(): string {
    return this._state;
  }

  public get currentLap(): string {
    return this._currentLap;
  }

  public get total(): string {
    return this._total;
  }

  public get previousLaps(): string[] {
    return this._previousLaps;
  }

  // start stopwatch
  public start(): string {
    if (this._state === "running") {
      throw new Error("cannot start an already running stopwatch");
    }
    this._state = "running";
    return this._state;
  }

  public stop(): string {
    if (this._state !== "running") {
      throw new Error("cannot stop a stopwatch that is not running");
    }
    this._state = "stopped";
    return this._state;
  }

  public lap() {
    if (this._state !== "running") {
      throw new Error("cannot lap a stopwatch that is not running");
    }
    this._state = "lapped";
    this._currentLap = "";
  }

  public reset() {
    if (this._state !== "stopped") {
      throw new Error("cannot reset a stopwatch that is not stopped");
    }
    this._state = "ready";
    this._currentLap = "00:00:00";
    this._previousLaps = [];
  }

  public advanceTime(duration: string) {
    //add advance time to be current lap and total
    if (this._state === "stopped") {
      this._currentLap = duration;
      this._total = this._total;
    } else if (this._state === "lapped") {
      this._previousLaps.push(duration);
      this._total = totalAdvanceTime(this._previousLaps);
      this._currentLap = duration;
      this._state = "running";
      return this._previousLaps;
    } else {
      this._currentLap = duration;
      // add current to _previousLaps
      this._previousLaps.push(this._currentLap);
      this._total = this._currentLap;
    }
    // it will got result as total second like 13
    const totalSecond = totalPreviousLaps(this._previousLaps);
    // After that we convert total second to hr, mm, second.
    const hr: number = convertToHour(totalSecond);
    const mm: number = convertToMinute(totalSecond);
    const ss: number = convertToSecond(totalSecond);
    //conver them to string
    const [shr, smm, sss]: string[] = [hr, mm, ss].map(String);
    this._total = `${shr.padStart(2, "0")}:${smm.padStart(2, "0")}:${sss.padStart(2, "0")}`;
    this._currentLap = this._total;
  }
}

// Helper function to calculate stopwatch
function calcTime(duration: string): number {
  const durationParts: string[] = duration.split(":");
  const [hour, minute, second] = durationParts.map(Number);
  // seconds
  const result: number = hour * 3600 + minute * 60 + second;
  //it return total second for futur use
  return result;
}

// Convert to hour
function convertToHour(totalSeconds: number): number {
  const hour = Math.floor(totalSeconds / 3600);
  return hour;
}

// Convert to minute
function convertToMinute(totalSeconds: number): number {
  const minute = Math.floor((totalSeconds % 3600) / 60);
  return minute;
}

// Convert to second
function convertToSecond(totalSeconds: number): number {
  const second: number = totalSeconds % 60;
  return second;
}

// Sum previousLaps
function totalPreviousLaps(previousLap: string[]) {
  let sumDuration: number = 0;
  let totalSecond: number = 0;
  for (const [index, value] of previousLap.entries()) {
    totalSecond = totalSecond + calcTime(value);
  }
  //it return back total second like 13
  return totalSecond;
}

// totalAdvanceTime
function totalAdvanceTime(previousLap: string[]): string {
  const totalSecond = totalPreviousLaps(previousLap);
  const hr: number = convertToHour(totalSecond);
  const mm: number = convertToMinute(totalSecond);
  const ss: number = convertToSecond(totalSecond);
  //conver them to string
  const [shr, smm, sss]: string[] = [hr, mm, ss].map(String);
  const total = `${shr.padStart(2, "0")}:${smm.padStart(2, "0")}:${sss.padStart(2, "0")}`;
  return total;
}
