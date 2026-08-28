// State type
type State = {
  bucketOne: number;
  bucketTwo: number;
  moves: number;
};
export class TwoBucket {
  constructor(
    buckOne: number,
    buckTwo: number,
    goal: number,
    starterBank: string,
  ) {
    console.log("buckOne: ", buckOne);
  }

  moves() {
    throw new Error("Remove this line and implement the function");
  }

  get goalBucket() {
    throw new Error("Remove this line and implement the function");
  }

  get otherBucket() {
    throw new Error("Remove this line and implement the function");
  }
}
