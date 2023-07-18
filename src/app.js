/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let listOfCardSuits = ["♠", "♣", "♥", "♦"];
let listOfCardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let randomSuitIndex = () => {
  return Math.floor(Math.random() * listOfCardSuits.length); // random index
};
let randomValueIndex = () => {
  return Math.floor(Math.random() * listOfCardValues.length); // random index
};

//turn functions into variables
let suit = listOfCardSuits[randomSuitIndex()];
let value = listOfCardValues[randomValueIndex()];

//test
console.log(suit + value + suit);

window.onload = function() {
  //everything else
  let cardGenerated = document.querySelector("div");
  let suitDivOne = document.createElement("div");
  suitDivOne.setAttribute("id", "topOfCard");
  suitDivOne.textContent = suit;
  suitDivOne.style.textAlign = "left";
  cardGenerated.appendChild(suitDivOne);
  let valueDiv = document.createElement("div");
  valueDiv.setAttribute("id", "middleOfCard");
  valueDiv.textContent = value;
  cardGenerated.appendChild(valueDiv);
  let suitDivTwo = document.createElement("div");
  suitDivTwo.setAttribute("id", "bottomOfCard");
  suitDivTwo.textContent = suit;
  suitDivTwo.style.textAlign = "left";
  cardGenerated.appendChild(suitDivTwo);
  let button = document.querySelector("button");
  button.onclick = function() {
    let onClickSuit = listOfCardSuits[randomSuitIndex()];
    let onClickValue = listOfCardValues[randomValueIndex()];
    suitDivOne.textContent = onClickSuit;
    valueDiv.textContent = onClickValue;
    suitDivTwo.textContent = onClickSuit;
  };
};
