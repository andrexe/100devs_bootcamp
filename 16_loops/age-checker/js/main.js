//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If over 30, tell them there is nothing left to look forward too

// grab the paragraph where the result will be displayed
let displayText = document.querySelector('p');

// grab the input field and run the checkAge function whenever there are changes to it, no click needed
const ageInput = document.getElementById('danceDanceRevolution');
ageInput.addEventListener('change', checkAge);

// grab the h1 and run the checkAge function on click
const checkTrigger = document.querySelector('h1');
checkTrigger.addEventListener('click', checkAge);

function checkAge(e) {

    // line below only works when listening for changes on the input itself
    // let age = e.target.value;

    // this one works without using the event that triggered the callback, i.e. it works with click on h1
    let age = ageInput.value;

    displayText.textContent = age < 16 ? "You can't drive"
    : age < 18 ? "You can't hate" 
    : age < 21 ? "You can't drink"
    : age < 25 ? "You can't rent cars affordably"
    : age < 30 ? "You can't rent fancy cars affordably"
    : "There is nothing left for you to look forward to";

}




//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
