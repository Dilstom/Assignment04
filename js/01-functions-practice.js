//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

const halfNumber = (num) => {
  let result = num / 2;
  console.log(`Half of ${num} is ${result}.`);
  return result;
};

console.log(halfNumber(5));

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = (num) => {
  let result = Math.pow(num, 2);
  console.log(`The result of squaring the number ${num} is ${result}.`);
  return result;
};

console.log(squareNumber(3));

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

const percentOf = (x, y) => {
  let result = (x * 100) / y;
  console.log(`${x} is ${result}% of ${y}.`);
  return result;
};

console.log(percentOf(2, 4));

//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

const findModulus = (x, y) => {
  let result = y % x;
  console.log(`${result} is the modulus of ${x} and ${y}.`);
  return result;
};

console.log(findModulus(4, 10));

//STEP 5
// Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.

let num1 = Number(prompt("Enter the first number"));
let num2 = Number(prompt("Enter the second number"));
let num3 = Number(prompt("Enter the third number"));

function combiner(numbers) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(`The sum of three numbers is ${sum}`);
  return sum;
}
// function combiner (x, y, z) {
//     let result = arguments[0] + arguments[1] + arguments[2];
//     console.log(`The sum of three numbers is ${result}`)
//     return result;
// }

combiner(num1, num2, num3);
