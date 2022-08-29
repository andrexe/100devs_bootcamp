//Write your pseduo code first! 
// document.querySelector('#convert').addEventListener('submit', (e) => convert(e))
document.querySelector('#reset').addEventListener('click', (e) => reset(e))

function reset(e) {
  document.querySelector('#celsius').value = 0;
  document.querySelector('#fahrenheit').value = 32;
  e.preventDefault();
}

// grab temp inputs

let cInput = document.querySelector('#celsius');
let fInput = document.querySelector('#fahrenheit');

// use the conversion formulas to calculate and update an input value when the other one has changed

let displayC = (e) => document.querySelector('#celsius').value = fToC(e.target.value);
let displayF = (e) => document.querySelector('#fahrenheit').value = cToF(e.target.value);

// watch each input for changes and change the other when one changes

cInput.addEventListener('input', displayF);
fInput.addEventListener('input', displayC);

// conversion formulas 
function cToF(temp) {
  return temp * 9 / 5 + 32;
}
function fToC(temp) {
  return (temp - 32) * 5 / 9;
}
// function convert(e) {

//   let cInput = document.querySelector('#celsius').value;
//   let fInput = document.querySelector('#fahrenheit').value;
//   let displayMessage = (message) => document.querySelector('#message').innerText = message;

//   if (cInput) {
//     if (fInput) {
//       displayMessage("Please remove one of the values");
//     } else {
//       displayF(cToF(cInput));
//     }
//   } else {
//     displayC(fToC(fInput))
//   }
//   e.preventDefault();

// }
