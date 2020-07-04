// Variables 
let qwerty = document.getElementById('qwerty');
let phraseUL = document.getElementById('phrase ul');
let overlay = document.getElementById('overlay');
let tries = document.getElementById('scoreboard ol');
let title = document.getElementById('.title');
let startGame = document.getElementById('.btn_rest');
let missed = 0;

// Phrases Array
let phrase = ['May the fourth be with you',
    'A dime a dozen,'
    'Beating around the bush',
    'Back to square one,'
    'A piece of cake',
]





// Listening for start button to be pressed 
startGame.addEventListener('click', () {
    overlay.style.display = 'none';
    resetGame();
});