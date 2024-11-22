const colourMode = localStorage.getItem('colourMode');
const isDark = colourMode === 'dark';

const applyDarkMode = () => {
    const footer = document.querySelector('.footer');
    const searchInput = document.querySelector('.darkmode-grey-input');
    const allWhiteText = document.querySelectorAll('.darkmode-white-text');
    const allGreyText = document.querySelectorAll('.darkmode-grey-text');
    const allWhiteLines = document.querySelectorAll('.darkmode-white-line');
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

    if (isDark) {
        document.body.classList.add('darkmode');
        footer?.classList.add('darkmode');
        searchInput?.classList.add('darkmode');
        allWhiteText.forEach(whiteText => whiteText.classList.add('darkmode'));
        allGreyText.forEach(greyText => greyText.classList.add('darkmode'));
        allWhiteLines.forEach(whiteLine => whiteLine.classList.add('darkmode'));
        toggleImages(true);
    } else {
        document.body.classList.remove('darkmode');
        footer?.classList.remove('darkmode');
        searchInput?.classList.remove('darkmode');
        allWhiteText.forEach(whiteText => whiteText.classList.remove('darkmode'));
        allGreyText.forEach(greyText => greyText.classList.remove('darkmode'));
        allWhiteLines.forEach(whiteLine => whiteLine.classList.remove('darkmode'));
        toggleImages(false);
    }
};

applyDarkMode();

const observer = new MutationObserver(() => {
    applyDarkMode();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});
