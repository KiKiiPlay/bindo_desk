const createCells = function () {
  const bingoDesk = document.querySelector(".bingo_desk");
  for (let i = 0; i < 76; i++) {
    bingoDesk.innerHTML += `<div class="cells">${i + 1}</div>`;
    console.log(i + 1);
  }
};

window.onload = function () {
  createCells();
};
