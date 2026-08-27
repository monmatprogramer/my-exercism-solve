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
    // Not replace the exsiting water
    if (this.currentWater !== 0) {
      console.log(`Bottle has existing water ${this.currentWater}L`);
      if (this.currentWater < this.capacity) {
        console.log(`It remains ${this.capacity - this.currentWater}L to fill`);
      }
    }
    // Not stop program when meet condtion
    if (amount > this.capacity)
      throw new Error("Cannot overflow because your amoount is " + amount);
    if (amount === 0) throw new Error("It is empty amount of water to add");
    this.currentWater = amount;
    console.log("currentWater: ", this.currentWater);
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(6);
} catch (e: any) {
  console.log("💥 ", e.message);
}
