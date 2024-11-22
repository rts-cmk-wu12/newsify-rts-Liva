const signupDialog = document.querySelector('#signup-dialog');
const loginDialog = document.querySelector('#login-dialog');
const loginBtn = document.querySelector('#signup__login');
const dialogSignupBtn = document.querySelector('#login__signup-btn');
const loginSubmit = document.querySelector('#login-submit');

function showLoginDialog() {
    signupDialog.close();
    loginDialog.showModal();
};

loginBtn.addEventListener('click', () => {
    showLoginDialog();
});

loginDialog.addEventListener('click', e => {
    if (e.target === loginSubmit) {
        loginDialog.close();
        location.assign('home.html');
    }

    else if (e.target === dialogSignupBtn) {
        loginDialog.close();
        signupDialog.showModal();
    }

    else if (e.target === e.currentTarget) {
        loginDialog.close();
    }
});