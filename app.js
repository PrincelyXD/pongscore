// PLAYER SCORES
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
// score BUTTONS
const playerOneAdd = document.querySelector("#playerOneAdd");
const playerTwoAdd = document.querySelector("#playerTwoAdd");
// RANGE
const range = document.querySelector("#range");
//  WIN-CARD
const winCard = document.querySelector("#winCard");

// WINNER NAME
const winName = document.querySelector("#v100");
// // player 1

let curr1 = (player1.innerText = 0);
playerOneAdd.addEventListener("click", p1Add);

function p1Add() {
  const value = parseInt(range.value);

  if (curr1 < value) {
    curr1++;
    player1.innerText = curr1;
  }
  if (curr1 === value && curr2 < value) {
    player1.classList.add("won");
    player2.classList.add("lost");
    winCard.style.display = "block";
    winCard.classList.add("bg-win");
    playerTwoAdd.removeEventListener("click", p2Add);
    winName.innerText = "Player One wins!";
    winName.style.display = "inline-block";
  }
}

// // player 2
let curr2 = (player2.innerText = 0);
playerTwoAdd.addEventListener("click", p2Add);

function p2Add() {
  let value = parseInt(range.value);

  if (curr2 < value) {
    curr2++;
    player2.innerText = curr2;
  }
  if (curr2 === value && curr1 < value) {
    player2.classList.add("won");
    player1.classList.add("lost");
    winCard.style.display = "block";
    winCard.classList.add("bg-win");
    playerOneAdd.removeEventListener("click", p1Add);
    winName.innerText = "Player Two wins!";
    winName.style.display = "inline-block";
  }
}

// RESET BTN CLICKED
const reset = document.querySelector("#reset");
reset.addEventListener("click", resetFunction);

function resetFunction() {
  curr1 = 0;
  player1.innerText = 0;
  player1.classList.remove("won");
  player1.classList.remove("lost");
  curr2 = 0;
  player2.innerText = 0;
  player2.classList.remove("won");
  player2.classList.remove("lost");
  range.value = 3;
  winCard.style.display = "none";
  playerOneAdd.addEventListener("click", p1Add);
  playerTwoAdd.addEventListener("click", p2Add);
  winName.style.display = "none";
}

// WHEN RANGE CHANGES reset the game.
range.addEventListener("change", resetFunction2);
function resetFunction2() {
  curr1 = 0;
  player1.innerText = 0;
  player1.classList.remove("won");
  player1.classList.remove("lost");
  curr2 = 0;
  player2.innerText = 0;
  player2.classList.remove("won");
  player2.classList.remove("lost");
  winCard.style.display = "none";
  playerOneAdd.addEventListener("click", p1Add);
  playerTwoAdd.addEventListener("click", p2Add);
  winName.style.display = "none";
}
