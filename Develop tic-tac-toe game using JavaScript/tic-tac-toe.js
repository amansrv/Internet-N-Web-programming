let board = document.getElementById("board");
let cells = board.getElementsByTagName("td");
let turn = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.innerHTML === "") {
      this.innerHTML = turn;
      turn = turn === "X" ? "O" : "X";
    }
  });
}
