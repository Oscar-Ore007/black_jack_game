let firstCard = getRandomCard()
let secondCard = getRandomCard()


let cards = [firstCard, secondCard] //ordered list of items 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//made the function return a random number between 1 and 13 
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1 
    if ( randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame () {
    renderGame()
}

function renderGame() {
    cardsEl.textContent =  "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    //replaced with array 
    sumEl.textContent = "Sum:" + sum
  
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
   messageEl.textContent = message 
}
 
   function newCard() {
       console.log("Drawing a new card from the deck!")

       let card = getRandomCard()
       sum += card 
       cards.push(card)
       console.log(cards)
       renderGame()
   }



