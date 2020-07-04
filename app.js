// Variables 
let qwerty = document.getElementById('qwerty');
let phraseUL = document.getElementById('phrase ul');
let overlay = document.getElementById('overlay');
let tries = document.getElementById('scoreboard ol');
let title = document.getElementById('.title');
let startGame = document.getElementById('.btn_rest');
let missed = 0;

// Phrases Array
let phrase = ["May the fourth be with you",
    "Time waits for no man",
    "They want to know us, so they can kill us",
    "A dime a dozen",
    "Piece of cake",
    "You gone learn today",
    "Keep it moving"
]






// Listening for start button to be pressed 
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
    resetGame();
});