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
};

function gameOver() {
    console.log("There are no more words to guess!\n\nYou guessed " + myGlobal.wordVictories + " words correctly!\n\nYou guessed " + myGlobal.wordLosses + " words incorrectly.");

    if (myGlobal.wordVictories > 5) {
        console.log("Great job!");
    }

    else {
        console.log("Better luck next time.")
    };
};

function guessingTime() {
    console.log((myGlobal.chosenWord.wordDisplay()) + "\n");

    inquirer
        .prompt([
            {
                type: "input",
                name: "letterGuessed",
                message: "Enter a letter to guess."
            }
        ])
        .then(answers => {
            if (answers.letterGuessed.length !== 1) {
                console.log("Sorry, but you must guess exactly one English letter at a time.");
            }

            else if (!((/[a-z]/i).test(answers.letterGuessed))) {
                console.log("Sorry, but only English letters may be guessed.");
            }

            else {
                var redundantGuess = false;

                for (var i = 0; i < myGlobal.alreadyGuessed.length; i++) {
                    if (myGlobal.alreadyGuessed[i] === answers.letterGuessed) {
                        var redundantGuess = true;

                        break;
                    };
                };

                if (!redundantGuess) {
                    var checkGuess = myGlobal.chosenWord.guessLetter(answers.letterGuessed);

                    myGlobal.alreadyGuessed.push(answers.letterGuessed);

                    if (!checkGuess) {
                        console.log("Sorry. The word doesn't contain that letter.")

                        myGlobal.guessesRemaining--;
                    };
                }

                else {
                    console.log("Sorry, but you've already tried that letter.");
                };
            };
        });

    shouldWeGuess();
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
    if ((myGlobal.guessesRemaining < 1) && (myGlobal.wordOptions.length < 1)) {
        myGlobal.wordLosses++;

        shouldGameEnd();
    }

    else if (!((myGlobal.chosenWord.wordDisplay()).contains("_"))) {
        myGlobal.wordVictories++;

        shouldGameEnd();
    }

    else {
        guessingTime();
    };
};

chooseWord();

guessingTime();