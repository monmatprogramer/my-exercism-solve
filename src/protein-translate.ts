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

export function translate(rna: string): string[] {
  // amino dictionary
  const aminoDic: Map<string, string> = convertToMap(aminoAcideObj);
  // Stop condition
  if (isStop(aminoDic, rna)) {
    return [];
  }
  if (rna.length < 3 || !isValidRna(aminoDic, rna)) {
    //not 3 letters long
    throw new Error("Invalid codon");
  }

  return [];
}
// Convert it into Map
const convertToMap = (amino: AminoAcidType): Map<string, string> => {
  // first amino is a standard js object
  const rnaCodonLists: Map<string, string> = new Map<string, string>();
  // Read it from a amino and insert into new map
  for (const [cordonName, rnaName] of Object.entries(amino)) {
    // insert into map
    rnaCodonLists.set(cordonName, rnaName);
  }
  return rnaCodonLists;
};
// finding the validation of rna
const isValidRna = (
  condonRnaDic: Map<string, string>,
  rnaInput: string,
): boolean => {
  // Check existing key
  // true: exist
  return condonRnaDic.has(rnaInput);
};
// Check stop rule
const isStop = (
  cdd: Map<string, string>, //cdd = codon dictionary
  rnaInput: string,
): boolean => {
  // true: stop
  if (cdd.get(rnaInput) === "STOP") {
    return true;
  }
  return false;
};

try {
  let d: string[] = translate("UGA");
  console.log(d);
} catch (e: any) {
  console.log(e.message);
}
