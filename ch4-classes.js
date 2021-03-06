"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name, username) {
        this.username = username;
        this.type = ""; // only accessible within the object itself
        this.age = 27; // child class has access to protected properties but NOT private
        this.name = name;
    }
    Person2.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    Person2.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person2;
}());
var person = new Person2("Max", "max");
console.log(person);
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy");
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.name = "Max";
        _this.age = 31;
        return _this;
        // console.log(this.type); // This doesn't work bc type is private
    }
    return Max;
}(Person2));
var max = new Max("max");
console.log(max);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species.toUpperCase();
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
// abstract gets overwritten in the child class
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
// let newProject = new Project;
var newProject = new ITProject;
newProject.changeName("Super IT Project");
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// forces only using one of the class
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';   // <- doesn't work b/c read only set above
