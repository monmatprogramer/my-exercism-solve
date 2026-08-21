// This is for testing code

function learnSortGreek() {
  const tempResult: string[] = ["ΑΒΓ", "ΒΓΔ", "αβγ", "αβγ"];
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

learnSortGreek();
