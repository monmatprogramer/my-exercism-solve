//User login
class User{
  userName:string;
  isLogin: boolean;


  constructor(username: string){
    this.userName = username;
    this.isLogin = false;
  }

  login(){
    this.isLogin = true;
  }
}

