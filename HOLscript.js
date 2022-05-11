
// You are tasked with building a Higher or Lower Guessing Game! The application should allow a user to: submit a number as their guess and receive response that their guess needs to be "higher" or "lower". When the user guesses the correct number, the app should congratulate them.

const computersAnswer = Math.floor(Math.random() * 101);
console.log(computersAnswer)

function submitGuess() {

    //UserNumber 
    /* is this happening just once with the computer, looping back through with the answer the user submitted, or is it each time they click, like Rock Paper Scissors? 
    How long is the function holding their answer? and the computers answer?  */

    //retrive the players name
    let name = document.querySelector('#name').value
    
    //retrive the string number  and convert it to a number
    let stringNumber = document.querySelector('#number').value
    let userNumber = parseInt(stringNumber)

    console.log(userNumber) //parseInt
    
    //account for possible input values
    if (computersAnswer === userNumber) {
        alert(`Congratulations ${name}!! You guessed correctly! Thanks for playing!`)
    }
    else if (userNumber < computersAnswer && userNumber < 101 && userNumber >= 0) {
        alert(`${name} your guess needs to be higher! Try again.`)
    }
    else if (userNumber > computersAnswer && userNumber < 101 && userNumber >= 0 ) {
        alert(`${name} your guess needs to be lower! Try again.`)
    }
    else if (userNumber < 0 || userNumber > 100) {
        alert(`${name}, please pick a number between 0 - 100.` )
    }
    else {
        alert("That's not a number buddy! Try again!")
    }
}


