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
  console.log(amino);
};

try {
  translate("AUG");
} catch (e: any) {
  console.log(e.message);
}
