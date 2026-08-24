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
    console.log(convertToNum.length);
    const result: number[][] = [];
    for (let i: number = 0; i < convertToNum.length; i++) {
      for (let j: number = i; j < sliceLength; j++) {
        console.log(`i ${i} j ${j}`);
      }
    }
    return result.filter((v) => v.length > 0);
  }
}
