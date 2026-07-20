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
  // RNA input = 3
  if (rna.length === 3) {
    // check validation here
    if (!isValidRna(aminoDic, rna)) {
      throw new Error("Invalid codon");
    }
  }

  // Break it into 3
  const threeRna: string[] = breakToThree(rna);

  if (!isValidRna(aminoDic, threeRna)) {
    //not 3 letters long
    throw new Error("Invalid codon");
  }
  // Stop condition
  if (isStop(aminoDic, threeRna)) {
    return [];
  }
  //Check if stop and value live together

  const result: string[] = filterRanValue(aminoDic, threeRna);
  return result;
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
  rnaInput: string | string[],
): boolean => {
  // Check existing key
  // true: exist
  const rex = /^[ACGU]+$/i;
  // test false is not valid
  if (typeof rnaInput === "string") {
    if (condonRnaDic.has(rnaInput) && rex.test(rnaInput)) {
      return true;
    }
  } else {
    //LOOP here
    for (const el of rnaInput) {
      return condonRnaDic.has(el) && rex.test(el);
    }
  }
  return false;
};
// Check value of RNA
const filterRanValue = (
  cdd: Map<string, string>,
  rnaInput: string[],
): string[] => {
  const rnaValueArr: string[] = [];
  const lenOfRnaInput: number = rnaInput.length;
  if (lenOfRnaInput < 2 && lenOfRnaInput > 0) {
    if (cdd.get(rnaInput[0])! === "STOP") {
      return [];
    }
    rnaValueArr.push(cdd.get(rnaInput[0])!);
  } else console.log("length > 2");
  let tempArry: string[] = [];

  for (let i: number = 0; i <= rnaInput.length - 1; i++) {
    if (cdd.get(rnaInput[i + 1]) !== "STOP") {
      let key: string = rnaInput[i];
      let value: string = cdd.get(key)!;
      tempArry.push(value);
    } else {
      tempArry.push(cdd.get(rnaInput[i])!);
      break;
    }
  }
  rnaValueArr.push(...tempArry);

  /* 
  for (const v of rnaInput) {
    if (cdd.get(v) !== "STOP") {
      rnaValueArr.push(cdd.get(v)!);
    }

  }*/
  if (rnaInput[0] === rnaInput[1]) {
    return rnaValueArr;
  } else if (
    rnaInput.length < 3 &&
    cdd.get(rnaInput[0])! === cdd.get(rnaInput[1])!
  ) {
    return rnaValueArr;
  }
  const uniqueArray: string[] = [...new Set(rnaValueArr)];

  return uniqueArray.filter((n) => n !== "STOP");
};
// Check stop rule
const isStop = (
  cdd: Map<string, string>, //cdd = codon dictionary
  rnaInput: string | string[],
): boolean => {
  // true: stop
  if (typeof rnaInput === "string") {
    if (cdd.get(rnaInput) === "STOP") {
      return true;
    }
  } else {
    const getValue: boolean[] = rnaInput.map((n) => cdd.get(n) === "STOP");
    //FOR STOP condiction
    if (getValue.length === getValue.filter((n) => n === true).length) {
      return true;
    }
    //First index is stop
    if (getValue[0]) {
      return true;
    }
  }
  return false;
};

try {
  //let d: string[] = translate("UUCUUCUAAUGGU");
  let d: string[] = translate("UGGUGUUAUUAAUGGUUU");
  console.log(d);
} catch (e: any) {
  console.log(e.message);
}
