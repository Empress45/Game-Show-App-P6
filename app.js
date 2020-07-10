// Variables 
const phrase = document.getElementById('#phrase');
const qwerty = document.getElementById('qwerty');
const headline = document.querySelector('.title');
const phraseUL = document.querySelector('#phrase ul');
const startGame = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let keyboardBtn = Array.from(document.querySelectorAll('.keyrow button'));
let liveHeart = Array.from(document.querySelectorAll('ol li'));


// Guesses Missed initialized with 0
let missedGuess = 0;


// Phrases Array
const phrases = ["May the force be with you",
    "You gone learn today",
    "What you see is what you get",
    "Happy Anniversary",
    "Alright Alright Alright"
];

// Random phrase array returing a random phrase
function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    return randomPhrase;
}

getRandomPhraseAsArray(phrases);


// Display phrase
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        phraseUL.appendChild(li);
        if (arr[i] !== " ") {
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// CheckLetter Function checking for letter in the phrase
function checkLetter(btn) {
    let match = null;
    document.querySelectorAll('.letter').forEach((letter) => {
        if (btn === letter.textContent.toLowerCase()) {
            letter.className = 'letter show';
            match = btn;
        }
    });
    return match;
}

// CheckWin Function checking if the game has been won or lost
function checkWin() {
    let letters = document.getElementByClassName('letter');
    let shown = document.getElementByClassName('show');
    if (shown.length === letters.length) {
        overlay.className = 'winner';
        headline.textContent = 'You have Won!';
        overlay.style.display = 'flex';
        startButton.textContent = 'Please try again';
    } else if (missed >= 5) {
        overlay.className = 'Lose';
        headline.textContent = 'You have lost';
        overlay.style.display = 'flex';
        startButton.textContent = 'Please try again';
    }
}

// Listening for click on Start Game Button while hiding overlay
startGame.addEventListener('click', () => {
    if (startGame.textContent == 'Start Game') {
        overlay.style.display = 'none';
    } else if (startGame.textContent == 'Please try again')
        resetGame()
});


// Event Listener for Keyboard presses
//qwerty.addEventListener('click', (event) => {
//   if (event.target.tagName == 'BUTTON') {
//        const button = event.target;
//       const letterClicked = event.target.innerHTML;
//       let letterFound = checkLetter(letterClicked);
//        button.classList.add('chosen');
//       button.disabled = 'true';
//      if (letterFound == null) {
//          missedGuess += 1;
//           let li = document.querySelectorAll('.tries')[0];
//           let liveHeart = document.querySelectorAll('ol').children; // Heart elements selected
//            Heart[4].remove(); // Hearts removed
//           let lostHeart = document.createElement('li'); // Element for lost hearts
//           lostHeart.innerHTML = "<'img src = images/lostHeart.png' height = '35px' width = '30px'>";
//           lostHeart.classList.add('tries');
//           let heartSection = document.querySelectorAll('ol')[0]; // List of child elements
//          heartSection.insertBefore(lostHeart, liveHeart[0]) // New lostHeart inserted
//       }
//    }
//   checkWin();  
//});




// Resetting the game after a win or loss
function resetGame() {
    missed = 0;
    const keyboard = document.querySelectorAll('button');
    for (let i = 0; i < keyboard.length; i++) {
        keyboard[i].className = '';
        keyboard[i].disabled = 'false';
    }
}