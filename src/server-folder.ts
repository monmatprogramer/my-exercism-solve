//Server Folder 
//Learn about array list in the class

class ServerFolder{
 folderName: string;
 files: string[];

 constructor(name: string){
  this.folderName = name;
  this.files = [];
 }
}

const sf = new ServerFolder('Working');

console.log(sf.folderName);
