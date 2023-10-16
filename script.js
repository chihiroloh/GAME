const mole = document.querySelector(".mole");
mole.addEventListener("click", function () {
  mole.style.display = "none";
});

let timeleft = 15;
let downloadTimer;

function startTimer() {
  clearInterval(downloadTimer);
  timeleft = 15;
  downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      const countdownElem = document.getElementById("countdown");
      countdownElem.innerHTML = "GAME OVER";
      countdownElem.classList.add("game-over");
    } else {
      document.getElementById("countdown").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
}

document.querySelector(".play").addEventListener("click", startTimer);

document.querySelector(".stop").addEventListener("click", function () {
  clearInterval(downloadTimer);
  document.getElementById("countdown").innerHTML = "Press 'PLAY' to start";
});

let currMoleTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  document.getElementById("countdown").innerHTML = "Press 'PLAY' to start";
};
