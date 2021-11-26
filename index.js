var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgsrc1 = "images/dice" + randomNumber1 + ".png";
var imgsrc2 = "images/dice" + randomNumber2 + ".png";

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

img1.src = imgsrc1;
img2.src = imgsrc2;

if (randomNumber1 > randomNumber2) {
    h1.innerText = "Player 1 Wins!!!";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Wins!!!";
} else {
    h1.innerHTML = "Draw";
}