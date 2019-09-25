var Word = require("./Word.js");

var inquirer = require("inquirer");

var myGlobal = {
    wordOptions: ["defenestrate", "palimpsest", "crapulence", "gobbledygook", "elephant", "peacock", "thunderstorm", "bazaar", "banana", "pavise"],

    chosenWord: {},

    alreadyGuessed: [],

    guessesRemaining: 0,

    wordVictories: 0,

    wordLosses: 0
}

function chooseWord() {
    myGlobal.guessesRemaining = 12;

    myGlobal.alreadyGuessed = [];

    var wordChoice = Math.floor(Math.random() * myGlobal.wordOptions.length);

    myGlobal.chosenWord = new Word(myGlobal.wordOptions[wordChoice]);

    myGlobal.wordOptions.splice(wordChoice, 1);

    guessingTime();
};

function gameOver() {
    console.log("\nThere are no more words to guess!\n\nYou guessed " + myGlobal.wordVictories + " words correctly.\n\nYou guessed " + myGlobal.wordLosses + " words incorrectly.");

    if (myGlobal.wordVictories > 5) {
        console.log("\nGreat job!\n");
    }

    else {
        console.log("\nBetter luck next time.\n")
    };
};

function guessingTime() {
    console.log(("\n" + myGlobal.chosenWord.wordDisplay()).split("").join(" ") + "\n");

    inquirer
        .prompt([
            {
                type: "input",
                message: "Guess a letter.",
                name: "letterGuessed"
            }
        ])
        .then(answers => {
            if (answers.letterGuessed.length !== 1) {
                console.log("\nSorry, but you must guess exactly one English letter at a time.");
            }

            else if (!((/[a-z]/i).test(answers.letterGuessed))) {
                console.log("\nSorry, but only English letters may be guessed.");
            }

            else {
                var redundantGuess = false;

                for (var i = 0; i < myGlobal.alreadyGuessed.length; i++) {
                    if (myGlobal.alreadyGuessed[i] === answers.letterGuessed) {
                        redundantGuess = true;

                        break;
                    };
                };

                if (!redundantGuess) {
                    var checkGuess = myGlobal.chosenWord.guessLetter(answers.letterGuessed);

                    myGlobal.alreadyGuessed.push(answers.letterGuessed);

                    if (!checkGuess) {
                        console.log("\nSorry. The word doesn't contain that letter.")

                        myGlobal.guessesRemaining--;
                    };
                }

                else {
                    console.log("\nSorry, but you've already tried that letter.");
                };
            };

            shouldWeGuess();
        });
};

function shouldGameEnd() {
    if (myGlobal.wordOptions.length < 1) {
        gameOver();
    }

    else {
        chooseWord();
    };
};

function shouldWeGuess() {
    if ((myGlobal.guessesRemaining < 1)) {

        myGlobal.wordLosses++;

        console.log("\nSorry. You failed to guess the word.")

        shouldGameEnd();
    }

    else if (!((myGlobal.chosenWord.wordDisplay()).includes("_"))) {

        myGlobal.wordVictories++;

        console.log("\nYou guessed the word correctly! It was " + myGlobal.chosenWord.wordDisplay() + ".");

        shouldGameEnd();
    }

    else {
        console.log("\n" + myGlobal.guessesRemaining + " guesses remaining.");

        guessingTime();
    };
};

console.log("\nWelcome to Command Line Hangman!");

chooseWord();