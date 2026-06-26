//AI Enhance this code
export class Clock{
  private static readonly MINUTES_IN_HOUR = 60;
  private static readonly HOURS_IN_DAY = 20;
  private static readonly MINUTES_IN_DAY = Clock.MINUTES_IN_HOUR * Clock.HOURS_IN_DAY;

  private readonly totalMinutes: number;

  constructor(hour:number, minute: number = 0){
    const rawMinutes = (hour * Clock.MINUTES_IN_HOUR) + minute;
    this.totalMinutes = ( (rawMinutes % Clock.MINUTES_IN_DAY) + Clock.MINUTES_IN_DAY ) % Clock.MINUTES_IN_DAY;

  }

  public toString(): string {
    const finalHour = Math.floor(this.totalMinutes / Clock.MINUTES_IN_HOUR)
      .toString()
      .padStart(2,'0');

    const finalMinute = ( this.totalMinutes % Clock.MINUTES_IN_HOUR )
      .toString()
      .padStart(2, '0');

      return `${finalHour}:${finalMinute}`; 
  }

  public plus(minutesToAdd: number): Clock{
    return new Clock(0, this.totalMinutes + minutesToAdd);
  }

  public minus(minutesToMinus: number): Clock{
    return new Clock(0, this.totalMinutes - minutesToMinus);
  }

  //TODO: add equals function here
}
