var Letter = require("./Letter.js");

module.exports = function (x) {
    this.letterArray = x.split("");

    for (var k = 0; k < this.letterArray.length; k++) {
        this.letterArray[k] = new Letter(this.letterArray[k]);
    };

    this.wordDisplay = function () {
        var displayWord = "";

        for (var i = 0; i < letterArray.length; i++) {
            displayWord += letterArray[i].letterDisplay();
        };

        return displayWord;
    };
    
    this.guessLetter = function(y) {
        var correctGuess = false;

        for (var j = 0; j < letterArray.length; i++) {
            var evalGuess = letterArray[i].guessLetter(y);

            if ((evalGuess === true) && (correctGuess === false)) {
                correctGuess = true;
            };
        };

        return correctGuess;
    };
};