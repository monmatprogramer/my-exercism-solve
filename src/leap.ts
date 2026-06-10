export function isLeap(leapYear: number): boolean {
 if((leapYear % 4) === 0){
  if((leapYear % 100) === 0){
    if((leapYear % 400) === 0){
      return true;
    }else{
      return false;
    }
  }else{
    return true;
  }
 }else{
  return true;
 }
}



export function test(leapYear:number): boolean{
  if((leapYear % 4 === 0 && leapYear % 100 !== 0) || (leapYear % 400 === 0)){
    return true;
  }

  return false;

}
