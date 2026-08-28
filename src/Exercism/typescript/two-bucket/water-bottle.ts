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
        overflow = amount - allow;
      }
      if (this.currentWater === 0) {
        console.log("The bottle is empty water");
      } else if (overflow < 0) {
        console.log(`Reequire ${Math.abs(overflow)}L to fill in the bottle`);
      } else {
        console.log(`The overflow ${overflow}L from the bottle`);
      }
    }

    if (allow > 0) {
      console.log(
        `You is allowed to add only ${this.capacity - this.currentWater} into the bottle`,
      );
    }
    if (allow < this.capacity) {
      this.currentWater += allow;
      console.log(`Start adding ${allow}L....`);
      if (this.currentWater < this.capacity) {
        console.log(
          `You have ${this.capacity - this.currentWater} to fill it.`,
        );
      }
      console.log("current after adding the water: ", this.currentWater);
    }
    console.log("----------End adding water---------");
  }
}

const waterBottle = new WaterBottle(5);

try {
  waterBottle.addWater(5);
} catch (e: any) {
  console.log("💥 ", e.message);
}
