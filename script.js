reset game button

var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var userGuess = parseInt(document.getElementById("userGuess").value);

  if (isNaN(userGuess)) {
    document.getElementById("message").textContent = "Please enter a valid number!";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    document.getElementById("message").textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
  } else if (userGuess < secretNumber) {
    document.getElementById("message").textContent = "Too low! Try a higher number.";
  } else {
    document.getElementById("message").textContent = "Too high! Try a lower number.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("userGuess").value = "";
}



guess the letter

var secretLetter = getRandomLetter();
var attempts = 0;

function getRandomLetter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function checkGuess() {
  var userGuess = document.getElementById("userGuess").value.toUpperCase();

  if (!/^[A-Z]$/.test(userGuess)) {
    document.getElementById("message").textContent = "Please enter a single letter between A and Z.";
    return;
  }

  attempts++;

  if (userGuess === secretLetter) {
    document.getElementById("message").textContent = "Congratulations! You guessed the letter '" + secretLetter + "' in " + attempts + " attempts.";
  } else if (userGuess < secretLetter) {
    document.getElementById("message").textContent = "Too low! Try a higher letter.";
  } else {
    document.getElementById("message").textContent = "Too high! Try a lower letter.";
  }
}

function resetGame() {
  secretLetter = getRandomLetter();
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("userGuess").value = "";
}


display attempts on screen

var secretLetter = getRandomLetter();
var attempts = 0;

function getRandomLetter() {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function checkGuess() {
  var userGuess = document.getElementById("userGuess").value.toUpperCase();

  if (!/^[A-Z]$/.test(userGuess)) {
    document.getElementById("message").textContent = "Please enter a single letter between A and Z.";
    return;
  }

  attempts++;

  if (userGuess === secretLetter) {
    document.getElementById("message").textContent = "Congratulations! You guessed the letter '" + secretLetter + "' in " + attempts + " attempts.";
  } else if (userGuess < secretLetter) {
    document.getElementById("message").textContent = "Too low! Try a higher letter.";
  } else {
    document.getElementById("message").textContent = "Too high! Try a lower letter.";
  }

  displayAttempts();
}

function resetGame() {
  secretLetter = getRandomLetter();
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("userGuess").value = "";
  displayAttempts();
}

function displayAttempts() {
  document.getElementById("attempts").textContent = "Attempts: " + attempts;
}
