//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
const calcProduct = (arr) => arr.reduce((prev, curr) => prev * curr);
console.log(calcProduct([1,2,3,4,5]))