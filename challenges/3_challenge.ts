class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name
  }

  honk(): void {
    console.log("HONK HONK");
  }

  accelerate(speed: number): void {
    this.acceleration += speed
  }
}

let car2 = new Car("BMW");
car2.honk();
console.log(car2.acceleration);
car2.accelerate(10);
console.log(car2.acceleration);

abstract class BaseObject {
  width:number = 0
  length:number = 0

  constructor() {
  }
  
  abstract calcSize(): number;
}
class Rectangle extends BaseObject {

  constructor(width:number, length:number) {
    super()
    this.width = width;
    this.length = length;
  }

  calcSize(): number {
    return this.width * this.length;
  }
}
const rectangle = new Rectangle(10, 2)
console.log(rectangle.calcSize())


class Person3 {
  _firstName: string = ""

  get firstName(): string {
    return this._firstName
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value
    } else {
      this._firstName = ""
    }
  }
}
