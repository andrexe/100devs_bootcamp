//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const shows = ['Community', 'Breaking Bad', 'Mr Robot']
shows.forEach(el => console.log(el))


//Create and array of numbers

let generateNumbers = (n, max) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * max) + 1)
    }
    return arr
}

const numbers = generateNumbers(10, 100);

console.log(numbers);

//Return a new array of numbers that includes every even number from the previous Arrays

const evenNumbers = numbers.filter((el) => el % 2 == 0)
console.log(evenNumbers);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

const sumOfSeconds = (arr) => {
    let result = arr.filter((el) => el != Math.max(...arr) && el != Math.min(...arr));
    result = Math.min(...result) + Math.max(...result);
    return result;
}
console.log(sumOfSeconds(numbers));