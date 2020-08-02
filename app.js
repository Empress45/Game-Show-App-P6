// Variables
const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const keyboardBTN = document.querySelectorAll(".keyrow button");
const phraseUl = phrase.querySelector("ul");
const button_reset = document.querySelector(".btn__reset");
let missedGuess = 0;

// Phrases Arrary and Letters in Arrary
let phrases = [
    "May the force be with you",
    "I said good day sir",
    "I'll be back",
    "You gone learn today",
    "Oh Andy Dufresne"
];
let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
];

function getRandomPhraseAsArray(arr) {
    const lengthArray = Math.floor(Math.random() * phrases.length);
    randomPhrase = phrase[lengthArray];
    phraseWord = randomPhrase.split(" ");
    return phraseWord;
}