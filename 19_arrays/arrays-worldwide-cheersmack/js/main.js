//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
const Iterator = (n) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr[i - 1] = i;
    }
    return arr
}

console.log(Iterator(6));