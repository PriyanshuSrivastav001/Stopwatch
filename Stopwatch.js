let display = document.querySelector('.stopwatch');

let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;

startbtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(start, 10);
});

stopbtn.addEventListener('click', ()=> {
    clearInterval(timerId);
});

resetbtn.addEventListener('click',()=> {
    clearInterval(timerId);
    display.innerHTML = `00:00:00`;
    msec = 0;
    sec = 0;
    min = 0;
});

function start() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    display.innerHTML = `${minString}:${secString}:${msecString}`;
}
