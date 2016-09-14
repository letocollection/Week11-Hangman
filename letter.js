//this should be a constructor file

//this should control whether or not a letter appears as a "_" or as itself on-screen.

var word = require('./word.js');

SetUnderline = function(){
	PullWord();
	for(i=0; i<Word.length; i++){
		WordArray[i] = Word.charAt(i);
		WordUArray[i] = "  ___  ";
	}

	WordU = WordUArray.join("");
	document.getElementById("word").innerHTML = WordU;
	document.getElementById("numLet").innerHTML = Word.length;

}