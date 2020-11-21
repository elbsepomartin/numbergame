// Import npm packages
const prompt = require('prompt-sync')();

// Random number logic
const random = Math.floor(Math.random() * 101);

// Welcome text
const welcomeText = "Welcome to the number guessing game. (If you wish to exit this loop, type exit)";
// Log the text
console.log(welcomeText);

// The description of the game
const desc = "The number is set between 1 and 100.";
// Log the description
console.log(desc);

// Set the win state to false
let win = false;

// When win is false, do this:
while (win == false) {

    // Get the user input
    const userInput = prompt("Take a guess... ");

    // If the user guesses it too high
    if (userInput > random) {
        console.log("You guessed it too high...");

        // If the user guesses it too low
    } else if (userInput < random) {
        console.log("You guessed it too low...");

        // If the user guesses it right
    } else if (userInput == random) {
        console.log("You guessed it right! The number was " + random + ".");
        console.log("Exiting game...");
        break;

        // If the user wants to exit
    } else if (userInput === "exit") {
        console.log("Exiting game...");
        break;
    }
}