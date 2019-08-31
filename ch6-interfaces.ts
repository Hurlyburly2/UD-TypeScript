interface NamedPerson {
  firstName: string;
  age?: number;    // CREATES AN OPTIONAL ARGUMENT
  [propname: string]: any;    // SAYS WE CAN HAVE LOTS OF OPTIONAL STRING KEYS 
                              // (THAT WE DON'T KNOW NAME OF)
  greet(lastName: string): void;
}

function greet3(person: NamedPerson ): void {
  console.log('Hello, ' + person.firstName)
}

function changeName(person: NamedPerson ) {
  person.firstName = "Anna"
}

const person2: NamedPerson = {
  firstName: "Max",
  age: 27,
  hobbies: ["fjsadlfj", "fjasdlfja"],
  greet(lastname: string) {
    console.log("Hi, I am " + this.firstName + " " + lastname)
  }
}

// greet3({ firstName: 'Max', age: 27, hobbies: "Something"});
greet3(person2);
changeName(person2);
greet3(person2)
person2.greet("LastName")

class Person4 implements NamedPerson {
  firstName: string = "";
  lastName: string = "";

  greet(lastName: string):void {
    console.log("Hi, I am " + this.firstName + " " + lastName);
  }
}

const myPerson = new Person4();
myPerson.firstName = "Maximillian";
myPerson.lastName = "Anything"
greet3(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "Max",
  greet(lastName: string):void {
    console.log("Hello!")
  }
}