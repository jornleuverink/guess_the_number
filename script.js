const firstName = prompt("Welcome! What is your name?");

alert("Hey " + firstName + "! Let's play a game!");

const smallest = prompt("Choose a start number to specify the range:");

alert("You picked: " + smallest);

const largest = prompt("Choose a end number to specify the range:");

alert("You picked: " + largest);

function randomNumber() {
    const givenNumber = prompt("Enter a number between " + smallest + " and " + largest + " to start guessing...");
    const drawnNumber = Math.floor(Math.random() * largest) + smallest;
    if (drawnNumber == givenNumber) {
        alert("Congratulations, you have won the game!");
        alert("Bye " + firstName + ", see you!");
    } else {
        alert("Unfortunately, that is not correct!");
        return randomNumber();
    }
}

randomNumber();