const splashScreen = document.querySelector('#splash-screen');
const onboarding = document.querySelector('#onboarding');

function splashScreenHidden() {
    splashScreen.style.display = 'none';
}

function onboardingHidden() {
    onboarding.style.display = 'none';
}

onboardingHidden()

function onboardingShow() {
    onboarding.style.display = 'flex';
}

setTimeout(function() {
    splashScreenHidden();
    onboardingShow();
}, 5000);