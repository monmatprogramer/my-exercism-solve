//handshake
//secret handshake message
const shm:string[] = ['wink', 'double blink', 'close your eyes','jump'];

export function commands(input:number): string[] {
 const listBinary: number[] = convertToBinary(input); 
 const ir: boolean = isReverse(listBinary);
 if(ir){
 //for reverse
  return createSecretReverse(listBinary);
 }else{
  //for not reverse
  return createSecretNotReverse(listBinary);
  //return [];
 }
}

//Reverse function
function createSecretReverse(lb:number[]): string[] {
  //Remove the first digit
  lb.shift();
  //length
  const len: number = lb.length
  //list of secret message
  const sm:string[] = [];
  //Reverse shm for matching with sm array
  const rsmh: string[] = shm.reverse();

  //generate secret
  for(let i: number = len - 1; i >= 0 ;i--){
    if(lb[i] === 1){
      sm.push(rsmh[i]);
    }
  }
  
  return sm.length > 0 ? sm.reverse() : sm;
}
function createSecretNotReverse(lb: number[]): string[]{
  const isAllTrue:boolean = isTrueFourDigit(lb);
  const finalResult: string[] = [];
  if(isAllTrue){
    return shm;
  }else{
    let t = lb;
    t.reverse();
    for(let i:number = 0; i < t.length; i++){
      if(t[i] === 1){
        finalResult.push(shm[i]);
      }
    } 
    return finalResult;
  }
}
// This function to check four digit only 
function isTrueFourDigit(lb: number[] ): boolean{
  const checkFalse = lb.map((v) => v === 1).includes(false);
  return (lb.length === 4) && (checkFalse === false) ? true: false;
}

function isReverse(lb: number[]): boolean{
  //ture : reverse 
  //false: not reverse
  
  //total length
  const len: number = lb.length;

  //first digit
  const fd: number = lb[0];
  const result: boolean = (len === 5) && (fd === 1) ? true : false;
  return result;
}

function convertToBinary(decimalNum: number): number[] {
  const listBinary: number[] = [];
  while(decimalNum > 0){
    listBinary.push(decimalNum % 2);
    decimalNum = Math.floor(decimalNum / 2);
  }
  return listBinary.reverse();
}
