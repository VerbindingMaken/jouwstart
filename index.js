/* Document sections */
const rootDoc = document.querySelector('html');
const popMenu = document.querySelector('#pop-menu-container');
const popNav = document.querySelector('#pop-nav');
const header = document.querySelector('#header');
const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

/* Show and hide pop menu */
const adjustTextButton = document.querySelector('#adjust-text');
const showPopMenuButton = document.querySelector('#show-pop-menu');

function showAdjustText() {
    header.style.display = "none";
    content.style.display = "none";
    footer.style.display = "none";
    popNav.style.display = "none"
    popMenu.style.display = "block"
}

function showPopMenu(e) {
    header.style.display = "none";
    content.style.display = "none";
    footer.style.display = "none";
    popNav.style.display = "block"
    popMenu.style.display = "block"
}
adjustTextButton.addEventListener('click', showAdjustText);
showPopMenuButton.addEventListener('click', showPopMenu);

const goBackButton = document.querySelector('#go-back');

function goBack() {
    popMenu.style.display = "none";
    header.style.display = "flex";
    content.style.display = "grid";
    footer.style.display = "block";
}

goBackButton.addEventListener('click', goBack);

/* Navigate from pop menu */
const navButtons = document.querySelectorAll('.nav-button');

function gotToPage(e) {
    goBack()
    window.location.href= `${e.target.getAttribute('data-url')}`  
}

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', gotToPage)
}

/* ADJUST TEXT SIZE */

const adjustSizeField = document.querySelector("#adjust-text-size");
const smallerButton = document.querySelector('#smaller');
const middleButton = document.querySelector('#middle');
const largerButton = document.querySelector('#larger');
const smallLabel = document.querySelector('#small-size-label');
const middlelLabel = document.querySelector('#middle-size-label');
const largelLabel = document.querySelector('#large-size-label');

function adjustSize(e) {
    let action = e.target.getAttribute('id')
    switch (action) {
        case "smaller":
            rootDoc.style.setProperty('font-size', 'calc(.6em + .2vw)');
            smallerButton.style.display = "none";
            middleButton.style.display = "block";
            largerButton.style.display = "block";
            smallLabel.style.display = "block";
            middlelLabel.style.display = "none";
            largelLabel.style.display = "none";
            adjustSizeField.style.fontSize = ".95em"
            break;
        case "middle":
            rootDoc.style.setProperty('font-size', 'calc(.8em + .4vw)');
            smallerButton.style.display = "block";
            middleButton.style.display = "none";
            largerButton.style.display = "block";
            smallLabel.style.display = "none";
            middlelLabel.style.display = "block";
            largelLabel.style.display = "none";
            adjustSizeField.style.fontSize = "1em"
            break;
        case "larger":
            rootDoc.style.setProperty('font-size', 'calc(1em + .6vw)');
            smallerButton.style.display = "block";
            middleButton.style.display = "block";
            largerButton.style.display = "none";
            smallLabel.style.display = "none";
            middlelLabel.style.display = "none";
            largelLabel.style.display = "block";
            adjustSizeField.style.fontSize = "1.05em"
            break;
        default:
            break;
    }
}

smallerButton.addEventListener('click', adjustSize);
middleButton.addEventListener('click', adjustSize);
largerButton.addEventListener('click', adjustSize);

/* Adjust Background color */
const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');
const adjustLightDarkLabel = document.querySelector('#adjust-light-dark-label');

function showLightButton() {
    lightButton.style.display = "block";
    darkButton.style.display = "none";
    adjustLightDarkLabel.textContent = "Achtergrond is donker";
}

function showDarkButton() {
    lightButton.style.display = "none";
    darkButton.style.display = "block";
    adjustLightDarkLabel.textContent = "Achtergrond is licht";
}

function setColorTheme() {
    let colorTheme = localStorage.getItem("colorTheme");
    if (colorTheme === "light-theme") {
        rootDoc.setAttribute('class', 'light-theme');
        return showDarkButton()
    } 
    else if (colorTheme === "dark-theme") {
        rootDoc.setAttribute('class', 'dark-theme');
        return showLightButton();
    }
    else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return showDarkButton()
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return showLightButton()
    }
}
setColorTheme()

const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

colorSchemeQuery.addEventListener('change', setColorTheme);



function chooseLightDark(e) {
    let action = e.target.getAttribute('id');
    switch (action) {
        case "light":
            localStorage.setItem("colorTheme", "light-theme")
            break;
        case "dark":
            localStorage.setItem("colorTheme", "dark-theme")
            break;
        default:
            break;
    }
    setColorTheme()      
}

lightButton.addEventListener('click', chooseLightDark);
darkButton.addEventListener('click', chooseLightDark);

/* Change colors by shifting hue */

const colorSlider = document.querySelector('#color-slider')

function changeColor(e) {
    document.documentElement.style.setProperty('--color-shift', `${this.value}deg`);
}

colorSlider.addEventListener('change', changeColor);
colorSlider.addEventListener('mousemove', changeColor);




