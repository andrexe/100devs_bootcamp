//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const randomNumbers = (n, max) => Array(n).fill(0).map(e => Math.floor(Math.random() * max))

const random5 = randomNumbers(5, 100);

console.log(random5);
const sum = random5.reduce((acc, c) => +acc + +c, 0);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const squareElements = (arr) => arr.map((e) => e ** 2);
const squared5 = squareElements(random5);
console.log(squared5);

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('testing string'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkPalindrome = (str) => str.toLowerCase() == reverseString(str).toLowerCase();
console.log(checkPalindrome('Eye'));