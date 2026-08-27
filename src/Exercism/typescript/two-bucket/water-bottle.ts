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
    }
    if (this.currentWater < this.capacity) {
      console.log(`It remains ${this.capacity - this.currentWater}L to fill`);
    }
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(6);
} catch (e: any) {
  console.log("💥 ", e.message);
}
