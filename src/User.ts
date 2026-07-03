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

const user = new User('monmat');

user.login();
console.log(user.isLogin);
