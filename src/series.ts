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
    let result: number[][] = [];

    return (result = method2(convertToNum, copyConverToNum, sliceLength));
  }
}
const method2 = (
  orinalArr: number[],
  copyArr: number[],
  sliceLength: number,
): number[][] => {
  const tempResult: number[][] = [];
  for (const [value] of orinalArr.entries()) {
    let sliceValueArr: number[] = copyArr.slice(0, sliceLength);
    for (let i: number = 0; i < sliceLength; i++) {
      copyArr.shift();
    }
    for (let i: number = 0; i < sliceLength; i++) {
      copyArr.unshift();
    }
    console.log("-> ", sliceValueArr);
    console.log("len: ", copyArr.length);

    tempResult.push(sliceValueArr);
    if (copyArr.length === 0) {
      return tempResult;
    } else {
      if (!(copyArr.length === sliceLength)) {
        return tempResult;
      }
    }
  }
  console.log("tempResult: ", tempResult);
  return tempResult;
};
