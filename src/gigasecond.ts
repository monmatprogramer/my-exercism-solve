//gigasecond
export class Gigasecond {
  private initialDate: Date;
  constructor() {
    this.initialDate = new Date();
  }
  public date(/* Parameters go here */) {}
  get getDate(): Date {
    return this.initialDate;
  }
}
