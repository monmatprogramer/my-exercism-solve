//This is storage manager challeng

class MyStorageManager {
  public uploadFile(fileSize: number, availableSpace: number): string{
    if(fileSize > availableSpace){
      throw new Error('Upload failed: Not enough storage space!');
    }
    return 'File uploaded successfully!';
    
  }
}


const myStorageManager = new MyStorageManager();

try{
  const status:string = myStorageManager.uploadFile(3,3);

  console.log(status);
}catch(error: any){
  console.log(error.message);
}
