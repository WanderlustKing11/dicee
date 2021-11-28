

var randomNumber1 = Math.random();
randomNumber1 = (Math.floor(randomNumber1*6)+1);

if (randomNumber1 === 6) {
    document.querySelector(".dice1").setAttribute("src", "images/dice6.png");
} else if (randomNumber1 === 5) {
    document.querySelector(".dice1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 4) {
    document.querySelector(".dice1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 3) {
    document.querySelector(".dice1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 2) {
    document.querySelector(".dice1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 1) {
    document.querySelector(".dice1").setAttribute("src", "images/dice1.png");
}

var randomNumber2 = Math.random();
randomNumber2 = (Math.floor(randomNumber2*6)+1);

if (randomNumber2 === 6) {
    document.querySelector(".dice2").setAttribute("src", "images/dice6.png");
} else if (randomNumber2 === 5) {
    document.querySelector(".dice2").setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 4) {
    document.querySelector(".dice2").setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 3) {
    document.querySelector(".dice2").setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 2) {
    document.querySelector(".dice2").setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 1) {
    document.querySelector(".dice2").setAttribute("src", "images/dice1.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.querySelector(".flag1").style.display = "inline";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  document.querySelector(".flag2").style.display = "inline";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}

console.log("Welcome to Dicee Website!");
console.log("Recently: created Random Number Generator for P1 & P2. Displaying the winners in P1");
console.log("Currenlty working on:   adding a flag icon in front of the h2 elements through JS.")

// <img class="dice1" src="images/dice6.png" alt="dice-6">
