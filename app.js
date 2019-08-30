"use strict";
// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Max'
// int and float are BOTH type 'number'
// boolean
var hasHobbies = true;
// hasHobbies = 1;
// assign types
// below creates a variable with type 'any', like regular JavaScript
var myRealAge;
myRealAge = 27;
myRealAge = '27';
var anotherAge;
anotherAge = 27;
// anotherAge = '27';
// array types
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// hobbies = ['A String']
// hobbies = 100;
// tuples
var address = ["Superstreet", 99];
// address = [99, "Superstreet"];
address = ["Anotherstreet", 1000];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 2 - but becomes 101 due to 100 previous
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // Outputs "100"
var anotherColor = Color.Blue;
console.log(anotherColor); // Outputs "101"
// any - use as an exception, try to be explicit (gives up typescript features/advantages)
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
// type after declaration refers to RETURN value
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void - for function with NO return value
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'))
console.log(multiply(2, 6));
// functions as types - specify arguments and return
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
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
var userDataTwo = {
    name: 'Max',
    age: 100
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
// check types
var finalValue = "A String";
if (typeof (finalValue) === "string") {
    console.log("Final Value is a string");
}
// never type
// -> functions that never return anything (as opposed to returning void)
function neverReturns() {
    throw new Error('An error!');
}
// Nullable -> lets a variable be null
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // this is undefined, not null, but CAN become null
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
