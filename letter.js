//this should be a constructor file

//this should control whether or not a letter appears as a "_" or as itself on-screen.

var word = require('./word.js');

SetUnderline = function() {
    word = PullWord();
    // PullWord();
    // console.log(this.PullWord());

    for (i = 0; i < word.length; i++) {
        WordArray[i] = word.charAt(i);
        WordUArray[i] = "  ___  ";
        console.log(WordUArray[i]);
        console.log(word);
    }

    WordU = WordUArray.join("");



};

UpdateLetter = function(letter){
	Changes = 0;
	for(i=0; i<Word.length; i++){
		WordArray[i] = Word.charAt(i);
		if(Word.charAt(i) == letter){
			WordUArray [i] = letter;
			Changes += 1;
		}
	}

	if(Changes < 1) {
		Lives -=1;
		
	}

	WordU = WordUArray.join("");
	Word1 = WordArray.join("");
	Word2 = WordUArray.join("");

	if (Word1 == Word2) {
		console.log("You Win! Next Word");
		// window.location.reload();
	}

	if(Lives < 1) {
		// document.getElementById("word").innerHTML == Word1;
		console.log("You Have Run Out Of Lives, Please Try Again");
		// window.location.reload();
	}
}
