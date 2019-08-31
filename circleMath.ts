namespace MyMath {  // Compiles into an object
  export namespace Circle {
    const PI = 3.14;  // Contained

    export function calculateCircumference(diameter: number):number {
      return diameter * PI;
    }
  }
}