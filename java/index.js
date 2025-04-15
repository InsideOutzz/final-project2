document.addEventListener("DOMContentLoaded", () => {
  const loginFormBox = document.querySelector('.form-box.login');
  const signUpFormBox = document.querySelector('.form-box.register');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.register-link');
  const loginSection = document.querySelector('.login-section');

  registerLink.addEventListener('click', () => {
    loginSection.classList.add('active');
  });

  loginLink.addEventListener('click', () => {
    loginSection.classList.remove('active');
  });

  const signUpForm = document.querySelector('.form-box.register form');
  signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.querySelector('.form-box.register input[type="text"]');
    const email = document.querySelector('.form-box.register input[type="email"]');
    const password = document.querySelector('.form-box.register input[type="password"]');
    const termsCheckbox = document.querySelector('.form-box.register input[type="checkbox"]');

    if (!username.value || !email.value || !password.value) {
      alert("All fields are required!");
      return;
    }

    if (!termsCheckbox.checked) {
      alert("You must agree to the terms of service.");
      return;
    }

    alert("Sign Up Successful!");
    window.location.href = "index.html"; 
  });

  const loginForm = document.querySelector('.form-box.login form');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const loginEmail = document.querySelector('.form-box.login input[type="email"]');
    const loginPassword = document.querySelector('.form-box.login input[type="password"]');

    if (!loginEmail.value || !loginPassword.value) {
      alert("Both email and password are required!");
      return;
    }

    alert("Login Successful!");
  });
});
