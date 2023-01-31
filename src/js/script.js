const domMs = document.querySelector('.ms');
const domSec = document.querySelector('.seconds');
const domMin = document.querySelector('.minutes');
const domLaps = document.querySelector('.laps');


const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
const btnReset = document.querySelector('.reset');
const btnLap = document.querySelector('.lap');

const hz = 100;
let myStopWatch;
let timer = 0;
let runningState = false;

function updateTimer(argMs, argSeconds, argMinutes, reset = false) {
  domMs.textContent = argMs.toString().padEnd(3, "0");
  domSec.textContent = argSeconds.toString().padStart(2, "0");
  domMin.textContent = argMinutes.toString().padStart(2, "0");

  if (reset) timer = 0;
}


const start = () => {
  if (runningState) return;
  runningState = true;
  myStopWatch = setInterval(() => {
    timer += 1 / hz;

    let msVal = Math.floor((timer - Math.floor(timer)) * 100);
    let secondsVal = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minutesVal = Math.floor(timer / 60);

    updateTimer(msVal, secondsVal, minutesVal);

  }, 1000 / hz)
}

const stop = () => {
  runningState = false;
  clearInterval(myStopWatch);
}

const reset = () => {
  if (runningState) {
    stop();
  } else {
    updateTimer(0, 0, 0, true);
  }
};

const addLap = () => {
  domLaps.innerHTML += `<li class="lap">${domMin.textContent} : ${domSec.textContent} : ${domMs.textContent}</li>`;
}

btnStart.addEventListener("click", () => {
  start();
})

btnStop.addEventListener("click", () => {
  stop();
});

btnReset.addEventListener("click", () => {
  reset();
});

btnLap.addEventListener("click", () => {
  addLap();
})


