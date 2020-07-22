// Variables 
const phrase = document.getElementById('#phrase');
const qwerty = document.getElementById('qwerty');
const headline = document.querySelector('.title');
const phraseUL = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
const lives = document.querySelectorAll('tries');
const overlay = document.getElementById('overlay');
let keyboardBtn = Array.from(document.querySelectorAll('.keyrow button'));
let liveHeart = Array.from(document.querySelectorAll('ol li'));
let triesImg = Array.from(document.querySelectorAll('tries img'));


// Guesses Missed initialized with 0
let missedGuess = 0;


// Phrases Array
const phrases = ["May the force be with you",
    "You gone learn today",
    "What you see is what you get",
    "Happy Anniversary",
    "Alright Alright Alright"
];

// Listening for click on Start Game Button while hiding overlay
startGame.addEventListener('click', () => {
    if (startGame.textContent == 'Start Game') {
        overlay.style.display = 'none';
    } else if (startGame.textContent == 'Please try again')
        resetGame()
});


// Random phrase array returning a random phrase
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const words = randomPhrase.split('');
    return words;
}
const phraseArray = getRandomPhraseAsArray(phrases);
console.log(phraseArray);


// Display Phrase
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContext = arr[i];
        if (arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        phraseUL.appendChild(li);
    }
}

// CheckLetter Function checking for letter in the phrase
function checkLetter(button) {
    let match = null;
    document.querySelectorAll('.letter').forEach((letter) => {
        if (button === letter.textContent.toLowerCase()) {
            letter.className = 'letter show';
            match = button;
        }
    });
    return match;
}

// Keyboard clicks
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.className = 'chosen';
        button.disabled = 'true';
        const letterFound = checkLetter(button.textContent);
        if (letterFound === null) {
            lives[missedGuess].firstChild.src = 'images/lostHeart.png';
            missedGuess += 1
        }
    }
});

// CheckWin Function checking if the game has been won or lost
function checkWin() {
    let letters = document.getElementByClassName('letter');
    let shown = document.getElementByClassName('show');
    if (shown.length === letters.length) {
        overlay.className = 'winner';
        headline.textContent = 'You have Won!';
        overlay.style.display = 'flex';
        startButton.textContent = 'Please try again';
    } else if (missedGuess >= 5) {
        overlay.className = 'Lose';
        headline.textContent = 'You have lost';
        overlay.style.display = 'flex';
        startButton.textContent = 'Please try again';
    }
}


// Resetting the game after a win or loss
function resetGame() {
    missedGuess = 0;
    const keyboard = document.querySelectorAll('keyrow button');
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].className = '';
        keyboard[i].disabled = 'false';
    }
    phraseUL.textContent = '';
    for (let i = 0; i < liveHeart.length; i++) {
        liveHeart[i].classsName = 'tries';
        triesImg[i].src = 'images/lostHeart.png';
    }
}