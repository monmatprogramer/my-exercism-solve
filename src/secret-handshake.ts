//handshake
//secret handshake message
const shm:string[] = ['wink', 'double blink', 'close your eyes','jump'];

export function commands(input:number){
 const listBinary: number[] = convertToBinary(input); 
 const ir: boolean = isReverse(listBinary);
 if(ir){
 //for reverse
  createSecret(listBinary);
 }else{
  //for not reverse
 }
}

//Reverse function
function createSecret(lb:number[]): string[] {
  //length
  const len: number = lb.length

  //Skip first digit because it show only reverse, not value
  for(let i: number = len - 1; i > 0 ;i--){
    console.log(lb[i]);
  }

  return [''];
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
