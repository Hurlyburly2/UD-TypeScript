// string
let myName: string = 'Max';
// myName = 28;

// number
let myAge: number = 27; 
// myAge = 'Max'
// int and float are BOTH type 'number'

// boolean
let hasHobbies: boolean = true;
// hasHobbies = 1;

// assign types
// below creates a variable with type 'any', like regular JavaScript
let myRealAge;
myRealAge = 27;
myRealAge = '27';

let anotherAge: number;
anotherAge = 27;
// anotherAge = '27';

// array types
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = [100]
// hobbies = ['A String']
// hobbies = 100;

// tuples
let address: [string, number] = ["Superstreet", 99];
// address = [99, "Superstreet"];
address = ["Anotherstreet", 1000]

// enums
enum Color {  // In JS, these compile to #'s
  Gray,   // 0
  Green = 100,  // 1 - but set to 100
  Blue    // 2 - but becomes 101 due to 100 previous
}
let myColor: Color = Color.Green;
console.log(myColor); // Outputs "100"
let anotherColor: Color = Color.Blue;
console.log(anotherColor) // Outputs "101"

// any - use as an exception, try to be explicit (gives up typescript features/advantages)
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 }
console.log(car);

// functions
// type after declaration refers to RETURN value
function returnMyName(): string { 
  return myName;
}
console.log(returnMyName())

// void - for function with NO return value
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(2, 'Max'))
console.log(multiply(2, 6))

// functions as types - specify arguments and return
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2))

// objects
let userData = {
  name: "Max",
  age: 27
};
// typescript infers userData is an object with name: string, age: number
// userData = {};
// the names of the keys DO matter
// userData = {
//   a: "Hello",
//   b: 22
// }
let userDataTwo: { name: string, age: number } = {
  name: 'Max',
  age: 100
}

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// type alias
type Complex = { data: number[], output: (all: boolean) => number[] }
let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = true;

// check types
let finalValue = "A String";
if (typeof(finalValue) === "string") {
  console.log("Final Value is a string")
}

// never type
  // -> functions that never return anything (as opposed to returning void)
function neverReturns(): never {
  throw new Error('An error!');
}

// Nullable -> lets a variable be null
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;    // this is undefined, not null, but CAN become null
canAlsoBeNull = null;
let canThisBeAny = null;
canThisBeAny = 12;