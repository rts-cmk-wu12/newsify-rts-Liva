const loginDialog = document.querySelector('#login-dialog');
const signupDialog = document.querySelector('#signup-dialog');
const signupBtn = document.querySelector('#signup-btn');
const dialogLoginBtn = document.querySelector('#signup__login-btn');
const signupSubmit = document.querySelector('#signup-submit');

function showSignupDialog() {
    loginDialog.close();
    signupDialog.showModal();
};

signupBtn.addEventListener('click', () => {
    signupDialog.showModal();
})

signupDialog.addEventListener('click', e => {
    if (e.target === signupSubmit) {
        signupDialog.close();
        localStorage.setItem('loggedin', true);
        location.assign('home.html');
    }

    else if (e.target === dialogLoginBtn) {
        signupDialog.close();
        loginDialog.showModal();
    }

    else if (e.target === e.currentTarget) {
        signupDialog.close();
    }
});