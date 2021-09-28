const showOfferButton = document.querySelector('#show-offer');
const secondParagraphs = document.querySelectorAll('.second');

function showOffer() {
    showOfferButton.style.display = "none";
    secondParagraphs.forEach(paragraph => paragraph.style.display = "block")
}

showOfferButton.addEventListener('click', showOffer);