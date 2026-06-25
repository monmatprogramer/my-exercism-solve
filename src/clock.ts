export class Clock {
  
  private totalMinutes: number;
  
  constructor(private hour: number, private minute: number = 0) {
    this.totalMinutes = (this.hour * 60) + this.minute;
    this.totalMinutes = ((this.totalMinutes % 1440) + 1440) % 1440;
  }

  public toString(): string {
    //08:05
    const final_hour:string = (Math.floor(this.totalMinutes / 60) ).toString().padStart(2,'0');
    const final_minute:string = (this.totalMinutes % 60).toString().padStart(2,'0');
    return `${final_hour}:${final_minute}`; 
  }

  // Return new clock 
  public plus(minutesToAdd: number): Clock{
    this.totalMinutes = this.totalMinutes + minutesToAdd;
    return new Clock(0, this.totalMinutes);
  }

  public minus(minutesToMinutes: number): Clock{
    this.totalMinutes = this.totalMinutes - minutesToMinutes;
    return new Clock(0, this.totalMinutes);
  }

  public equals(other: Clock) {
    return this.toString() === other.toString();
  }

}
