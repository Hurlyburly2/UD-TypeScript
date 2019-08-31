"use strict";
function greet3(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person2 = {
    firstName: "Max",
    age: 27,
    hobbies: ["fjsadlfj", "fjasdlfja"],
    greet: function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};
// greet3({ firstName: 'Max', age: 27, hobbies: "Something"});
greet3(person2);
changeName(person2);
greet3(person2);
person2.greet("LastName");
var Person4 = /** @class */ (function () {
    function Person4() {
        this.firstName = "";
        this.lastName = "";
    }
    Person4.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person4;
}());
var myPerson = new Person4();
myPerson.firstName = "Maximillian";
myPerson.lastName = "Anything";
greet3(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello!");
    }
};
