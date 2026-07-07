//Prism exercise
//Create type aliase for 'start'
type StartType = {
  x: number;
  y: number;
  angle: number;
};
//Create type aliase for 'prisms'
type PrismsType = StartType[];

export function findSequence(start: StartType, prisms: PrismsType): number[] {
  //Check the light of sight
  for (const [index, value] of prisms.entries()) {
  }
  return [0, 0];
}

//Helper function
// To Fine distance

// Calcuate Angle
function calcuAnagle(x1: number, x2: number, y1: number, y2: number) {
  //PI value
  const pi: number = Math.PI;
  let angleResult: number = 0;
  //Calculate
  angleResult = Math.atan2(y2 - y1, x2 - x1) * (180 / pi);
  console.log("calcuAnagle: ", angleResult);
}
