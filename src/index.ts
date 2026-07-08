import { findSequence } from "./prism";
const start = { x: 0, y: 0, angle: 0 };
const prisms = [
  { id: 2, x: 10, y: 0, angle: 0 },
  { id: 1, x: 20, y: 0, angle: -180 },
];
console.log(findSequence(start, prisms));
