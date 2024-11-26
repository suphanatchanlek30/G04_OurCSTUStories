// Navbar Start
// Function to set active navigation link
function setActive(element) {
    // Remove active class from all links
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    element.classList.add('active');
}

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!navLinks.contains(event.target) && 
        !menuToggle.contains(event.target) && 
        navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});
// Navbar End