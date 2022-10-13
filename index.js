const createCells = function () {
  const bingoDesk = document.getElementById("bingo_desk");
  for (let i = 0; i < 76; i++) {
    const newCells = document.createElement("div");
    const cellsNum = document.createElement("h4");
    cellsNum.innerText = i + 1;
    cellsNum.classList.add("cellsNum");
    newCells.classList.add("cells");
    newCells.appendChild(cellsNum);
    bingoDesk.appendChild(newCells);
  }
};

window.onload = function () {
  createCells();
};
