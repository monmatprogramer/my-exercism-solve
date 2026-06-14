
// DNA list
const dnaList:string[] = ['G','C','T','A'];
// RNA list
const rda: string[] = ['C', 'G', 'A','U'];



export function toRna(dnaInput:string) {
  // Create a empty RNA result 
  let rnaResult: string[]=[];

  if(!checkValidDNA(dnaInput)){
    throw new Error('Invalid input DNA.');
  }

  const dnaArray: string[] = [...dnaInput.toLocaleUpperCase()];
 return matchWithRna(readDna(dnaArray), rnaResult);
}
// Check validation DNA input
function checkValidDNA(dnaInput: string): boolean{
  //False = invalid
  //True = valid
  if(dnaInput === "") return false;
  const lenDnaInput:number = dnaInput.length;
  if(lenDnaInput===1){ 
    //Assum 1: danInput = C
    return dnaList.includes(dnaInput.toLocaleUpperCase());
  }else{  
    //Assum 2: danInpput = CGCCA
    // Convert to set for checking validation
    const dnaSet:Set<string> = new Set(dnaInput.toLocaleUpperCase());
    let flag:boolean = true;
    // Take DNA set to check validate
    for(const [index,value] of dnaSet.entries()){
      if(!dnaList.includes(value)){
        flag = false;
        break;
      }
    }
    return flag;
  }
   // if(dnaInput === rda.){}
  return true;
}


function readDna(validDnaArr: string[]):number[]{
  let dnaIndex: number[]=[];
  // sigle DNA
  if(validDnaArr.length < 2 && validDnaArr.length > 0 ){
    dnaIndex.push(dnaList.indexOf(validDnaArr[validDnaArr.length - 1]));
    return dnaIndex;
  }else{
     // Multi DNA
    for(const [index,value] of validDnaArr.entries()){
      dnaIndex.push(dnaList.indexOf(value)); 
    }
    return dnaIndex;
  }

 }

 function matchWithRna(dnaInputNum: number[], resultRna: string[]):string{
    for(const[index, value] of dnaInputNum.entries()){
      resultRna.push(rda[value]);
    } 
  return resultRna.join(""); 
 }
