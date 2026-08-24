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
      // console.log("i: ", i);
      // console.log(copyConverToNum.slice(i, sliceLength));
      tempArr = copyConverToNum.slice(i, sliceLength);
      result.push(tempArr);
      sliceLength++;
      // console.log("\n");
    }
    return result.filter((v) => v.length > 0);
  }
}
