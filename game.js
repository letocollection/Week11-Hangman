//this file will randomly select a word for the player. 

var hangmanGame = {
    wordsToPick: {
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
    }
}

setupGame: function() {
    // ---Pick a random word
    var objKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    this.lettersOfTheWord = this.wordInPlay.split('');
    this.rebuildWordView();
    this.processUpdateTotalGuesses();
}

setupGame();
