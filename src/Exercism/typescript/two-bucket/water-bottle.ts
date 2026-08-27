class WaterBottle {
  capacity: number;
  currentWater: number;
  constructor(bottleSize: number) {
    this.capacity = bottleSize;
    this.currentWater = 0;
  }

  fill() {
    this.currentWater = this.capacity;
  }

  empty() {
    this.currentWater = 0;
  }
  addWater(amount: number) {
    let remainWater: number = 0;
    console.log("Your amount : ", amount);
    console.log("Current water: ", this.currentWater);
    console.log("Capacity: ", this.capacity + "L");
    console.log("----------------------------------\n\n");
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
        remainWater = amount + this.currentWater - this.capacity;
      }
      console.log(
        `${this.currentWater === 0 ? "The bottle is empty water" : `It remains ${remainWater}L to fill`}`,
      );
    }

    if (amount + remainWater > this.capacity) {
      console.log(`You added it only ${amount - this.currentWater}`);
      console.log(`Your bottle is full ${this.capacity}L`);
    }
    if (amount + remainWater < this.capacity) {
      this.currentWater += amount;
      console.log("Your amount: ", amount);
      console.log("Add....");
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
  waterBottle.addWater(6);
} catch (e: any) {
  console.log("💥 ", e.message);
}
