const randNum = function () {
  console.log(newCells);
};

const createCells = function () {
  const bingoDesk = document.querySelector(".bingo_desk");
  for (let i = 0; i < 76; i++) {
    bingoDesk.innerHTML += `<div class="cells">${i + 1}</div>`;
    console.log(i + 1);
  }
};

const generateRandNum = function () {
  const random = Math.floor(Math.random() * 76);
  const showRand = document.getElementById("randNum");
  showRand.innerText = "Number is: " + random;
};

window.onload = function () {
  createCells();
  const randomNum = document.getElementById("centerObj");
  randomNum.addEventListener("click", generateRandNum);
};
