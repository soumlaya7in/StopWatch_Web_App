let timeElapsed = 0;
let interval;
let isRunning = false;

const display = document.querySelector('.display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(time) {
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(timeElapsed);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
        timeElapsed++;
        updateDisplay();
    }, 1000);
    startBtn.textContent = 'Pause';
  } else {
    stopTimer();
    startBtn.textContent = 'Start';
  }
}

function stopTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timeElapsed = 0;
  updateDisplay();
  startBtn.textContent = 'Start';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);