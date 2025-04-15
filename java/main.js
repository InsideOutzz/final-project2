const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');
mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

const links = document.querySelectorAll('.navbar__links, .footer__link--items a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const getStartedBtn = document.querySelector('.main__btn a');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Getting Started...');
    });
}