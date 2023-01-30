const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ms = document.querySelector('.ms');
const laps = document.querySelector('.laps');

const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const btnLap = document.querySelector('.lap');

let timer = 0;
const hz = 60;
let timerInterval;
let runningState = false;

function updateTimer(argMs, argseconds, argminutes, reset = false) {
  ms.textContent = argMs.toString().padEnd(4, "0");
  seconds.textContent = argseconds.toString().padStart(2, "0");
  minutes.textContent = argminutes.toString().padStart(2, "0");

  if (reset) timer = 0;
}

const start = () => {
  if (runningState) return;
  runningState = true;
  console.log("fuck");
  timerInterval = setInterval(() => {
    timer += 1 / hz;

    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secondsVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minutesVal = Math.floor(timer / 60);

    updateTimer(msVal, secondsVal, minutesVal);

  }, 1000 / hz)
}

const stop = () => {
  runningState = false;
  clearInterval(timerInterval);
}

const lap = () => {
  // laps.innerHTML += `hei`;
  laps.innerHTML += `<li>${minutes.textContent} : ${seconds.textContent} : ${ms.textContent}</li>`;
}

btnStart.addEventListener("click", (e) => {
  start();
});

btnStop.addEventListener("click", (e) => {
  stop();
});

btnReset.addEventListener("click", (e) => {
  if (runningState) {
    stop();
  } else {
    updateTimer(0, 0, 0, true)
    laps.innerHTML = "";
  }
});

btnLap.addEventListener("click", (e) => {
  lap();
})
