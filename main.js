document.addEventListener("DOMContentLoaded", function(){
 createBoard(16);
})

const createBoard = (size) => {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}