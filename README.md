# Command Line Hangman

A game of Hangman played from the bash command line.

## How to Play

* Navigate into the app's repository using the bash command line.

* Initiate the game by typing "node index.js."

* When you do this, the game will randomly choose one of ten words and display an underscore for each letter it contains.

* Beneath these underscores, an Inquirer prompt will appear, asking you to guess a letter.

* You must type exactly one English letter.

* If you do not type an English letter, the game will inform you that only English letters may be guessed and return you to the Inquirer prompt.

* If you type either more than one character or no characters at all, the game will inform you that only one letter may be guessed at a time and return you to the Inquirer prompt.

* If you type a letter that you have guessed previously, the game will likewise inform you of this and return you to the Inquirer prompt.

* If none of these scenarios occur, the game will compare the character to those in the randomly chosen word.

* If the letter is not in the word, the game will inform you of this and then subtract one guess from your total number of guesses remaining.

* If the letter is in the word, one of the underscores hiding the word from view will be replaced by a visible letter.

* This version of the word, with its combination of underscores and visible letters (depending on how many have been guessed), will reappear before each Inquirer prompt.

* Above it, in each case except the first (when the game initially starts), you will also be told how many guesses you have remaining.

* If all of the word's letters have been guessed, you will be congratulated.

* If you run out of guesses, you will be informed that you have no guesses remaining.

* In either case, a new word will be chosen and the process will repeat.

* This will continue until all ten possible words have been exhausted.

* Once all ten words have been exhausted, the game will inform you of the total number you got right and the total number you got wrong.

* If you got more than five correct, you will be shown a congratulatory message.

* If you got less than six correct, you will be wished better luck next time.

### Example

Click on the image below to watch a video of the game being played:

[![app demo link](https://img.youtube.com/vi/0_L0_KbDhqA/0.jpg)](https://www.youtube.com/embed/0_L0_KbDhqA)

## Technologies Used

JavaScript

Node.js

Inquirer.js

## Author

Antonio de las Morenas -- responsible for coding the entire app