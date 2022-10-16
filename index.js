const bingoDesk = document.querySelector(".bingo_desk");
const readyListOfCells = document.getElementsByClassName("cells"); //difference betwen query and class
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

// TODO: Manage problem with functionality of colorizing randomly chosen cells
const generateRandNum = function () {
  const textRand = document.getElementById("randNum");
  const randNumber = Math.floor(Math.random() * randArr.length) + 1;
  textRand.innerText = randNumber;
  index = randNumber - 1;

  readyListOfCells[index].classList.add("newBackground");
  randArr.splice(randNumber, 1)[0];
};

window.onload = function () {
  createCells();
  createRandArr();
  // difference onclick and eventlistener
  randomButton.addEventListener("click", generateRandNum);
  console.log(randArr);
};
