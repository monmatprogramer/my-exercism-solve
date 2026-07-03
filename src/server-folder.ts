//Server Folder 
//Learn about array list in the class

class ServerFolder{
 folderName: string;
 files: string[];

 constructor(name: string){
  this.folderName = name;
  this.files = [];
 }
 
 addFile(fileName: string){
  this.files.push(fileName);
 }
  
 formatFolder(){
  this.files = [];
 }
}

const sf = new ServerFolder('Working');

sf.addFile('test.txt');
sf.formatFolder();
console.log(sf.files);
