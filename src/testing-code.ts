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
  return;
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

findUniqueInArray();
