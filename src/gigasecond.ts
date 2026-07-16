//gigasecond
export class Gigasecond {
  private startDate: Date;
  constructor(date: Date) {
    this.inhtialDate = date;
  }
  public date(/* Parameters go here */) {}
  get getDate(): Date {
    return this.startDate;
    //return new object
  }
}

const g = new Gigasecond(new Date());
//console.log(g.getDate);
// Get user input date as string
const dateString = "2011-04-25";
// convert it into date object
const dateObj = Date.parse(dateString);

console.log(dateObj);
