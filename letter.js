//this should be a constructor file

//this should control whether or not a letter appears as a "_" or as itself on-screen.

var word = require('./word.js');

word = PullWord();

var inquirer = require('inquirer');

var nextLetter = function(){ 
    inquirer.prompt([{
    name: "userLetter",
    type: "input",
    message: "Pick another Letter"
}]).then(function(answer) {

    UpdateLetter(answer.userLetter);

})
};

SetUnderline = function() {




    for (i = 0; i < word.length; i++) {
        WordArray[i] = word.charAt(i);
        WordUArray[i] = "  ___  ";
        console.log(WordUArray[i]);


    }

    WordU = WordUArray.join("");



};

UpdateLetter = function(letter) {




    console.log(word);





    Changes = 0;

    for (i = 0; i < word.length; i++) {
        WordArray[i] = word.charAt(i);
        if (word.charAt(i) == letter) {
            WordUArray[i] = letter;
            Changes += 1;
            console.log(WordUArray);


            inquirer.prompt([{
                name: "userLetter",
                type: "input",
                message: "Pick another Letter"
            }]).then(function(answer) {

                UpdateLetter(answer.userLetter);

            })

            // console.log(WordArray);


        }
    }

    if (Changes < 1) {
        Lives -= 1;
        console.log("You have " + Lives + " Lives Left");
        nextLetter();

    }

    WordU = WordUArray.join("");
    Word1 = WordArray.join("");
    Word2 = WordUArray.join("");

    if (Word1 == Word2) {

        console.log("You Win!");
        inquirer.prompt([{
            name: "restart",
            type: "confirm",
            message: "Do you want to play again?"
        }]).then(function(answer) {

            if (answer = "yes") {
                console.log("OK let's play again!")

                startGame();
            } else {
                process.exit();
            }

        })

    }

    if (Lives < 1) {

        console.log("You Have Run Out Of Lives, Please Try Again");
        process.exit();

    }
}
