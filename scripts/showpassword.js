
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const newPasswordInput = document.getElementById("new-password");
const toggleNewPassword = document.getElementById("toggleNewPassword");

togglePassword.addEventListener("click", () => {
   const type = passwordInput.type === "password" ? "text" : "password";
   passwordInput.type = type;
   togglePassword.classList.toggle("fa-eye-slash");
});

toggleNewPassword.addEventListener("click", () => {
   const type = newPasswordInput.type === "password" ? "text" : "password";
   newPasswordInput.type = type;
   toggleNewPassword.classList.toggle("fa-eye-slash");
});