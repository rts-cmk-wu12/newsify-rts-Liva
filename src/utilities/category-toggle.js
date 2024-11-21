import sectionsData from '../json/sections.json';

const categories = sectionsData.sections;
console.log(categories);

const settingsContainer = document.querySelector('#settings-container');
let toggleStates = JSON.parse(localStorage.getItem('toggleStates')) || {};

if (!localStorage.getItem('toggleStates')) {
    toggleStates = categories.reduce((acc, _, index) => {
        acc[`toggle-${index}`] = true;
        return acc;
    }, {});
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

function saveToggleStates() {
    localStorage.setItem('toggleStates', JSON.stringify(toggleStates));
}

categories.forEach((category, index) => {
    const categoryToggleContainer = document.createElement('div');
    const toggleId = `toggle-${index}`;

    categoryToggleContainer.innerHTML = `
    <div class="settings__category">
    <img src="icon/newsify-logo.svg" alt="logo" class="settings__logo">
            ${category}
    </div>
    <div class="toggle">
            <label class="switch" id="${toggleId}">
                <input type="checkbox" class="switch-input" ${toggleStates[toggleId] ? 'checked' : ''}>
                <span class="toggle-slider"></span>
            </label>
        </div>`

    categoryToggleContainer.classList.add('settings')
    settingsContainer.append(categoryToggleContainer);

    const checkbox = categoryToggleContainer.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        toggleStates[toggleId] = checkbox.checked;
        saveToggleStates();
    });
});