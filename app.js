// Variables 
const phrase = document.getElementById('#phrase');
const qwerty = document.getElementById('qwerty');
const phraseUL = document.querySelector('#phrase ul');
const startGameBtn = document.querySelector('.btn_reset');
const overlay = document.getElementById('overlay');
let keyboardBtn = Array.from(document.querySelectorAll('.keyrow button'));
const liveHeart = Array.from(document.querySelectorAll('ol li'));


// Guesses Missed initialized with 0
let missedGuess = 0;


// Listening for click on Start Game Button while hiding overlay
startGameBtn.addEventListener('click', () => {
    overlay.setAttribute('style', 'display:none');
    addPhraseToDisplay(phraseArray(phrases));
});