export class SplitSecondStopwatch {
  state: string;
  currentLap: string;
  total: string;
  previousLaps: string[];
  
  constructor() {
   this.state = 'ready';
   this.currentLap = '00:00:00';
   this.total = '00:00:00';
   previousLaps = [];
  }
  // state stopwatch
  public get state(): string {
   
    return 'ready';
  }

  public get currentLap(): string {
    return '00:00:00';
  }

  public get total(): string {
    return '00:00:00';
  }

  public get previousLaps(): string[] {
    return [];
  }

  // start stopwatch
  public start(): string {
    if(this.state === 'running'){
      throw new Error('cannot start an already running stopwatch');
    }
    this.state = 'running';
    return this.state;
  }

  public stop(): string {
    if(this.state === 'stopped'){
      throw new Error('cannot stop a stopwatch that is not running');
    }
    this.state = 'stopped';
    return this.state;
  }

  public lap(): unknown {
    throw new Error('Remove this line and implement the function')
  }

  public reset(): unknown {
    throw new Error('Remove this line and implement the function')
  }

  public advanceTime(duration: unknown): unknown {
    throw new Error('Remove this line and implement the function')
  }
}
