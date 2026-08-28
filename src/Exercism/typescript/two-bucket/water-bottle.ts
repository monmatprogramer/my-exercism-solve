class WaterBottle {
  capacity: number;
  currentWater: number;
  constructor(bottleSize: number) {
    this.capacity = bottleSize;
    this.currentWater = 3;
  }

  fill() {
    this.currentWater = this.capacity;
  }

  empty() {
    this.currentWater = 0;
  }
  addWater(amount: number) {
    let overflow: number = 0;
    console.log("Your amount : ", amount);
    console.log("Current water: ", this.currentWater);
    console.log("Capacity: ", this.capacity + "L");
    console.log("--------------------------------\n\n");
    if (amount === 0) {
      console.log(
        "The amount of water is empty. Please add not empty amount of water.",
      );
      return;
    }
    // Not replace the exsiting water
    if (this.currentWater !== 0) {
      console.log(`Bottle has existing water ${this.currentWater}L`);
    }
    // If it is full
    if (this.currentWater === this.capacity) {
      console.log(`The water in the bottle is full (${this.currentWater}L)`);
      return;
    }
    // This give message about remaining water
    if (this.currentWater < this.capacity) {
      if (this.currentWater !== 0) {
        overflow = amount - this.currentWater;
      }
      if (this.currentWater === 0) {
        console.log("The bottle is empty water");
      } else if (overflow < 0) {
        console.log(`Reequire ${Math.abs(overflow)}L to fill in the bottle`);
      } else {
        console.log(`overflow ${overflow}L from the bottle`);
      }
    }

    if (amount > this.capacity) {
      console.log(
        `You is allowed to add only ${this.capacity - this.currentWater} into the bottle`,
      );
      console.log(`Your bottle is full ${this.capacity}L`);
    }
    if (amount + overflow < this.capacity) {
      this.currentWater += amount;
      console.log("Start adding....");
      if (this.currentWater < this.capacity) {
        console.log(
          `You have ${this.capacity - this.currentWater} to fill it.`,
        );
      }
      console.log("current after adding the water: ", this.currentWater);
    }
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(5);
} catch (e: any) {
  console.log("💥 ", e.message);
}
