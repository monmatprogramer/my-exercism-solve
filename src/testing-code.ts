// This is for testing code

//Use for loop
function findUniqueInArray() {
  let arr: string[] = ["a", "b", "a", "a"];
  console.log("before: ", arr);
  let i: number = 0;
  while (true) {
    for (let j: number = i + 1; j < arr.length - 1; j++) {
      if (arr[0] !== arr[j]) {
        let temp = arr[i];
        arr[0] = arr[j];
        arr[j] = temp;
      }
    }
    i++;
    if (i === arr.length) {
      break;
    }
  }

  console.log("after: ", arr[0]);
}
function findUniqueInArray2() {}
function learnSortGreek() {
  const tempResult: string[] = ["ΑΒΓ", "ΒΓΔ", "αβγ", "αβγ"];
  filterUniqueValue(tempResult);
  const anagramStr = "ΑΒΓ";
  console.log("γβα".toLowerCase());
  console.log("γβα".toUpperCase());
  console.log("ΓΒΑ".toLowerCase());
  console.log("ΓΒΑ".toUpperCase());
  const st: string = "ΓΒΑ";
  let spl: string[] = st.split("");
  let sortedSpl = spl.sort((a, b) => a.localeCompare(b));
  console.log(sortedSpl);
}

function filterUniqueValue(results: string[]) {
  results.filter((value, index, array) => {
    console.log(value);
  });
}

function checkGreekLetter() {
  const st1: string = "αβγ".toUpperCase();
  const st2: string = "γβα".toUpperCase();

  const sortSt1 = st1.split("").sort((a, b) => a.localeCompare(b));
  const sortSt2 = st2.split("").sort((a, b) => a.localeCompare(b));

  console.log(sortSt1);
  console.log(sortSt2);
}
function checkCaptitalOrNot() {
  //'ΒΓΑ', 'αβγ', 'γβα'
  const greekArr: string[] = ["ΒΓΑ", "αβγ", "γβα"];
  for (const [_, value] of greekArr.entries()) {
    if (checkCapitalLetter(value)) {
      console.log("Capital letter: ", value);
    } else {
      console.log("small Letter: ", value);
    }
  }
}
function checkCapitalLetter(value: string): boolean {
  return value === value.toUpperCase();
}
function concatenateString() {
  const st1: string = "XL";
  const st2: string = "I";
  //XLI
  const result: string = st1 + st2;
  console.log(result);
}
concatenateString();
