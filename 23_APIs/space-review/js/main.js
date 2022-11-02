//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numbers = [2, 5, 125, 42, 35, 24];
const sum = numbers.reduce((acc, c) => acc + c);
console.log(sum);


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squareNumbers = (arr) => arr.map(el => el*el);
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers);

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString('Oh my god'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const checkPalindrome = (str) => {
    return str.toLowerCase() == reverseString(str).toLowerCase();
}

console.log(checkPalindrome('Wow'));