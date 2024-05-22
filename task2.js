let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
// let lapsContainer = document.getElementById("laps");
let box=document.getElementById("box")
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = h + ":" + m + ":" + s;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(stopwatch, 1000);
    }
}

function flashButtonColor(button) {
    button.style.backgroundColor = "black";
    button.style.color= "white";
    setTimeout(() => {
        button.style.backgroundColor = "";
        button.style.color = "";
    }, 200); // Change color back after 200 milliseconds
}



let startButton = document.getElementById("start");
startButton.addEventListener("click", () => {
    start();
    flashButtonColor(startButton);
});

let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    flashButtonColor(pauseButton);
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = "00:00:00";
   box.innerHTML = ""; 
    timer = null;
    flashButtonColor(resetButton);
});

function lap() {
    let lapTime = display.innerHTML;
    let lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    // lapsContainer.appendChild(lapItem);
    box.appendChild(lapItem)
    flashButtonColor(lapButton);
}
let lapButton = document.getElementById("lap");
lapButton.addEventListener("click", lap);
