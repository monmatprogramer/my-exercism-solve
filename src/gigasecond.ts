//gigasecond
export class Gigasecond {
  private startDate: Date;
  constructor(date: Date) {
    this.startDate = date;
  }
  // Date method
  public date(): Gigasecond {
    // gigasecond
    const gigasecond: number = 1000000000000;
    // the startdate in millisecond
    const millisecond = this.startDate.getTime();
    // add millisecond with gigasecond
    const total: number = millisecond + gigasecond;
    // convert total to date object
    const newDate: Date = new Date(total);
    return new Gigasecond(newDate);
  }

  // Get Date for debug
  get getDate(): Date {
    return this.startDate;
    //return new object
  }
}

const g = new Gigasecond(new Date());
const gg = g.date();
console.log(gg.getDate);
