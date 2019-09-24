module.exports = function(x) {
    this.letterValue = x;
    this.guessed = false;
    this.letterDisplay = function() {
        if (!this.guessed) {
            return "_";
        }

        else {
            return this.letterValue;
        };
    };
    this.guessLetter = function(y) {
        if (this.letterValue === y) {
            this.guessed = true;
        };
    };
};