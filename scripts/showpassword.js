
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");


togglePassword.addEventListener("click", () => {
   const type = passwordInput.type === "password" ? "text" : "password";
   passwordInput.type = type;
   togglePassword.classList.toggle("fa-eye-slash");
});

