let double = (value: number): number => {
  return value * 2;
}
console.log(double(10));

const greet2 = (name: string = "Max"): void => {
  console.log("Hello, " + name);
}
greet2();
greet2("Anna");

var moreNumbers: number[] = [-3, 33, 38, 5]
console.log(Math.min(...moreNumbers));

var newArray = [55, 20]
newArray.push(...moreNumbers)
console.log(newArray)

const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3)

const scientist: { firstName: string, experience: number } = { firstName: "Will", experience: 12 }
const { firstName: scientistName, experience: scientistExperience } = scientist
console.log(scientistName, scientistExperience)