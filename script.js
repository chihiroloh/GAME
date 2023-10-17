const mole = document.querySelector(".mole");
const holes = document.querySelectorAll(".hole");
let timeleft = 15;
let timer;
let moleTimer;
let score = 0;

function moveMole() {
  const randomHole = getRandomHole(holes);
  randomHole.appendChild(mole);
  mole.style.display = "block";
  mole.classList.add("mole-animate");
}

function startTimer() {
  const countdownElem = document.getElementById("countdown");
  (score = 0), 100;
  document.querySelector(".points span").textContent = score;
  mole.style.display = "none";
  mole.classList.remove("mole-animate");

  setTimeout(() => {
    moveMole();
    moleTimer = setInterval(moveMole, 1500);

    clearInterval(timer);
    timeleft -= 1;
    document.getElementById("countdown").innerHTML = timeleft;

    timer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(timer);
        clearInterval(moleTimer);
        const countdownElem = document.getElementById("countdown");
        countdownElem.innerHTML = "GAME OVER";
        countdownElem.classList.add("game-over");
        mole.style.display = "none";
      } else {
        timeleft -= 1;
        document.getElementById("countdown").innerHTML = timeleft;
      }
    }, 1000);
  }, 1000);
}

document.querySelector(".play").addEventListener("click", startTimer);

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(timer);
  clearInterval(moleTimer);
  mole.style.display = "none";
  mole.classList.remove("mole-animate");
  document.getElementById("countdown").innerHTML = "Press 'PLAY' to start";
  score = 0;
  document.querySelector(".points span").textContent = score;
});

window.onload = function () {
  document.getElementById("countdown").innerHTML = "Press 'PLAY' to start";
};

function getRandomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  return holes[idx];
}

mole.addEventListener("click", function () {
  mole.style.display = "none";
  mole.classList.remove("mole-animate");
  score += 10;
  document.querySelector(".points span").textContent = score;

  if (score >= 100) {
    clearInterval(timer);
    clearInterval(moleTimer);
    const countdownElem = document.getElementById("countdown");
    countdownElem.innerHTML = "YOU WIN!";
    countdownElem.classList.add("you-win");
    mole.style.display = "none";
  }
});
