export class ServerManager{
 startServer(memoryAvailable: number): string{
    if(memoryAvailable < 4){
      throw new Error(`Server failed to start: Not enough memory!`);
    }
    return "Server is running smoothly!";
 }

}

const myManager = new ServerManager();

try{
  console.log("Attempting to start the server with 2GB...");
  const status = myManager.startServer(2);
  console.log(status);
}catch(error: any){
  console.log("Caught an error: ", error.message);
}
