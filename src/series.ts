export class Series {
  private seriesString: string;
  constructor(series: string) {
    if (series === "") {
      throw new Error("series cannot be empty");
    }
    this.seriesString = series;
  }

  slices(sliceLength: number): number[][] {
    //conver to num array string
    const convertToNum: number[] = this.seriesString.split("").map(Number);
    return method2(convertToNum.length, [...convertToNum], sliceLength);
  }
}
const checkCondition = (sliceLength: number, orinalArrLen: number) => {
  if (sliceLength > orinalArrLen) {
    throw new Error("slice length cannot be greater than series length");
  } else if (sliceLength === 0) {
    throw new Error("slice length cannot be zero");
  } else if (sliceLength < 0) {
    throw new Error("slice length cannot be negative");
  }
};
const method2 = (
  orinalArrLen: number,
  copyArr: number[],
  sliceLength: number,
): number[][] => {
  checkCondition(sliceLength, orinalArrLen);

  const tempResult: number[][] = [];
  let sliceValueArr: number[];

  for (let i: number = 0; i < orinalArrLen; i++) {
    sliceValueArr = copyArr.slice(0, sliceLength);
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
