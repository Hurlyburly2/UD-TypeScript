"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { calcCircumference, PI2 } from "./math/circle"
var Circle = __importStar(require("./math/circle"));
var rectangle_1 = require("./math/rectangle");
// /// <reference path="circleMath.ts" />
// /// <reference path="rectangleMath.ts" />
// import CircleMath = MyMath.Circle;
// const PI = 2.99; // Global scope
// console.log(MyMath.calculateRectangle(10, 20))
// console.log(CircleMath.calculateCircumference(10))
// console.log(PI);
console.log("====================");
console.log(Circle.PI2);
console.log(Circle.calcCircumference(10));
console.log(rectangle_1.calculateRectangle(10, 20));
console.log("====================");
// console.log()
