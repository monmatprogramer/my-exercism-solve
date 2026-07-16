//gigasecond
export class Gigasecond {
  private startDate: Date;
  constructor(date: Date) {
    this.startDate = date;
  }
  // Date method
  public date() {
    // the startdate in millisecond
    const timestamp = Date.parse(this.startDate);
    console.log(timestamp);
  }

  // Get Date for debug
  get getDate(): Date {
    return this.startDate;
    //return new object
  }
}

const g = new Gigasecond(new Date());
g.date();
console.log(g.getDate);
