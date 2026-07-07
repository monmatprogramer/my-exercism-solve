import { findSequence } from "./prism";
const start = { x: 0, y: 0, angle: 0 };
const prisms: { id: number; x: number; y: number; angle: number }[] = [];
console.log(findSequence(start, prisms));
