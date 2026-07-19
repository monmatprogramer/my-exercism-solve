// Amino Acid Dictionary

// It is a standard js object type
type AminoAcidType = {
  [key: string]: string;
};

// It is a standard js object
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

  // rna less than 3 and not in the list
  if (rna.length < 3) {
    //not 3 letters long
    throw new Error("Invalid codon");
  }

  // Break it into 3
  const threeRna: string[] = breakToThree(rna);

  if (!isValidRna(aminoDic, rna)) {
    //not 3 letters long
    throw new Error("Invalid codon");
  }

  return [];
}
// Break long rna to 3
const breakToThree = (rna: string): string[] => {
  const threeRnaGroup: string[] = [];
  for (let i: number = 0; i < rna.length; i += 3) {
    threeRnaGroup.push(rna.slice(i, i + 3));
  }
  return threeRnaGroup;
};
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
  const rex = /^[ACGU]+$/i;
  // test false is not valid
  if (condonRnaDic.has(rnaInput) && rex.test(rnaInput)) {
    return true;
  }
  return false;
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
  //let d: string[] = translate("UUCUUCUAAUGGU");
  console.log(d);
} catch (e: any) {
  console.log(e.message);
}
