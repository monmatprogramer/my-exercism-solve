//User login
class User{
  userName:string;
  isLogin: boolean;


  constructor(username: string){
    this.userName = username;
    this.isLogin = true;
  }

  login(){
    if(this.isLogin === true){
      throw new Error("User is already logged in");
    }
    this.isLogin = true;
  }
}

const userLogin = new User('monmat');

try{
  userLogin.login();
  console.log(userLogin.isLogin);
}catch(error: any){
  console.log(error.message);
}

