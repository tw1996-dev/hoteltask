document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("new-password");
    if (!passwordInput) return; // Bezpieczne wyjście, jeśli input nie istnieje

    passwordInput.addEventListener("input", function () {
        const password = this.value;

        const passLengthHint = document.getElementById("pass-length-hint");
        const uppercaseHint = document.getElementById("uppercase-hint");
        const numberHint = document.getElementById("number-hint");
        const specialCharHint = document.getElementById("pass-special-char-hint");

        // Minimum 8 characters
        if (password.length >= 8) {
            passLengthHint.innerHTML = '✅ Minimum 8 characters';
            passLengthHint.style.color = "green";
        } else {
            passLengthHint.innerHTML = 'Minimum 8 characters';
            passLengthHint.style.color = "";
        }

        // One uppercase letter
        if (/[A-Z]/.test(password)) {
            uppercaseHint.innerHTML = '✅ One uppercase letter';
            uppercaseHint.style.color = "green";
        } else {
            uppercaseHint.innerHTML = 'One uppercase letter';
            uppercaseHint.style.color = "";
        }

        // One number
        if (/\d/.test(password)) {
            numberHint.innerHTML = '✅ One number';
            numberHint.style.color = "green";
        } else {
            numberHint.innerHTML = 'One number';
            numberHint.style.color = "";
        }

        // One special character
        if (/[^A-Za-z0-9]/.test(password)) {
            specialCharHint.innerHTML = '✅ One special character';
            specialCharHint.style.color = "green";
        } else {
            specialCharHint.innerHTML = 'One special character';
            specialCharHint.style.color = "";
        }
    });
});
