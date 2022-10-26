// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '   Long Island Ice Tea   ';
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words;
words = 'banana orange peach apple';
console.log(words.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

// define possible options assuming each elenebt defeats every -2n-1 element before it and every 2n element after it i.e. normal rps rules
const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
const rps = () => {
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

const bot = rps();

// first level of evaluation returns undefined if the player input is invalid, 1 if it's a draw, 2 if you win, and 0 if you lose.
const evaluate = (player, bot) => {
    if (!choices.includes(player)) return
    const dif = choices.indexOf(player) - choices.indexOf(bot);
    return bot == player ? 1
        : (dif % 2 == 0 && dif < 0 || dif % 2 != 0 && dif > 0) ? 2
            : 0;
}

// second level of evaluation displays a custom message based on the 0/1/2/undefined result and the player & bot inputs
const displayMessage = (result, player, bot) => {
    const messages = [`🥈 You lose. Bot's ${bot} defeats your ${player}.`, `It's a draw. You both picked ${player}.`, `🏆 You win! Your ${player} defeats the bot's ${bot}.`];
    return messages[result] ?? `Choose one of the following: ${choices}`;
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

// generate an array of custom length filled with random choices
const choicesGenerator = (n) => Array(n).fill(0).map(e => rps());

// store the array of random choices
const randomChoices = choicesGenerator(11);
// console.log(randomChoices);

// function that takes in one player choice and an array of bot choices, evaluates and prints the outcome for each one, and a summary with the player's win rate
const evaluateChoices = (player, arr) => {

    // results stores an array of the outcome message of each game
    let results = arr.map((bot) => {
        return displayMessage(evaluate(player, bot), player, bot)
    })

    // rate calculates the win rate based on the result of each match; win = 1pt, draw = 1/2 pt, loss = 0pt
    let rate = arr.map((bot) => evaluate(player, bot))
        .reduce((acc, curr) => acc + curr) / 2 / arr.length;

    // wins calulates the total number of wins
    let wins = arr.map((bot) => evaluate(player, bot))
        .reduce((acc, curr) => curr == 2 ? acc + 1 : acc, 0)

    // summary uses the data stored above
    let summary = `You have a ${(rate*100).toFixed(2)}% win rate, after winning ${wins} games out of ${arr.length} total.`;

    // returns array of outcomes and summary
    return {results, summary}
}

// assigning properties of the object returned to new variables using destructuring
let {results, summary} = evaluateChoices(rps(), randomChoices);

// displaying indiviudal results
console.table(results);

// logging summary
console.log(summary);