const bingoDesk = document.querySelector(".bingo_desk");
const readyListOfCells = document.getElementsByClassName("cells"); //difference betwen query and class
console.log(readyListOfCells);
const randArr = [];
const randomButton = document.getElementById("centerObj");

const createCells = function () {
  for (let i = 0; i < 76; i++) {
    bingoDesk.innerHTML += `<span class="cells">${i + 1}</span>`;
  }
};

const createRandArr = function () {
  for (let i = 0; i < 76; i++) {
    randArr.push(i + 1);
  }
};

const generateRandNum = function () {
  console.log("randArr before", randArr);
  const textRand = document.getElementById("randNum");
  const randNumber = Math.floor(Math.random() * randArr.length) + 1;
  console.log("randNumber ", randNumber);

  const chunk = randArr.splice(randNumber, 1);
  console.log("chunk ", chunk);
  const cellFound = readyListOfCells[chunk[0] - 1];
  console.log("cell found ", cellFound);
  cellFound.classList.add("newBackground");
  textRand.innerText = chunk[0];

  console.log("randArr before", randArr);
};

window.onload = function () {
  createCells();
  createRandArr();
  // difference onclick and addEventlistener
  randomButton.addEventListener("click", generateRandNum);
  console.log(randArr);
};
