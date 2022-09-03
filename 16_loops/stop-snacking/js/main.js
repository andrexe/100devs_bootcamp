//Create a function that grabs the number of snacks from the input and tells you to stop that many times
const displayText = document.getElementById('stops');

const help = document.getElementById('help');

help.addEventListener('click', stopSnacking);

function stopSnacking() {
    const snacks = Number(document.querySelector('input').value);

    // clear the messages before running again
    // displayText.innerText = '';
    
    for (let i = 1; i <= snacks; i++) {
        displayText.append('Stop snacking! ')
    }
}