document.addEventListener('DOMContentLoaded', () => {
    // LOGIN SCRIPT
    const loginBtn = document.querySelector('#login-btn');
    const loginFormContainer = document.querySelector('#loginForm');
    const formCloseBtn = document.querySelector('#form-close');

    if (loginBtn && loginFormContainer && formCloseBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();
            loginFormContainer.classList.add('active');
        });

        formCloseBtn.addEventListener('click', () => {
            loginFormContainer.classList.remove('active');
        });

        // Close the login form when clicking outside it
        loginFormContainer.addEventListener('click', (event) => {
            if (event.target === loginFormContainer) {
                loginFormContainer.classList.remove('active');
            }
        });
    }

    // REGISTER SCRIPT
    const registerForm = document.getElementById("registerForm");
    const registerBtn = document.getElementById("register-btn");
    const registerClose = document.getElementById("register-close");
    // The loginFormContainer variable is already defined above and accessible within this scope.

    if (registerForm && registerBtn && registerClose && loginFormContainer) {
        registerBtn.addEventListener("click", (event) => {
            event.preventDefault();

            // Close the login form if it's active
            if (loginFormContainer.classList.contains('active')) {
                loginFormContainer.classList.remove('active');
            }

            // Open the registration form
            registerForm.classList.add("active");
        });

        registerClose.addEventListener("click", () => {
            registerForm.classList.remove("active");
        });

        //Close the registration form when clicking outside it
        registerForm.addEventListener('click', (event) => {
            if (event.target === registerForm) {
                registerForm.classList.remove('active');
            }
        });
    }
});