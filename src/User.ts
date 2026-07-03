//User login
class User{
  userName:string;
  isLogin: boolean;
  //add login history
  loginHistory: string[];

  constructor(username: string){
    this.userName = username;
    this.isLogin = false;
    this.loginHistory = [];
  }
  //Login
  login(){
    if(this.isLogin === true){
      throw new Error("User is already logged in");
    }
    
    this.isLogin = true;
    this.loginHistory.push('Logged in');
  }
  //Logout
  logout(){
    this.isLogin = false;
    this.loginHistory = [];
  }

}

const userLogin = new User('monmat');

try{
  userLogin.login();
  console.log(userLogin.isLogin);
}catch(error: any){
  console.log(error.message);
}
console.log(userLogin.loginHistory);
userLogin.logout();
console.log(userLogin.loginHistory);
