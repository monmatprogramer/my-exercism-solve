//Learn machine
class Machine{
  power: boolean;

  constructor(){
    this.power = true;
  }
  
  turnOn(){
    if(this.power === true){
      throw new Error('The machine is already on!');
    }
    this.power = true;
  }
}

const m = new Machine();

try{
  m.turnOn();
  console.log(m.power);
}catch(error: any){
  console.log(`The error is ${error.message}`);
}
