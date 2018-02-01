// Alphabet array.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, guesses left, and letters guessed. 
var wins = 0
var losses = 0
var guessLeft = 50
var guessed = []


// This function is run whenever the user presses a key.
document.onkeyup = function (event){ 

    // Determines which key was pressed.
    var userGuess = event.key
    // console.log(userGuess)

    // Randomly chooses a choice from the computerChoices array. This is the Computer's guess.
    var computerThink = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    // console.log(computerThink)

    //insert for loop here that runs statements while guesses left >0. Countdown. 


    // This logic determines the outcome of the game (win/loss), and adjusts the appropriate number. It also incorporates a backwards counter for the amount of tries left. 

    // for (i = 0; i < computerChoices.length; i++){
        
        if (userGuess === computerThink) {
            wins++
            guessLeft--
            alert("You guessed right. Nice work!")
        }

        else if(guessLeft===0){
            alert("Game Over! Click Refresh to play again.")
        }
    

        else {
            losses++
            guessLeft--
            guessed.push(userGuess)
            console.log(guessed)
        }
    

    // html for the scoreboard
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessLeft + "</p>" +
        "<p>Your Guesses so far: " + guessed + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;

    
}