const block = document.querySelector(".block");
const triangle = document.querySelector(".square");

let posX = 90;
let posY = 0;

const move = () => {
  if (posY <= 190 && posX <= 280) {
    posY += 16;
    posX += 9;
    triangle.style.top = `${posY}px`;
    triangle.style.left = `${posX}px`;
    setTimeout(move, 100);
  } else if (posX <= -90) {
    posX += 9;
    triangle.style.right = `${posX}px`;
    setTimeout(move, 100);
  }
};
move();

/----------/;

// const vremuy = document.querySelector(".time");
// const word = document.querySelector(".rezult");
// let second = 0;
// const time = setInterval(() => {
//   if (second === 59) vremuy.innerText = "1:00";
//   else vremuy.innerText = ++second;
// }, 1000);
// setTimeout(() => {
//   word.innerText = "Минута прошла!";
//   clearInterval(time);
// }, 60000);
