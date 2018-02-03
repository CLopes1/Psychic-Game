// Alphabet array.
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses left, and letters guessed. 
var wins = 0
var losses = 0
var maxGuesses = 10
var guessLeft = maxGuesses
var wrongGuess = 0
var guessed = []
var computerChoice = letterGuess()
console.log("computer choice=" + computerChoice)



// computer chooses a letter from the computerChoices array. This is the Computer's guess.

function letterGuess () {
return letters[Math.floor(Math.random() * letters.length)]
}

function resetGame () {
    guessLeft = maxGuesses
    guessed =[]
}


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key
    console.log(userGuess)


    // This logic determines the outcome of the game (win/loss), and adjusts the appropriate number. It also incorporates a backwards counter for the amount of tries left. 


    if (userGuess === computerChoice) {
        wins++
        alert("You guessed right. Nice work!")
        computerChoice = letterGuess()
        console.log("computer choice=" + computerChoice)
        resetGame()
    } 

    if (userGuess != computerChoice) {
        wrongGuess++
        guessLeft--
        guessed.push(userGuess)
    }

    if (guessLeft === 0) {
        losses++
        alert("Game Over! ")
        resetGame()
    }

    // html for scores
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your Guesses so far: " + guessed + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


}