//Learn about "function are first-class citizens"

// ------------------
// Store value of function
const greet = function(){
  console.log('Hello');
}

console.log(greet);

//Call the value
greet();

// -------------------
// Pass a fun as argument
function execute(action: () => void){
  action();
}

function greet1(){
  console.log('Hello world');
}


execute(greet1);

// ---------------------
// return a fun from another function
function createGreeting(){
  return function(){
    console.log('Hello!');
  }
}

const greet2 = createGreeting();

greet2();

// ---------------------
// Store function in arrays
const tasks = [
  () => console.log('Task 1'),
    () => console.log('Task 2'),
    () => console.log('Task 3')
];
tasks[0]();

// ----------------------
// Store functions in objects
const calculator = {
  add(a: number , b: number){
    return a + b;
  },
  subtract(a: number, b: number){
    return a + b;
  }
}

console.log(calculator.add(2,3));
