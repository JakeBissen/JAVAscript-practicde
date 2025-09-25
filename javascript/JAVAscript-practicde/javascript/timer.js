


let display = document.getElementById('display');

let second = 0;
let intervalId = null;

function formatTimer(second){

    let hours = Math.floor(second / 3600);
    let minutes = Math.floor((second % 3600) / 60 );
    let seconds = second % 60;

    return `${hours.toString()}: ${minutes.toString()}:${seconds.toString()}`;


    // this calucaltes the time and returns it as strings. Loops due to the interval.
}

document.getElementById('start').addEventListener('click' , () => {
    if(intervalId) return;
    intervalId = setInterval(() => {
        second++;
        display.textContent = formatTimer(second);
    }, 1000);
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
})

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    second = 0;
    display.textContent = formatTimer(0);
})







