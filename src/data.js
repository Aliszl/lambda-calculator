// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
console.log(numbers);

export const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];
console.log(operators);


export const specials = ["C", "+/-", "%"];

console.log(specials);
// const addNums = (num1=0,num2=0)=> num1 + num2;

// console.log(addNums(5,5));

// const subtractNums = (num1=0,num2=0)=> num1 - num2;

// console.log(subtractNums(5,5));

// const multiplyNums = (num1=0,num2=0)=> num1 * num2;

// console.log(multiplyNums(5,5));

// const divideNums = (num1=0,num2=0)=> num1 / num2;

// console.log(divideNums(5,5));