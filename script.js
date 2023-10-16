const mole = document.querySelector(".mole");
mole.addEventListener("click", function () {
  mole.style.display = "none";
});

document.querySelector("h1").addEventListener("click", function (e) {
  console.log("remove");
  e.target.innerHTML = "";
});

const timeleft = 10;
const downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);

let currMoleTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};
