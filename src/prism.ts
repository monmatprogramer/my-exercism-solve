type Point = {
  x: number;
  y: number;
  angle: number;
};
type Prism = {
  id: number;
  x: number;
  y: number;
  angle: number;
};

export function findSequence(start: Point, prisms: Prism[]): number[] {
  const sequence: number[] = [];

  let laserX = start.x;
  let laserY = start.y;
  let laserAngle = start.angle;

  while (true) {
    let closestPrism: Prism | null = null;
    let shortestDistance = Infinity;

    for (const prism of prisms) {
      const dx = prism.x - laserX;
      const dy = prism.y - laserY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 0.1) {
        continue;
      }

      const angleToPrim = Math.atan2(dy, dx) * (180 / Math.PI);

      let diff = (angleToPrim - laserAngle) % 360;

      if (diff < -180) diff += 360;
      if (diff > 180) diff -= 360;

      const isPointingAtPrism = Math.abs(diff) < 0.1;

      if (isPointingAtPrism && distance < shortestDistance) {
        shortestDistance = distance;
        closestPrism = prism;
      }
    }
    if (closestPrism !== null) {
      sequence.push(closestPrism.id);
      laserX = closestPrism.x;
      laserY = closestPrism.y;

      laserAngle = laserAngle + closestPrism.angle;
    } else {
      break;
    }
  }
  return sequence;
}
