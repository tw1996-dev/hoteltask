const newPasswordInput = document.getElementById("new-password");
const toggleNewPassword = document.getElementById("toggleNewPassword");


toggleNewPassword.addEventListener("click", () => {
   const type = newPasswordInput.type === "password" ? "text" : "password";
   newPasswordInput.type = type;
   toggleNewPassword.classList.toggle("fa-eye-slash");
});