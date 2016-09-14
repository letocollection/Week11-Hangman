//this file will randomly select a word for the player. 


var hangmanWord = [
    "charizard",
    "fearow",
    "bulbasaur",
    "sandshrew",
    "nidoqueen",
    "vileplume",
    "zapdos",
    "pumpkaboo",
    "volcanion",
    "bermite",
    "heliolisk",
    "doublade",
    "pangoro",
    "terrakion",
    "bouffalant",
    "chandelure",
    "jellicent",
    "gothitelle",
    "garbodor",
    "archeops",
    "maractus",
    "conkeldurr",
    "swoobat",
    "roggenrola",
    "tranquill",
    "simisear",
    "pansage",
    "stoutland",
    "pikachu",
];

NumInhangmanwords = hangmanWord.length;

PullWord = function() {

	var word = hangmanWord[Math.floor(Math.random() * NumInhangmanwords)];
	var currentWord = word;
	return word;

};
