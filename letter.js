//this should be a constructor file

//this should control whether or not a letter appears as a "_" or as itself on-screen.

var word = require('./word.js');

word = PullWord();

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
    Lives = 6;
    



    Changes = 0;

    for (i = 0; i < word.length; i++) {
        WordArray[i] = word.charAt(i);
        if (word.charAt(i) == letter) {
            WordUArray[i] = letter;
            Changes += 1;
            console.log(WordUArray);
            console.log(WordArray);
            console.log(word.length);

        }
    }

    if (Changes < 1) {
        Lives -= 1;
        console.log("You have " + Lives + " Lives Left");

    }

    WordU = WordUArray.join("");
    Word1 = WordArray.join("");
    Word2 = WordUArray.join("");

    if (Word1 == Word2) {
        console.log("You Win! Next Word");
    }

    if (Lives < 1) {

        console.log("You Have Run Out Of Lives, Please Try Again");

    }
}

// UpdateLetter("a");
// UpdateLetter("e");
// UpdateLetter("o");
// UpdateLetter("c");