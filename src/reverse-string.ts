// reverse string
export function reverse(normalStr: string): string {
  const reversedStr: string[] = [];
  if (normalStr.length < 0) {
    return "";
  } else {
    const normalStrArr: string[] = normalStr.split("");
    const len: number = normalStrArr.length - 1;
    console.log(len);
    for (let i: number = 5; i <= 0; i--) {
      console.log(normalStrArr[i]);
      console.log(i);
    }

    console.log(reversedStr);
  }
  return reversedStr.join("");
}

console.log(reverse("reward"));
