//this will contain all the logic of the app. This app should end when a player guesses the correct word or runs out of guesses. 

require('events').EventEmitter.prototype._maxListeners = 0;

var letter = require('./letter.js');

// var prompt = require('prompt');

var inquirer = require('inquirer');



var startGame = function() {
        SetUnderline();
        Lives = 6;
        inquirer.prompt([{
                name: "userLetter",
                type: "input",
                message: "This is Pokemon Hangman, Please Pick a Letter"
            }]).then(function(answer) {
                    UpdateLetter(answer.userLetter);
                    
                })
};


startGame();
