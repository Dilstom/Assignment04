// IMPORT THE MODULE
import * as calc from './modules/calculator.js'

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let x, y, operation;
let flag = false;
do {
    flag = false;
    x = Number(prompt("Enter your first number"));
    y = Number(prompt("Enter your second number"));
    operation = prompt("Enter operation");
    if(isNaN(x) || isNaN(y)){
        alert('Please enter the valid numbers');
        flag = true;
    } else if( operation != '-' && operation != '+' && operation != '/' && operation != '*' ) {
        alert('Please enter the right operation: + - / *');
        flag = true;
    }
}while(flag)



// CHECK TO SEE WHAT OPERATION THEY'RE USING
// console.log('operation: ', operation)
// CALL THE APPROPRIATE FUNCTION


switch(operation){
    case '+':
        alert(`The sum of ${x} and ${y} is ${calc.add(x, y)}`);
        break;
    case '-':
        alert(`The difference of ${x} and ${y} is ${calc.substract(x, y)}`);
        break;
    case '/':
       alert(`The quotient of ${x} and ${y} is ${calc.divide(x, y)}`);
        break;
    case '*':
        alert(`The product of ${x} and ${y} is ${calc.multipy(x, y)}`);
        break;
    default:
        alert('Ops, something went wrong!')   
}