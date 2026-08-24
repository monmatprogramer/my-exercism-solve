export class Series {
  private seriesString: string;
  constructor(series: string) {
    this.seriesString = series;
  }

  slices(sliceLength: number): number[][] {
    //conver to num array string
    const convertToNum: number[] = this.seriesString.split("").map(Number);
    const copyConverToNum: number[] = [...convertToNum];
    console.log(convertToNum);

    const result: number[][] = [];

    for (const [index, value] of copyConverToNum.entries()) {
      result.push(convertToNum.slice(index, sliceLength));
    }
    result.filter((v) => v.length !== 1);
    // console.log("Result: ", result.filter((v) => v!== []));
    return [[]];
  }
}
