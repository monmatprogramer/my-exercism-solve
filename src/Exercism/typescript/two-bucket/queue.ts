// Learn about queue
//

import { on } from "events";

const runQueue = () => {
  // queue
  const myQueue: number[] = [10, 20, 30];
  let currentNumber: number;
  // Remove first elment
  while (myQueue.length > 0) {
    // start Remove
    currentNumber = myQueue.shift()!;
    console.log("Current number: ", currentNumber);
  }
};

runQueue();
