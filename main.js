//this will contain all the logic of the app. This app should end when a player guesses the correct word or runs out of guesses. 

var letter = require('./letter.js');

var prompt = require('prompt');

SetUnderline();


var properties = [
    {
      name: 'This is Pokemon Hangman', 
      validator: /^[a-zA-Z\s\-]+$/,
      warning: 'Please Only Use 1 Letter!'
    }
]    

prompt.start();

  prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Password: ' + result.password);
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }