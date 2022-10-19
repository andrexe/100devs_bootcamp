// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'Christmas';
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let instructor = 'Leon Noel';
// alert(instructor.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const subtractFromTotal = (total, ...arr) => {
    return Math.abs(arr.reduce((acc, curr) => acc - curr, total))
}
// alert(subtractFromTotal(100, 10, 10, 90, 10, 10));


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const minAndMax = (...arr) => {
    console.log(`Min is ${Math.min(...arr)}\nMax is ${Math.max(...arr)}`);
}
minAndMax(27, 32, 55);


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
const coinFlip = () => Math.random() < 0.5 ? 'Heads' : 'Tails'
console.log(coinFlip());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const coinFlips = (x) => {
    for (let i = 1; i <= x; i++) {
        console.log(`Flip ${i}: ${coinFlip()}`);
    }
}
coinFlips(5);