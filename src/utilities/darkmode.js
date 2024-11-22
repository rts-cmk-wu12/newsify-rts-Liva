const settingsContainer = document.querySelector('#settings-container');
const buttonContainer = document.createElement('div');

buttonContainer.innerHTML = `
<button class="settings-info__darkmode-btn" id="darkmode-btn">Toggle darkmode</button>
<p class="settings-info__version-text">Version 4.8.15.16.23.42</p>`

buttonContainer.classList.add('settings-info');
settingsContainer.append(buttonContainer);


const colourMode = localStorage.getItem('colourMode');
let isDark = colourMode === 'dark';

const footer = document.querySelector('.footer');
const allWhiteText = document.querySelectorAll('.darkmode-white-text');
const allGreyText = document.querySelectorAll('.darkmode-grey-text');
const lightImages = document.querySelectorAll('.light-mode-img');
const darkImages = document.querySelectorAll('.dark-mode-img');

function toggleImages(showDark) {
    darkImages.forEach(img => {
        img.style.display = showDark ? "block" : "none";
    });
    lightImages.forEach(img => {
        img.style.display = showDark ? "none" : "block";
    });
}

const toggleDarkmodeBtn = document.querySelector('#darkmode-btn');
toggleDarkmodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
    footer.classList.toggle('darkmode');

    allWhiteText.forEach(whiteText => whiteText.classList.toggle('darkmode'));
    allGreyText.forEach(greyText => greyText.classList.toggle('darkmode'));

    if (!isDark) {
        localStorage.setItem('colourMode', 'dark')
        toggleImages(true);
    }
    else {
        localStorage.setItem('colourMode', 'light');
        toggleImages(false);
    }

    isDark = !isDark;
});