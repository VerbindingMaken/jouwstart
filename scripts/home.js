const secondHand = document.querySelector('#second-hand');
const minuteHand = document.querySelector('#minute-hand');
const hourHand = document.querySelector('#hour-hand');

(function setNow() {
  let now = new Date();
  rotateSecondHand(now)
  rotateMinuteHand(now)
  rotateHourHand(now)
}())

function rotateSecondHand(now) {
  if (now.getSeconds() === 0) {
    secondHand.style.transition = "none";
    let secondRotateDegrees = (now.getSeconds() / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondRotateDegrees}deg)`;
    secondHand.style.transform = "transform .2s cubic-bezier(.26,.91,.62,1.36)";
  } 
  else {
    let secondRotateDegrees = (now.getSeconds() / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondRotateDegrees}deg)`;
  }
}

function rotateMinuteHand(now) {
  if (now.getMinutes() === 0) {
    minuteHand.style.transition = "none";
    let secondRotateDegrees = (now.getMinutes() / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${secondRotateDegrees}deg)`;
    minuteHand.style.transform = "transform .2s cubic-bezier(.26,.91,.62,1.36)";
  } 
  else {
  let minuteRotateDegrees = (now.getMinutes() / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteRotateDegrees}deg)`;
  }
}

function rotateHourHand(now) {
  if (now.getHours() === 0) {
    hourHand.style.transition = "none";
    let secondRotateDegrees = (now.getHours() / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${secondRotateDegrees}deg)`;
    hourHand.style.transform = "transform .2s cubic-bezier(.26,.91,.62,1.36)";
  } 
  else {
  let hourRotateDegrees = (now.getHours() / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourRotateDegrees}deg)`;
  }
}

function showTime() {
  let now = new Date();
  rotateSecondHand(now);
  if (now.getSeconds() === 0) {
    rotateMinuteHand(now);
  }
  if (now.getMinutes() === 0) {
    rotateHourHand(now);
  }
}
setInterval(showTime, 1000);

/* HOME PAGE call to action */
const showStartButton = document.querySelector('#show-start');

function showStart() {
    window.location.href = "start-maken.html#start-maken"
}

showStartButton.addEventListener('click', showStart);




// CHANGE COLOR slider
/*
// GET ROOT ELEMENT
const r = document.querySelector(':root')

HTML:
<li><label for="color">Pas kleur aan:</label></li>
<li><input id="color" name="color" type="range" min="0" max="360" value="0"></li>


const colorSlider = document.querySelector('#color');

function changeColor() {
    r.style.setProperty('--color-shift', `${colorSlider.value}deg`);
}

colorSlider.addEventListener('change', changeColor);
colorSlider.addEventListener('mousemove', changeColor);

*/

// CHANGE SIZE CLOCK APP
/* HTML:

<label for="size">Pas grootte van klok aan:</label>
<input id="clock-size" name="size" type="range" min="100" max="300">



// Select range slider
const clockSlider = document.querySelector('#clock-size');
// Select css clock-size variable


//Change css clock-size variable
function changeClockSize() {
    r.style.setProperty('--clock-size', `${clockSlider.value}px`);
}

//listen from input from slider and start function
clockSlider.addEventListener('change', changeClockSize);
clockSlider.addEventListener('mousemove', changeClockSize);

*/
