let nameTwo: string = "Max";
let ageTwo: number = 27;

let anything;
anything = 12;

// noUnusedParameters -> in tsconfig.json
function controlMe(isTrue: boolean, somethingElse: boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 33;
  return result;
}