// CHANGE COLOR slider

// GET ROOT ELEMENT
const r = document.querySelector(':root')

/* HTML:
<li><label for="color">Pas kleur aan:</label></li>
<li><input id="color" name="color" type="range" min="0" max="360" value="0"></li>
*/

const colorSlider = document.querySelector('#color');

function changeColor() {
    r.style.setProperty('--color-shift', `${colorSlider.value}deg`);
}

colorSlider.addEventListener('change', changeColor);
colorSlider.addEventListener('mousemove', changeColor);
// SHOW OFFER button
const showOfferButton = document.querySelector('#show-offer');
const secondParagraphs = document.querySelectorAll('.second');

function showOffer() {
    showOfferButton.style.display = "none";
    secondParagraphs.forEach(paragraph => paragraph.style.display = "block")
}

showOfferButton.addEventListener('click', showOffer);