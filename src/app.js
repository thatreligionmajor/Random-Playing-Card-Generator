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

const randomSuitIndex = () => {
  return Math.floor(Math.random() * listOfCardSuits.length); // random index
};
let randomValueIndex = () => {
  return Math.floor(Math.random() * listOfCardValues.length); // random index
};

window.onload = function() {
  const suitIndex = randomSuitIndex();
  let suit = listOfCardSuits[suitIndex];
  let value = listOfCardValues[randomValueIndex()];
  //test
  console.log(suit + value + suit);

  const cardGenerated = document.querySelector("div");
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
  //onload suit color
  function getSuitColor(suitIndex) {
    switch (suitIndex) {
      case 0: // ♠ - Spades
        return "#668ba4";
      case 1: // ♣ - Clubs
        return "#668ba4";
      case 2: // ♥ - Hearts
        return "#c94a43";
      case 3: // ♦ - Diamonds
        return "#c94a43";
    }
  }
  cardGenerated.style.color = getSuitColor(suitIndex);
  //button
  let button = document.querySelector("button");
  button.onclick = function() {
    let suitIndex = randomSuitIndex(); //chatgpt line color randomly applying
    let onClickSuit = listOfCardSuits[suitIndex];
    let onClickValue = listOfCardValues[randomValueIndex()];
    suitDivOne.textContent = onClickSuit;
    valueDiv.textContent = onClickValue;
    suitDivTwo.textContent = onClickSuit;
    //onclick suit color not working
    function getSuitColor(suitIndex) {
      switch (suitIndex) {
        case 0: // ♠ - Spades
          return "#668ba4";
        case 1: // ♣ - Clubs
          return "#668ba4";
        case 2: // ♥ - Hearts
          return "#c94a43";
        case 3: // ♦ - Diamonds
          return "#c94a43";
      }
    }
    cardGenerated.style.color = getSuitColor(suitIndex);
  };
};
