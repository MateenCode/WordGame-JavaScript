let display = document.querySelector('.display');
let guess = document.querySelector('#character');
let textForm = document.querySelector('.textForm');


var commonWords = [
  "the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he",
  "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be",
  "this", "have", "from", "or", "one", "had", "by", "word", "but", "not",
  "what", "all", "were", "we", "when", "your", "can", "said", "there",
  "use", "an", "each", "which", "she", "do", "how", "their", "if", "will",
  "up", "other", "about", "out", "many", "then", "them", "these", "so",
  "some", "her", "would", "make", "like", "him", "into", "time", "has",
  "look", "two", "more", "write", "go", "see", "number", "no", "way",
  "could", "people", "my", "than", "first", "water", "been", "call",
  "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get",
  "come", "made", "may", "part"
];



// Grabbing Random Word
var chooseRandomWord = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}
var chosenWord = chooseRandomWord(commonWords);
console.log(chosenWord)






// Function that submits the values
textForm.addEventListener('submit', function(event) {

  var counter = 10;
  var triedCharacters = [];
  var correctCharacters = [];



  event.preventDefault();

  guess = character.value



  for (i = 0; i < chosenWord.length; i++) {
    chosenWord[i]
    for (z = 0; z < guess.length; z++) {
      if (guess[z] === chosenWord[i]) {
        correctCharacters.push(guess[z])
        console.log("correct " + correctCharacters)
      } else {
        triedCharacters.push(guess[z])
        console.log("incorrect " + triedCharacters)
      }
    };
  }


})



// Create a function that accepts a single character argument
// The function should check the `chosenWord` for that character
// The function should return true if the character is in the given word
// The function should return false if the character is not in the given word
// The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
// The function should store and console.log every letter that has been passed to this function in the `triedCharacters` array
// The function should store and console.log every letter in `chosenWord` that has been passed to this function in the `correctCharacters` array
// If every letter in `chosenWord` word has been passed to this function, console.log "you guessed it"
