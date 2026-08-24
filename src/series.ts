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
  if (sliceLength > orinalArr.length) {
    throw new Error("slice length cannot be greater than series length");
  } else if (sliceLength === 0) {
    throw new Error("slice length cannot be zero");
  }
  const tempResult: number[][] = [];

  for (const [value] of orinalArr.entries()) {
    let sliceValueArr: number[] = copyArr.slice(0, sliceLength);
    if (sliceValueArr.length < sliceLength) {
      return tempResult;
    }
    copyArr.shift();
    tempResult.push(sliceValueArr);
    if (copyArr.length === 0) {
      return tempResult;
    }
  }
  return tempResult;
};
