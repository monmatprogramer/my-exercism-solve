//handshake
//secret handshake message
const shm:string[] = ['wink', 'double blink', 'close your eyes','jump'];

export function commands(input:number){
 const listBinary: number[] = convertToBinary(input); 
  console.log(listBinary);
}

function convertToBinary(decimalNum: number): number[] {
  const listBinary: number[] = [];
  while(decimalNum > 0){
    listBinary.push(decimalNum % 2);
    decimalNum = Math.floor(decimalNum / 2);
  }
  return listBinary.reverse();
}
