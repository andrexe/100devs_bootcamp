// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let a = true;
alert(a);

// Declare a variable, reassign it to your favorite color, and console log the value

let color;
color = 'green';
console.log(color);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

const sumThreeDivFour = (n1, n2, n3, n4) => (n1 + n2 + n3) / n4;
console.log(sumThreeDivFour(2, 3, 4, 3));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

const logPower = (n1, n2) => console.log(n1 ** n2);
logPower(2, 3);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

const conditionalAlertOrLog = (bool, str) => bool ? alert(str) : console.log(str);
conditionalAlertOrLog(false, 'hello');


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

const fizzBuzz = (n) => {
    return Array.from({ length: n }, (_, i) => i + 1).map((el) => {
        let result = '';
        if (el % 3 == 0) result += 'fizz';
        if (el % 5 == 0) result += 'buzz';
        if (result == '') result = el;
        return result;
    })
}

console.log(fizzBuzz(15));