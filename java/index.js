// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

// Toggle the mobile menu visibility when the hamburger icon is clicked
mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active'); // Toggle 'active' class for the menu
});

// Smooth Scrolling for Navigation Links
const links = document.querySelectorAll('.navbar__links');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    
    const targetId = link.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with smooth behavior
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start' // Align the section at the top of the viewport
      });
    }
  });
});

// To make the mobile menu functional, you need to create corresponding CSS classes (i.e., .active) for the navbar to show or hide