document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("register-username");
    const passwordInput = document.getElementById("new-password");
    const emailInput = document.getElementById("new-email");
    const registerBtn = document.getElementById("registerbtn");
    const form = document.querySelector(".register-form");

    const lengthHint = document.getElementById("length-hint");
    const specialCharHint = document.getElementById("special-char-hint");
    const passLengthHint = document.getElementById("pass-length-hint");
    const uppercaseHint = document.getElementById("uppercase-hint");
    const numberHint = document.getElementById("number-hint");
    const specialCharPassHint = document.getElementById("pass-special-char-hint");

    function validateUsername() {
    const username = usernameInput.value;
    const isLengthValid = username.length >= 6;
    const isSpecialCharFree = /^[a-zA-Z0-9]*$/.test(username);

    lengthHint.innerHTML = isLengthValid ? "✅ Minimum 6 characters" : "Minimum 6 characters";
    lengthHint.style.color = isLengthValid ? "green" : "";

    if (username.length > 0 && isSpecialCharFree) {
        specialCharHint.innerHTML = "✅ No special characters";
        specialCharHint.style.color = "green";
    } else {
        specialCharHint.innerHTML = "No special characters";
        specialCharHint.style.color = "";
    }

    return isLengthValid && isSpecialCharFree;
}

    function validatePassword() {
        const password = passwordInput.value;
        const isLongEnough = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

        passLengthHint.innerHTML = isLongEnough ? "✅ Minimum 8 characters" : "Minimum 8 characters";
        passLengthHint.style.color = isLongEnough ? "green" : "";

        uppercaseHint.innerHTML = hasUppercase ? "✅ One uppercase letter" : "One uppercase letter";
        uppercaseHint.style.color = hasUppercase ? "green" : "";

        numberHint.innerHTML = hasNumber ? "✅ One number" : "One number";
        numberHint.style.color = hasNumber ? "green" : "";

        specialCharPassHint.innerHTML = hasSpecialChar ? "✅ One special character" : "One special character";
        specialCharPassHint.style.color = hasSpecialChar ? "green" : "";

        return isLongEnough && hasUppercase && hasNumber && hasSpecialChar;
    }

    function validateEmail() {
        const email = emailInput.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValid;
    }

    function showErrorMessage(message) {
        alert(message); 
    }

    usernameInput.addEventListener("input", validateUsername);
    passwordInput.addEventListener("input", validatePassword);
    emailInput.addEventListener("input", validateEmail);

    form.addEventListener("submit", function (e) {
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        const isEmailValid = validateEmail();

        if (!isUsernameValid || !isPasswordValid || !isEmailValid) {
            e.preventDefault();

            let message = "Please fix the following:\n";
            if (!isUsernameValid) message += "- Username must have at least 6 characters and no special symbols.\n";
            if (!isPasswordValid) message += "- Password must have at least 8 characters, one uppercase letter, one number, and one special character.\n";
            if (!isEmailValid) message += "- Email address is not valid.";

            showErrorMessage(message);
        }
    });
});