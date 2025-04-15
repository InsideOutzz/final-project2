const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');
mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

const getStartedBtn = document.querySelector('.main__btn a');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Getting Started...');
    });
}