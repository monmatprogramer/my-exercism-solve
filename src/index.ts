import { findSequence } from "./prism";
const start = { x: 0, y: 0, angle: 0 };
const prisms1 = [
  { id: 1, x: 10, y: 0, angle: 0 },
  { id: 2, x: 0, y: 10, angle: 0 },
  { id: 3, x: -10, y: 0, angle: 0 },
];
const prisms = [
  { id: 1, x: 10, y: 10, angle: 0 },
  { id: 2, x: 10, y: 0, angle: 90 },
];

console.log(findSequence(start, prisms));
