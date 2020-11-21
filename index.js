const prompt = require('prompt-sync')();

const random = Math.floor(Math.random() * 101);

// Welcome text
const welcomeText = "Welcome to the number guessing game. (If you wish to exit this loop, type exit)";
console.log(welcomeText);
const desc = "The number is set between 1 and 100.";
console.log(desc);

let win = false;

while (win == false) {
    
    const userInput = prompt("Take a guess... ");

    if (userInput > random) {
        console.log("You guessed it too high...");
    } else if (userInput < random) {
        console.log("You guessed it too low...");
    } else if (userInput == random) {
        console.log("You guessed it right! The number was " + random + ".");
        win = true;
        break;
    } else if (userInput === "exit") {
        console.log("Exiting game...");
        break;
    }
}