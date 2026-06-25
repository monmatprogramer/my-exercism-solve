export class Clock {

  private totalMinutes: number;

  constructor(private hour: number, private minute?: number) {
    this.totalMinutes = (this.hour * 60) + this.minute;
    this.totalMinutes = (this.totalMinutes % 1440) % 1440;
  }

  public toString(): string {
    //08:05
    const final_hour:string = (this.totalMinutes / 60).toString().padStart(2,'0');
    const final_minute:string = (this.totalMinutes % 60).toString().padStart(2,'0');
    return `${final_hour}:${final_minute}`; 
  }

  public plus(minutes: number): Clock {
    
  }

  public minus(minutes: number): Clock {
  }

  public equals(other: number) {
  
  }

}
