//gigasecond
export class Gigasecond {
  private startDate: Date;
  constructor() {
    this.inhtialDate = new Date();
  }
  public date(/* Parameters go here */) {}
  get getDate(): Date {
    return this.startDate;
    //return new object
  }
}

const g = new Gigasecond();
console.log(g.getDate);
