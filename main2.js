// Affichage et suppression du loader lors du chargement de la page
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'none'; // Cache le loader après chargement
});

// Menu Hamburger pour mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

