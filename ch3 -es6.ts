// let & const
let variable = "Test";
console.log("Test");
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;

// Block scope
function reset() {
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow Functions
console.log("ARROW FUNCTIONS")
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(10, 3))

const greet = ():void => console.log("Hello!")
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("Manu")

// DEFAULT PARAMETERS
console.log("DEFAULT PARAMETERS")
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log("Done", start)
}
countdown();
countdown(20);

// THE REST AND SPREAD OPERATORS
console.log("REST & SPREAD");
const numbers: number[] = [1, 10, 99, -5]
console.log(Math.max(99, 100, -1, 10))
console.log(Math.max(...numbers))
                    // ^ Turns array into separate objects

function makeArray(...args: number[]) { // takes in and combines a number of arguments into an array
  return args;
}
console.log(makeArray(1, 2, 6))

// using a tuple for rest expression:
function printInfo(...info: [string, number]) {
  console.log("My name is " + info[0] + " and I am " + info[1])
}

// Destructuring
console.log("DESTRUCTURING");
const myHobbies: string[] = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userInfo: { username: string, age: number } = { username: "Max", age: 27 }
const { username: aName, age: anAge } = userInfo;
console.log(aName, anAge);

// TEMPLATE LITERALS
const userName:string = "Mac";
const greeting:string = 
`Hello I'm ${userName}
This is a thing`;
console.log(greeting)