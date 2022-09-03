// *Variables*
// Create a variable and console log the value

let a = 5;
console.log(a);

// Create a variable, add 10 to it, and alert the value

let b = 10;
b += 10;
alert(b);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

let subtractFour = (a, b, c, d) => alert(a - b - c - d);
subtractFour(10, 4, 3, 2);

// Create a function that divides one number by another and returns the remainder

let remainder = (a, b) => a % b;
console.log(remainder(8, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

let jumanji = (a, b) => { if (a + b > 50) { alert('Jumanji') } }

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let productDivByThree = (a, b, c) => {
    if (a * b * c % 3 === 0) { alert('Zebra') }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

let repeatedLog = (text, times) => {
    for (let i = 0; i < times; i++) {
        console.log(text)
    }
}
