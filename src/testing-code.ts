// This is for testing code

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
  results.filter((value, index, array) => console.log("index: ", index));
}
learnSortGreek();
