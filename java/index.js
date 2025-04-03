
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');


mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active'); 
});

const links = document.querySelectorAll('.navbar__links');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' 
      });
    }
  });
});
