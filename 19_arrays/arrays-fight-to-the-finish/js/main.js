//Create an array of movie titles. Loop through the array and each element to the h2.

const movies = ['The Matrix', 'Fight Club', 'Enter the Void'];

const heading = document.querySelector('h2');

heading.innerHTML += `<ul>`
movies.forEach((v, i, a) => heading.innerHTML += `<li>${v}</li>`)
heading.innerHTML += `</ul>`

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const numbers = [3, 5, 7]

numbers.forEach((v, i, a) => a[i] = v + 3);


console.log(numbers);

//Find the average of all the numbers from question three

let average = (array) => array.reduce((prev, curr) => prev + curr)/array.length;
console.log(average(numbers));