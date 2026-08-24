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
const method1 = (
  orinalArr: number[],
  copyArr: number[],
  sliceLength: number,
): number[][] => {
  const tempResult: number[][] = [];
  let tempArr: number[] = [];

  for (let i: number = 0; i < orinalArr.length; i++) {
    tempArr = copyArr.slice(i, sliceLength);
    tempResult.push(tempArr);
    sliceLength++;

    if (sliceLength > orinalArr.length - 1 || copyArr.length === 0) {
      break;
    }
  }
  return tempResult.filter((v) => v.length > 0);
};

const method2 = (
  orinalArr: number[],
  copyArr: number[],
  sliceLength: number,
): number[][] => {
  const tempResult: number[][] = [];
  for (const [value] of orinalArr.entries()) {
    let sliceValueArr: number[] = copyArr.slice(0, sliceLength);
    tempResult.push(sliceValueArr);
  }
  return [];
};
