const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');
console.log(messages);

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value);
  attempts = attempts + 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooHighMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
}

// hiding all guess result messages, used in setup annd checkGuess functions. Fixed. Works as expected.
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  attempts = 0;

  // Enable the input and submit button
  submitButton.disabeld = false;
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();


// Testing and debuging
// 
// Requirement #0:
//  No errors in the browser console
// Result:
// 
// 
// Requirement #1:
//  At the start, the "reset" button and all of the "messages" should be hidden
// Result:
//  fixed. Works as expected.
// 
// Requirement #2:
//  You should be able to type a number into the input field and click "Submit Guess" to submit the form
// Result:
//  Works as expected.
// 
// Requirement #3:
//   When the form is submitted, you should see the following:
//    #3.1) A message displaying the number that was entered
// Result:
//  Works as expected.
// 
//    #3.2) A message displaying how many tries you have left (starts at 5 and decrements by 1)
// Result:
//  Works as expected.
// 
//    #3.3) A message describing the guess (too low, too high, etc.)
// Result:
//  Works as expected.
// 
//    #3.4) A "reset" button that restarts the game
// Result:
//  Works as expected.
// 
// Requirement #4:
//  If the guessed number is BELOW the target, the message should say "too low"
// Result:
//  Works as expected.
// 
// Requirement #5:
//  If the guessed number is ABOVE the target, the message should say "too high"
// Result:
//  Works as expected.
// 
// Requirement #6:
//  If the guessed number is the SAME as the target, then:
//    #6.1) The input field and "Submit Guess" button should be disabled
// Result:
//  Works as expected.
// 
//    #6.2) The message should say "guessed correctly"
// Result:
//  Works as expected.
// 
// Requirement #7:
//  If the guessed number is not the same AND all 5 tries have been used, then:
//    #7.1) The input field and "Submit Guess" button should be disabled
// Result:
//  Works as expected.
// 
//    #7.2) The message should say "0 guesses remaining"
// Result:
//  Works as expected.
// 
// Requirement #8:
//  When you click the "reset" button, the form should return to its initial state (not disabled)
// Result:
//  Works as expected.
