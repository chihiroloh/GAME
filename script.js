const mole = document.querySelector(".mole");
mole.addEventListener("click", function () {
  mole.style.display = "none";
});

document.querySelector("h1").addEventListener("click", function (e) {
  console.log("remove");
  e.target.innerHTML = "";
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

let currMoleTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  // setGame(); // If you have a function called setGame, you can call it here
};
