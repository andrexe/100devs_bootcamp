//Create an array of movies with at least three movies.

const movies = ['The Matrix', 'Fight Club', 'Enter the Void'];

//Using the array from above, store the first movie in a variable

const firstMovie = movies[0];

//Get the length of the original array and store it in a new variable

const arrLength = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

const last = movies[movies.length - 1];

console.log(movies, firstMovie, arrLength, last)