//handshake
export function commands(input:number){
  //Create an empty list[]
  const list:string[] = [];
  if(input === 1){
   // add wink
    list.push('wink');
  }else if(input === 2){
    // add double blink
    list.push('double blink');
  }else if(input === 4){
    list.push('close your eyes');
  }else if(input === 8){
    list.push('jump');
  }else if(input === 16){
    list.reverse();
  }else{
    return list;
  }
}
