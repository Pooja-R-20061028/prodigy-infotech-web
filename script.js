let hours = 0, minutes = 0, seconds = 0;
let timerDisplay = document.getElementById("timer");
let interval = null;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${h}:${m}:${s}`;
}

document.getElementById("start").onclick = () => {
    if (interval) return;

    interval = setInterval(() => {
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
};

document.getElementById("stop").onclick = () => {
    clearInterval(interval);
    interval = null;
};

document.getElementById("reset").onclick = () => {
    clearInterval(interval);
    interval = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();
};
