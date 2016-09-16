//this will contain all the logic of the app. This app should end when a player guesses the correct word or runs out of guesses. 

var letter = require('./letter.js');

// var prompt = require('prompt');

var inquirer = require('inquirer');



var startGame = function() {
    SetUnderline();
    inquirer.prompt([{
        name: "userLetter",
        type: "input",
        message: "This is Pokemon Hangman, Please Pick a Letter"
    }]).then(function(answer) {
        UpdateLetter(answer.userLetter);
        if (Lives > 1) {

            inquirer.prompt([{
                name: "userLetter",
                type: "input",
                message: "Pick another Letter"
            }]).then(function(answer) {

                UpdateLetter(answer.userLetter);
                if (Lives > 1) {

                    inquirer.prompt([{
                        name: "userLetter",
                        type: "input",
                        message: "Pick another Letter"
                    }]).then(function(answer) {

                        UpdateLetter(answer.userLetter);
                        if (Lives > 1) {

                            inquirer.prompt([{
                                name: "userLetter",
                                type: "input",
                                message: "Pick another Letter"
                            }]).then(function(answer) {

                                UpdateLetter(answer.userLetter);
                                if (Lives > 1) {

                                    inquirer.prompt([{
                                        name: "userLetter",
                                        type: "input",
                                        message: "Pick another Letter"
                                    }]).then(function(answer) {

                                        UpdateLetter(answer.userLetter);
                                        if (Lives > 1) {

                                            inquirer.prompt([{
                                                name: "userLetter",
                                                type: "input",
                                                message: "Pick another Letter"
                                            }]).then(function(answer) {

                                                UpdateLetter(answer.userLetter);
                                                if (Lives > 1) {

                                                    inquirer.prompt([{
                                                        name: "userLetter",
                                                        type: "input",
                                                        message: "Pick another Letter"
                                                    }]).then(function(answer) {

                                                        UpdateLetter(answer.userLetter);

                                                    })




                                                }

                                            })




                                        }

                                    })




                                }

                            })




                        }

                    })




                }

            })




        }
    });
};

startGame();
