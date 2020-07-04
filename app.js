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

// Choosing a random phrase from the phrases array
function getRandomPhraseAsArray() {
    // length of array based on random number
    let randomNum = phrases.length;
    getRandomPhraseAsArray(phrases);
}


function addPhraseToDisplay(phrase) {
    for (let i = 0; i < phrases.length; i++) {
        const li = document.createElement(li);
        li.textContent = phrase[i];
        if (phrase[i] === "") {
            li.className = "space";
        } else {
            li.className = "letter";
        }
        phrase.appendChild(li);
    }
}









// Listening for start button to be pressed 
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
    resetGame();
});