let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      let draw = document.querySelector("#draw");
      if (click) {
        draw.innerHTML = "Now you can draw";
      } else {
        draw.innerHTML = "You are not allowed to draw";
      }
    }
  });

  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

const createBoard = (size) => {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
};

const getSize = () => {
  let input = prompt("What will be the size of the board?");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Provide a number between 1 and 100";
  } else {
    message.innerHTML = "You may now play!";
    return input;
  }
};

const colorDiv = (event) => {
  if (click) {
    let target = event.target;
    if (color === "random") {
      target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      target.style.backgroundColor = "black";
    }
  }
};
const setColor = (colorChoice) => {
  color = colorChoice;
};

const resetBoard = () => {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
};
