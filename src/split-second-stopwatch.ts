export class SplitSecondStopwatch {
  private _state: string;
  private _currentLap: string;
  private _total: string;
  private _previousLaps: string[];
  
  constructor() {
   this._state = 'running'; //ready
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
    if(this._state !== 'running'){
      throw new Error('cannot lap a stopwatch that is not running');
    }
    calcTime(duration);
    //calculate duration
    this._total = duration;
  }
}

// Helper function to calculate stopwatch
function calcTime(duration: string):string{
 const durationParts: string[] = duration.split(':');
 console.log(durationParts.map(Number));
 const [hour, minute, second] = durationParts.map(Number);
 
 return '00:00:00';
}
