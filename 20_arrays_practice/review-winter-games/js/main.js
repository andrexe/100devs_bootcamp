//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

const findEvens = (arr) => {
    return arr.reduce((acc, curr) => {
        if (curr % 2 == 0) {
            acc.add(curr)
        }
        return acc
    }, new Set())
}

console.log(findEvens([1, 2, 3, 4, 5]));