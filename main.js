//this will contain all the logic of the app. This app should end when a player guesses the correct word or runs out of guesses. 

var letter = require('./letter.js');

var prompt = require('prompt');

var inquirer = require('inquirer');

SetUnderline();


inquirer.prompt([

    {
        type: "input",
        name: "letterGuess",
        message: "This is Pokemon Hangman, Guess a Letter"
    }


]).then(function(user) {

    if(user.letterGuess){
      UpdateLetter(letterGuess);
    }

});
