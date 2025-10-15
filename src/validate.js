let inputName = document.getElementById("userName");
let labelName = document.querySelector(".labelName");
let inputEmail = document.getElementById("email");
let labelEmail = document.querySelector(".labelEmail");
let inputPassword = document.getElementById("password");
let labelPass = document.querySelector(".labelPass");
let registerForm = document.querySelector("form");
let inputRole = document.querySelectorAll(".roles");
let labelRole = document.querySelector(".labelRole");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputName.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();
  const role = inputRole.checked;
  let isValid = true;

  if (name === "") {
    labelName.textContent = "Name is required";
    labelName.className = "text-danger";
    isValid = false;
  } else {
    labelName.textContent = "Name";
    labelName.className = "grayText";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    labelEmail.textContent = "Email is required";
    labelEmail.className = "text-danger";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    labelEmail.textContent = "Please enter a valid email.";
    labelEmail.className = "text-danger";
    isValid = false;
  } else {
    labelEmail.textContent = "Email";
    labelEmail.className = "grayText";
  }

  if (password === "") {
    labelPass.textContent = "Password is required";
    labelPass.className = "text-danger";
    isValid = false;
  } else if (password.length < 8) {
    labelPass.textContent = "Password must be at least 8 characters";
    labelPass.className = "text-danger";
    isValid = false;
  } else {
    labelPass.textContent = "Password";
    labelPass.className = "grayText";
  }

  let selectedRole = null;
  for (let role of inputRole) {
    if (role.checked) {
      selectedRole = role.value;
      break;
    }
  }
  if (!selectedRole) {
    labelRole.textContent = "Please select your role.";
    labelRole.className = "text-danger";
    isValid = false;
  } else {
    labelRole.textContent = "Password";
    labelRole.className = "grayText";
  }
  if (isValid) {
    // window.localStorage()
  }
});
