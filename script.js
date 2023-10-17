const mole = document.querySelector(".mole");
const bomb = document.querySelector(".bomb");
const holes = document.querySelectorAll(".hole");
let timeleft = 15;
let timer;
let moleTimer;
let score = 0;

function moveMole() {
  const randomHole = getRandomHole(holes);
  const randomChoice = Math.random() < 0.5 ? "mole" : "bomb";
  if (randomChoice === "mole") {
    randomHole.appendChild(mole);
    mole.style.display = "block";
    mole.classList.add("mole-animate");
    bomb.style.display = "none";
  } else {
    randomHole.appendChild(bomb);
    bomb.style.display = "block";
    bomb.classList.add("bomb-animate");
    mole.style.display = "none";
  }
}

function startTimer() {
  timeleft = 15;
  const timerDisplayElement = document.getElementById("countdown");
  timerDisplayElement.innerHTML = timeleft;

  score = 0;
  document.querySelector(".points span").textContent = score;
  mole.style.display = "none";
  mole.classList.remove("mole-animate");

  setTimeout(() => {
    moveMole();
    moleTimer = setInterval(moveMole, 1500);

    clearInterval(timer);

    timer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(timer);
        clearInterval(moleTimer);
        timerDisplayElement.innerHTML = "GAME OVER";
        timerDisplayElement.classList.add("game-over");
        timerDisplayElement.classList.remove("you-win");
        mole.style.display = "none";
      } else {
        timeleft -= 1;
        timerDisplayElement.innerHTML = timeleft;
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

  bomb.addEventListener("click", function () {
    bomb.style.display = "none";
    bomb.classList.remove("bomb-animate");
    score -= 50;
    document.querySelector(".points span").textContent = score;

    clearInterval(timer);
    clearInterval(moleTimer);
    const timerDisplayElement = document.getElementById("countdown");
    timerDisplayElement.innerHTML = "GAME OVER";
    timerDisplayElement.classList.add("game-over");
    timerDisplayElement.classList.remove("you-win");
  });

  if (score >= 100) {
    clearInterval(timer);
    clearInterval(moleTimer);
    const timerDisplayElement = document.getElementById("countdown");
    timerDisplayElement.innerHTML = "YOU WIN!";
    timerDisplayElement.classList.add("you-win");
    timerDisplayElement.classList.remove("game-over");
    mole.style.display = "none";
  }
});
