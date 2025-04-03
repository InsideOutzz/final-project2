document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const signUpForm = document.querySelector('.form-box.register form');
    const loginForm = document.querySelector('.form-box.login form');
    const signUpButton = document.querySelector('.register-link');
    const signInButton = document.querySelector('.login-link');
    const signUpSection = document.querySelector('.form-box.register');
    const loginSection = document.querySelector('.form-box.login');
    
    // Handle form switch (Sign up / Sign In)
    signUpButton.addEventListener('click', function (e) {
      e.preventDefault();
      loginSection.style.display = 'none'; // Hide login form
      signUpSection.style.display = 'block'; // Show sign-up form
    });
    
    signInButton.addEventListener('click', function (e) {
      e.preventDefault();
      signUpSection.style.display = 'none'; // Hide sign-up form
      loginSection.style.display = 'block'; // Show login form
    });
  
    // Handle form submission for Sign Up
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const username = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;
      const termsCheckbox = signUpForm.querySelector('input[type="checkbox"]');
  
      // Basic validation for sign up form
      if (!username || !email || !password) {
        alert("Please fill all the fields.");
        return;
      }
  
      if (!termsCheckbox.checked) {
        alert("You must agree with the terms of service.");
        return;
      }
  
      // For demo purposes, we show a success alert
      alert(`Welcome, ${username}! Your account has been created successfully.`);
  
      // Optionally, reset the form after submission
      signUpForm.reset();
    });
  
    // Handle form submission for Sign In (Just basic validation)
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
  
      // Basic validation for login form
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
  
      // For demo purposes, we show a login success alert
      alert(`Logged in successfully with email: ${email}`);
  
      // Optionally, reset the form after submission
      loginForm.reset();
    });
  });