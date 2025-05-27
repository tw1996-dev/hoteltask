// changed for register script for both login and register sections not needed not 
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('#login-btn');
    const loginFormContainer = document.querySelector('#loginForm');
    const formCloseBtn = document.querySelector('#form-close');

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        loginFormContainer.classList.add('active');
    });

    formCloseBtn.addEventListener('click', () => {
        loginFormContainer.classList.remove('active');
    });

    loginFormContainer.addEventListener('click', (event) => {
        if (event.target === loginFormContainer) {
            loginFormContainer.classList.remove('active');
        }
    });
});