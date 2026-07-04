export class SplitSecondStopwatch {
  private _state: string;
  private _currentLap: string;
  private _total: string;
  private _previousLaps: string[];
  
  constructor() {
   this._state = 'ready'; //ready
   this._currentLap = '00:00:00';
   this._total = '00:00:00';
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
    if(this._state === 'running'){
      throw new Error('cannot start an already running stopwatch');
    }
    this._state = 'running';
    return this._state;
  }

  public stop(): string {
    if(this._state !== 'running'){
      throw new Error('cannot stop a stopwatch that is not running');
    }
    this._state = 'stopped';
    return this._state;
  }

  public lap(): string[] {
    if(this._state !== 'running'){
      throw new Error('cannot lap a stopwatch that is not running');
    }
    this._previousLaps.push(this.currentLap);
    this._currentLap = '00:00:00';
    return this._previousLaps;
  }

  public reset() {
    if(this._state !== 'stopped'){
      throw new Error('cannot reset a stopwatch that is not stopped');
    }
    this._state = 'ready';
    this._currentLap = '00:00:00';
    this._previousLaps = [];
  }

  public advanceTime(duration: string){
    //add advance time to be current lap and total
    if(this._state === 'stopped'){
      this._currentLap = this._currentLap;
      this._total = this._total;
    }else{
      this._currentLap = duration;
      this._total = this._currentLap;
    }
    // After it is added the curret lap, the state is "running"
    console.log('---calcTime---');
    const totalSecond: number = calcTime(duration);
    convertToHour(totalSecond);
    convertToMinute(totalSecond);
    convertToSecond(totalSecond);
    //calculate duration:
    this._total = duration;
  }
}

// Helper function to calculate stopwatch
function calcTime(duration: string): number {
 const durationParts: string[] = duration.split(':');
 const [hour, minute, second] = durationParts.map(Number);
  // seconds
 const result: number =  hour * 3600 + minute * 60 + second;
 console.log(result);
 return result;
}
// Convert to hour
function convertToHour(totalSeconds: number): number{
  const hour = Math.floor(totalSeconds / 3600);
  return hour;
}

// Convert to minute
function convertToMinute(totalSeconds: number): number{
  const minute = Math.floor((totalSeconds % 3600) / 60);
  return minute; 
}

// Convert to second
function convertToSecond(totalSeconds: number): number{
  const second: number = totalSeconds % 60;
  return second;
}
