export class ServerManager{
 startServer(memoryAvailable: number): string{
    if(memoryAvailable < 4){
      throw new Error(`Server failed to start: Not enough memory!`);
    }
    return "Server is running smoothly!";
 }

 const myManager = new ServerManager();
}
