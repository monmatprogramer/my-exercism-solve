// Amino Acid Dictionary
type AminoAcidType = {
  [key: string]: string;
};

const aminoAcideObj: AminoAcidType = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export function translate(rna: string) {
  if (rna.length < 3) {
    //not 3 letters long
    throw new Error("Invalid condon");
  }
  convertToMap(aminoAcideObj);
  return;
}
// Convert it into Map
const convertToMap = (amino: AminoAcidType) => {
  // first amino is a standard js object
  const rnaCodonLists: Map<string, string> = new Map<string, string>();
  // Read it from a amino and insert into new map
  for (const [cordonName, rnaName] of Object.entries(amino)) {
    rnaCodonLists.set(cordonName, rnaName);
  }
  console.log(rnaCodonLists);
};

try {
  translate("AUG");
} catch (e: any) {
  console.log(e.message);
}
