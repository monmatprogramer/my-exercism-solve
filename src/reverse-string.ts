// reverse string
export function reverse(normalStr: string): string {
  const reversedStr: string[] = [];
  if (normalStr.length < 0) {
    return "";
  } else {
    const normalStrArr: string[] = normalStr.split("");
    const len: number = normalStrArr.length - 1;
    for (let i: number = len; i >= 0; i--) {
      reversedStr.push(normalStrArr[i]);
    }
  }
  return reversedStr.join("");
}

console.log(reverse("reward"));
