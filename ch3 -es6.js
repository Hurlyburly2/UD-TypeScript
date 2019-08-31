"use strict";
// let & const
var variable = "Test";
console.log("Test");
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () { return console.log("Hello!"); };
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
// DEFAULT PARAMETERS
console.log("DEFAULT PARAMETERS");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
countdown(20);
// THE REST AND SPREAD OPERATORS
console.log("REST & SPREAD");
var numbers = [1, 10, 99, -5];
console.log(Math.max(99, 100, -1, 10));
console.log(Math.max.apply(Math, numbers));
// ^ Turns array into separate objects
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// using a tuple for rest expression:
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("My name is " + info[0] + " and I am " + info[1]);
}
// Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userInfo = { username: "Max", age: 27 };
var aName = userInfo.username, anAge = userInfo.age;
console.log(aName, anAge);
// TEMPLATE LITERALS
var userName = "Mac";
var greeting = "Hello I'm " + userName + "\nThis is a thing";
console.log(greeting);
