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
    const totalWater: number = this.currentWater + amount;
    console.log("------Infor---------------------");
    console.log("Your amount : ", amount);
    console.log("Current water: ", this.currentWater);
    console.log("Capacity: ", this.capacity + "L");
    console.log("--------------------------------\n");
    if (totalWater > this.capacity) {
      console.log("Overflow");
      this.currentWater = this.capacity;
    } else {
      this.currentWater = totalWater;
    }
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(5);
} catch (e: any) {
  console.log("💥 ", e.message);
}
