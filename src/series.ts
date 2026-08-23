export class Series {
  private seriesString: string;
  constructor(series: string) {
    this.seriesString = series;
    console.log(this.seriesString);
  }

  slices(sliceLength: number): number[][] {
    return [[]];
  }
}
