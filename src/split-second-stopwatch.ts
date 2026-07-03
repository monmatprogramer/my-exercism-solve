export class SplitSecondStopwatch {
  private state: string;
  private currentLap: string;
  private total: string;
  private previousLaps: string[];
  
  constructor() {
   this.state = 'ready';
   this.currentLap = '00:00:00';
   this.total = '00:00:00';
   this.previousLaps = [];
  }
  // state stopwatch
  public get state(): string {
    return this.state;
  }

  public get currentLap(): string {
    return this.currentLap;
  }

  public get total(): string {
    return total;
  }

  public get previousLaps(): string[] {
    return this.previousLaps;
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
    if(this.state !== 'running'){
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
