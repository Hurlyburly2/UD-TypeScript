"use strict";
var double = function (value) {
    return value * 2;
};
console.log(double(10));
var greet2 = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
greet2();
greet2("Anna");
var moreNumbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, moreNumbers));
var newArray = [55, 20];
newArray.push.apply(newArray, moreNumbers);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = { firstName: "Will", experience: 12 };
var scientistName = scientist.firstName, scientistExperience = scientist.experience;
console.log(scientistName, scientistExperience);
