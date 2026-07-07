//Prism exercise
//Create type aliase for 'start'
//Create position
// Base type
type Position = {
  x: number;
  y: number;
  angle: number;
};
type StartType = Position;

//Create type aliase for 'prisms'
type PrismsType = Position & {
  id: number;
};
export function findSequence(start: StartType, prisms: PrismsType[]): number[] {
  // list of result of poiting
  const result: number[] = [];
  //Check the light of sight
  for (const [index, value] of prisms.entries()) {
    calcuAnagle(start.x, value.x, start.y, value.y);
    // find point match
    if (calcuPointing(start.angle, value.angle)) {
      result.push(value.id);
      return result;
    }
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

// calculate pointing
function calcuPointing(an1: number, an2: number): boolean {
  if (an1 === an2) {
    return true;
  }
  return false;
}
