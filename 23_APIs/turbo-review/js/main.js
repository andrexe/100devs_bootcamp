// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const sentence = "I make the money, man. I roll the nickles. The game is mine. I deal the cards.";
if (sentence.endsWith("?")) {
    alert(sentence)
};

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let intro = 'A passionate and hard-working jr. dev looking to add real commercial value to the digital sector as a jr. dev.';
console.log(intro.replace(/jr. dev/g, 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const choices = ['rock', 'paper', 'scissors'];
const rps = () => {
    return choices[Math.floor(Math.random() * 3)];
}
console.log(rps());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const checkResult = (player) => {
    if (!choices.includes(player)) { return 'Invalid move' }
    const bot = rps();
    if (bot == player) { return `It's a tie, you both picked ${player}` }
    if ((bot == 'rock') && (player == 'paper') ||
        (bot == 'paper') && (player == 'scissors') ||
        (bot == 'scissors' && (player == 'rock'))) {
        return `You won. Your ${player} beat the bot's ${bot}.`
    } else {return `You lost. The bot's ${bot} beat your ${player}.`}
}

console.log(checkResult('paper'));

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const generateChoices = (n) => new Array(n).fill(0).map(() => choices[Math.floor(Math.random()*3)]);

console.log(generateChoices(5));

const randomChoices = generateChoices(10);

const generateResults = (arr) => arr.map((el) => checkResult(el));
console.table(generateResults(randomChoices));