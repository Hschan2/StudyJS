// const images = ["1.jpg", "2.jpg", "3.jpg"];
const images = ["1.MOV", "2.MOV", "3.MOV"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector(".bgImage");

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);