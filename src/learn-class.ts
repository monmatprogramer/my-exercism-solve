class User{
  constructor(private _firstName:string, private _lastName:string){
    this.greeting();
  }
  
  get firstName(){
    return this._firstName;
  }

  get lastName(){
    return this._lastName;
  }

  greeting(){
    console.log(`Nice to see you, ${this.firstName} ${this.lastName}`);
  }
}

const user = new User("Mat", "Mon");

