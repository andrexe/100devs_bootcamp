// run the fizzbuzz function when submitting the form
document.querySelector('#fizzbuzzForm').addEventListener('submit', (e) => fizzbuzz(e))

// grab the results section
const results = document.getElementById('results');

function fizzbuzz(e) {

    // clear the results section
    results.innerHTML = '';

    // grab the parameters from the form inputs
    let fizz = Number(document.getElementById('fizzNumber').value);
    let buzz = Number(document.getElementById('buzzNumber').value);
    let max = Number(document.getElementById('maxNumber').value);

    // loop from one to max
    for (let i = 1; i <= max; i++) {
        
        // start with empty result
        let result = '';
        // add fizz condition
        if (i % fizz == 0) { result += 'Fizz'}
        // add buzz condition
        if (i % buzz == 0) { result += 'Buzz'}
        // default condition
        if (result == '') { result += i }

        // display result
        displayResults(result);
    }

    // prevent page reload on form submit
    e.preventDefault();
}

function displayResults(result) {

    // create new paragraph to store each result
    var newRow = document.createElement('p');

    // insert current result in paragraph and append it to results section
    newRow.innerHTML = result;
    results.appendChild(newRow);
}