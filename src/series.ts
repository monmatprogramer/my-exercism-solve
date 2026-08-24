export class Series {
  private seriesString: string;
  constructor(series: string) {
    this.seriesString = series;
  }

  slices(sliceLength: number): number[][] {
    //conver to num array string
    //
    const numStringArr : number[] [] =
    const result: number[][] = [];
    for (const [index, char] of this.seriesString) {
      result.push(this.seriesString.slice(index, sliceLength));
    }
    return [[]];
  }
}
