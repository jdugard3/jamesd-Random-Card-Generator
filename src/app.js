/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  let suit = ["♦", "♥", "♠", "♣"];
  let value = [
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
    "K",
    "A"
  ];

  //function that will randomly select a suit & value from each array
  function generateRandomSuit() {
    return suit[Math.floor(Math.random() * suit.length)];
  }
  function generateRandomValue() {
    return value[Math.floor(Math.random() * value.length)];
  }

  function generateCard() {
    let randomSuit = generateRandomSuit();
    let randomValue = generateRandomValue();
    document.querySelector(".top").innerHTML = randomSuit;
    document.querySelector(".mid").innerHTML = randomValue;
    document.querySelector(".bottom").innerHTML = randomSuit;

    if (randomSuit === "♦" || randomSuit === "♥") {
      document.querySelector(".top").style.color = "red";
      document.querySelector(".bottom").style.color = "red";
    }
  }
  // generateCard();
};
//write your code here

// button code
