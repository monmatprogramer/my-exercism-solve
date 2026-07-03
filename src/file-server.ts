// File server
class FileServer{
  name: string;
  memory: number;
  state: string;
  

  constructor(serverName: string, ramAmount: number){
    this.name = serverName;
    this.memory = ramAmount;
    this.state = 'offline';
  }

  turnOn(){
    this.state = 'online';
  }

  turnOff(){
    this.state = 'offline';
  }

}

const myServer = new FileServer('My-Main-NAS',4);

myServer.turnOn();
console.log(myServer.state);
