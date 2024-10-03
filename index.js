let startTime,
  updatedTime,
  difference = 0;
let timerInterval;
let isPaused = true;

const displayTimer = document.getElementById("timer");
const startPauseButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const formatTime = (ms) => {
  const hours = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const updateTimer = () => {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  displayTimer.innerHTML = formatTime(difference);
};

const startTimer = () => {
  startTime = new Date().getTime() - difference;
  timerInterval = setInterval(updateTimer, 1000);
};

const toggleTimer = () => {
  if (isPaused) {
    startTimer();
    startPauseButton.innerHTML = "Pause";
  } else {
    clearInterval(timerInterval);
    startPauseButton.innerHTML = "Start";
  }
  isPaused = !isPaused;
};

const stopTimer = () => {
  clearInterval(timerInterval);
  displayTimer.innerHTML = formatTime(difference);
  isPaused = true;
  startPauseButton.innerHTML = "Start";
};

const resetTimer = () => {
  clearInterval(timerInterval);
  difference = 0;
  displayTimer.innerHTML = "00:00:00";
  isPaused = true;
  startPauseButton.innerHTML = "Start";
};

startPauseButton.addEventListener("click", toggleTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
