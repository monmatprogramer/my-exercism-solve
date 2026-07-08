//Prism exercises
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
  // For move laser
  const moveLaser: PrismsType[] = [];
  let c: number = 0;
  while (c < prisms.length) {
    //Check the light of sight
    for (const [index, value] of prisms.entries()) {
      const primAngle: number = calcuAnagle(start.x, value.x, start.y, value.y);
      // valid hit
      if (primAngle === start.angle) {
        result.push(value.id);
      }
      // laser moves
      //start = updateLaser(start, value.x, value.y, value.angle);
    }
    prisms.shift();
    start = updateLaser(start, prisms[c].x, prisms[c].y, prisms[c].angle);
    console.log("👉 start: ", start);
    c++;
  }
  return result;
}

//Helper function
// Update laser
function updateLaser(
  laser: StartType,
  px: number,
  pv: number,
  pa: number,
): StartType {
  laser.x = px;
  laser.y = pv;
  laser.angle = laser.angle + pa;
  return laser;
}
// To Fine distance
function calcuDistance(x1: number, x2: number, y1: number, y2: number): number {
  const disResult: number = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2),
  );
  return disResult;
}
// Calcuate Angle
function calcuAnagle(x1: number, x2: number, y1: number, y2: number): number {
  console.log(`start: ${x1},${y1}`);
  //PI value
  const pi: number = Math.PI;
  let angleResult: number = 0;
  //Calculate
  angleResult = Math.atan2(y2 - y1, x2 - x1) * (180 / pi);
  console.log("calcuAnagle: ", angleResult);
  return angleResult;
}

// calculate pointing
function calcuPointing(an1: number, an2: number): boolean {
  if (an1 === an2) {
    return true;
  }
  return false;
}
