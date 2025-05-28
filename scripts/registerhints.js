

document.addEventListener('DOMContentLoaded', function() {
    // Get the input elements and their corresponding hint sections
    const usernameInput = document.getElementById('register-username');
    // Assumes that .register-hints for username is the next sibling of the input
    const usernameHints = usernameInput.nextElementSibling; 

    const passwordInput = document.getElementById('new-password');
    // Find the .password-wrapper div, then its next sibling element, which is the .register-hints for password
    const passwordHints = passwordInput.closest('.password-wrapper').nextElementSibling;

    // Function to show hints
    function showHints(hintsElement) {
        if (hintsElement) {
            hintsElement.classList.add('active-hints');
        }
    }

    // Function to hide hints
    function hideHints(hintsElement) {
        if (hintsElement) {
            hintsElement.classList.remove('active-hints');
        }
    }

    // Add event listeners for the 'username' input field
    if (usernameInput && usernameHints) {
        usernameInput.addEventListener('focus', function() {
            showHints(usernameHints);
        });
        usernameInput.addEventListener('blur', function() {
            hideHints(usernameHints);
        });
    }

    // Add event listeners for the 'password' input field
    if (passwordInput && passwordHints) {
        passwordInput.addEventListener('focus', function() {
            showHints(passwordHints);
        });
        passwordInput.addEventListener('blur', function() {
            hideHints(passwordHints);
        });
    }
});