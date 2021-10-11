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

// CHANGE SIZE APP
/* HTML:

<label for="size">Pas grootte van klok aan:</label>
<input id="clock-size" name="size" type="range" min="100" max="300">
*/


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
/* 
<script>
// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}
</script>
*/