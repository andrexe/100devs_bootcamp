// *Variables*
// Declare a variable, assign it a value, and alert the value
let a = 5;
alert(a);

// Create a variable, divide it by 10, and console log the value

let b = 20;
b /= 10;
console.log(b);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

let multiplyThree = (a, b, c) => alert(a * b * c)
multiplyThree(2, 3, 4);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

let addAndSubtract = (a, b, c, d) => console.log(a + b - c - d);
addAndSubtract(2, 3, 4, 1);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
let winnerCheck = (a, b, c) => {
    let result = (100 + a - b) / c;
    if (result > 25) {
        console.log('WE HAVE A WINNA')
    }
}

winnerCheck(50, 10, 2);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

let weekdayCheck = (text) => {
    let weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    // find which day of the week it is, from 0 to 6 or -1 if it doesn't match
    result = weekdays.indexOf(text.toLowerCase());

    // set result to 'try again' if it didn't match any days, to 'weekday' if it's in the first five or 'weekend' otherwise
    result = result == -1 ? 'try again'
        : result < 5 ? 'weekday'
            : 'weekend';

    // alert the result
    alert(result);
}

weekdayCheck('Saturday');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

let countByThree = (n) => {
    for (let i = 1; i < n; i+=3) {
        console.log(i);
        
    }
}

countByThree(15);