//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const countFromOne = (n) => {
    console.log(n);
    if (n == 1) {
        return [1];
    } else {
        return countFromOne(n - 1).concat(n);
    }
}

console.log(countFromOne(5));