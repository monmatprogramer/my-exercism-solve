//dart exercise

export function score(x: number, y: number): number {
  // calculate coordinates
    // layer of darts
  const circles: number[] = [0,1, 5, 10];
  // coordinates
  const mX: number = x**2; //m = multiply number
  const mY:number = y**2;
  //calculate coordinates
  const sum: number = mX + mY;
  // find root
  const di: number = Math.sqrt(sum);
  // check distance
  // di = distance
  if(di <= 1){
    return circles[circles.length-1];
  }else if(di <= 5){
    return circles[circles.length-2];
  }else if (di <= 10){
    return circles[circles.length-3];
  }
  return circles[circles.length-4];
}
