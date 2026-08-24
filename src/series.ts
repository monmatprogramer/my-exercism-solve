export class Series {
  private seriesString: string;
  constructor(series: string) {
    this.seriesString = series;
  }

  slices(sliceLength: number): number[][] {
    //conver to num array string
    const convertToNum: number[] = this.seriesString.split("").map(Number);
    //TODO: Fix here
    const copyConverToNum: number[] = [...convertToNum];
    const result: number[][] = [];
    let tempArr: number[] = [];
    for (let i: number = 0; i < convertToNum.length; i++) {
      tempArr = copyConverToNum.slice(i, sliceLength);
      result.push(tempArr);
      sliceLength++;

      if (
        sliceLength > convertToNum.length - 1 &&
        copyConverToNum.length === 0
      ) {
        break;
      }
    }
    return result.filter((v) => v.length > 0);
  }
}
