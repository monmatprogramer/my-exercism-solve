export class Series {
  private seriesString: string;
  constructor(series: string) {
    this.seriesString = series;
  }

  slices(sliceLength: number): number[][] {
    const result: number[][] = [];
    for (const char of this.seriesString) {
      console.log(char);
    }
    return [[]];
  }
}
