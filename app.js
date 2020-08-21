// Variables 
const phrase = document.getElementById('#phrase');
const qwerty = document.getElementById('qwerty');
const headline = document.querySelector('.title');
const phraseUL = document.querySelector('#phrase ul');
const resetButton = document.querySelector('.btn__reset');
const lives = document.querySelectorAll('.tries');
const overlay = document.querySelector('#overlay');
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
resetButton.addEventListener('click', () => {
    if (resetButton.textContent == 'Start Game')
        overlay.style.display = 'none';
});


// Random phrase array returning a random phrase
function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const words = randomPhrase.split('');
    return words;
}

// Display Phrase
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        if (arr[i] !== ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
        phraseUL.appendChild(li);
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));
const phraseArray = getRandomPhraseAsArray(phrases);

console.log(phraseArray);

// CheckLetter Function checking for letter in the phrase
function checkLetter(button) {
    let match = null;
    document.querySelectorAll('.letter').forEach((letter) => {
        if (button === letter.textContent.toLowerCase()) {
            letter.className += ' show';
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
        button.disabled = true;
        const letterFound = checkLetter(button.textContent);
        if (letterFound == null) {
            lives[missedGuess].src = 'images/lostHeart.png';
            lives.length--;
            missedGuess++;
        }
    }
    checkWin();
});

// CheckWin Function checking if the game has been won or lost
function checkWin() {
    let letters = document.getElementsByClassName('letter');
    let shown = document.getElementsByClassName('show');
    if (shown.length === letters.length) {
        overlay.className = 'winner';
        overlay.style.display = 'flex';
        headline.textContent = 'You have Won!';
    } else if (missedGuess >= 5) {
        overlay.className = 'Lose';
        overlay.style.display = 'flex';
        headline.textContent = 'Game Over';
        resetButton.textContent = 'Start Over';
    }
}


// Resetting the game after a win or loss
function resetGame() {
    missedGuess = 0;
    let keyboardBtn = document.querySelectorAll('.keyrow button');
    for (let i = 0; i < keyboardBtn.length; i++) {
        keyboardBtn[i].className = '';
        keyboardBtn[i].disabled = false;
    }
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));

    phraseUL.textContent = '';
    for (let i = 0; i < liveHeart.length; i++) {
        liveHeart[i].classsName = 'tries';
        triesImg[i].src = 'images/lostHeart.png';
    }
    checkWin();
}

