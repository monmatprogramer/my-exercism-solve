//handshake
export function commands(input:number){
  //Create an empty list[]
  const list:string[] = [];
  if(input === 1){
   // add wink
    list.push('wink');
    return list;
  }else if(input === 2){
    // add double blink
    list.push('double blink');
    return list;
  }else if(input === 4){
    list.push('close your eyes');
    return list;
  }else if(input === 8){
    list.push('jump');
    return list;
  }else if(input === 16){
    list.reverse();
    return list;
  }else{
    return list;
  }
}
