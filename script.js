let digitalElement = document.querySelector('.digital');
let secElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let hoursElement = document.querySelector('.p_h');

// Function to get the time (seconds, minutes and hours)
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Set the digital clock using the function "FixZero" to fix the 0 problem.
    digitalElement.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    // Calculate the pointers moviment of the analogic clock
    let secDeg = ((360 / 60) * seconds) - 90;
    let minDeg = ((360 / 60) * minutes) - 90;
    let hoursDeg = ((360 / 12) * hours) - 90;

    // Apply script on the css style to rotate the pointers
    secElement.style.transform = `rotate(${secDeg}deg)`
    minElement.style.transform = `rotate(${minDeg}deg)`
    hoursElement.style.transform = `rotate(${hoursDeg}deg)`
}

// function to fix the 0
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

// repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
setInterval(updateClock, 1000);
updateClock();