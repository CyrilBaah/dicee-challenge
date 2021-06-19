randomNumberGenerator = () => {
    return Math.floor(Math.random() * 6) + 1;
};

// Player One
let playerOneNumber = randomNumberGenerator();
let playerOneImageSource = './images/dice' + playerOneNumber + '.png';
let playerOneImage = document.querySelectorAll('img')[0];
playerOneImage.setAttribute("src", playerOneImageSource);

// Player Two
let playerTwoNumber = randomNumberGenerator();
let playerTwoImageSource = './images/dice' + playerTwoNumber + '.png';
let playerTwoImage = document.querySelectorAll('img')[1];
playerTwoImage.setAttribute("src", playerTwoImageSource);

if (playerOneNumber > playerTwoNumber) {
    document.querySelector('h1').innerText = "Player 1 wins"
} else if (playerTwoNumber > playerOneNumber) {
    document.querySelector('h1').innerText = "Player 2 wins"
} else {
    document.querySelector('h1').innerText = "It's a draw"
}
