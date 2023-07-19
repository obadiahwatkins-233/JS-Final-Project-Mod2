// Generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Game variables
  var secretNumber = getRandomNumber(1, 100);
  var attempts = 0;
  
  // Function to check the user's guess
  function checkGuess() {
    var userGuess = parseInt(document.getElementById("userGuess").value);
  
    if (isNaN(userGuess)) {
      setMessage("Nice Try!!__That's not a number!!__Please enter a valid number!!");
      return;
    }
  
    attempts++;
  
    if (userGuess === secretNumber) {
      setMessage(
        `Congratulations! You guessed the number in ${attempts} attempts.`
      );
    } else if (userGuess < secretNumber) {
      setMessage("Too low! Try a higher number.");
    } else {
      setMessage("Too high! Try a lower number.");
    }
  }

 // Function to display # of attempts

  function displayAttempts() {
    document.getElementById("message").textContent = "Attempts: " + attempts;
  }
  
  // Function to display messages
  function setMessage(msg) {
    document.getElementById("message").textContent = msg;
  }