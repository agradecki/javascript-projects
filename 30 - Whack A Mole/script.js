const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

const randomTime = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const randomHole = function (holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    console.log("Ah nah thats the same one bud");
    return randomHole(holes);
  }
  console.log(hole);

  lastHole = hole;
  return hole;
};

const peep = function () {
  const time = randomTime(300, 1200);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
};

const startGame = function () {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  setTimeout(() => (timeUp = true), 10000);
};

const bonk = function (e) {
  if (!e.isTrusted) return;
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
};

moles.forEach((mole) => mole.addEventListener("click", bonk));
