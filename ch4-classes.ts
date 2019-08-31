class Person2 {
  public name: string;
  private type: string = "";   // only accessible within the object itself
  protected age: number = 27;  // child class has access to protected properties but NOT private

  constructor(name: string, public username: string) {
    this.name = name;
  }
  
  public printAge() {
    console.log(this.age);
    this.setType("Old Guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type)
  }
}

const person = new Person2("Max", "max")
console.log(person);
console.log(person.name, person.username)
person.printAge();
// person.setType("Cool guy");

// Inheritance
class Max extends Person2 {
  name = "Max";

  constructor (username: string) {
    super("Max", username)
    this.age = 31;
    // console.log(this.type); // This doesn't work bc type is private
  }
}
const max = new Max("max");
console.log(max);

// Getters & Setters
class Plant {
  private _species: string = "";

  get species(): string {
    return this._species.toUpperCase();
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}
let plant = new Plant()
console.log(plant.species)
plant.species = "AB";
console.log(plant.species)
plant.species = "Green Plant";
console.log(plant.species)

// Static Properties & Methods
class Helpers {
  public static PI: number = 3.14;
  static calcCircumference(diameter: number):number {
    return this.PI * diameter
  }
}
console.log(2 * Helpers.PI)
console.log(Helpers.calcCircumference(8))

// Abstract Classes
abstract class Project {
  projectName: string = "Default"
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}
// abstract gets overwritten in the child class

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

// let newProject = new Project;
let newProject = new ITProject;
newProject.changeName("Super IT Project");
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}
// forces only using one of the class

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name)
// right.name = 'Something else';   // <- doesn't work b/c read only set above