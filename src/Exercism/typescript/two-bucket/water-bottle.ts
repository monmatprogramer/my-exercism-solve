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
    const allow: number = this.capacity - this.currentWater;
    console.log("------Infor---------------------");
    console.log("Your amount : ", amount);
    console.log("Current water: ", this.currentWater);
    console.log("Capacity: ", this.capacity + "L");
    console.log("--------------------------------\n");
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(5);
} catch (e: any) {
  console.log("💥 ", e.message);
}
