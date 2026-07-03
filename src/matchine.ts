//Learn machine
class Machine{
  power: boolean;

  constructor(){
    this.power = false;
  }
  
  turnOn(){
    if(this.power === true){
      throw new Error('The machine is already on!');
    }
    this.power = true;
  }
}

const m = new Machine();

console.log(m.power);
