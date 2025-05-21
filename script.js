document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        // Toggle the 'active' class on the burger icon
        burger.classList.toggle('active');
        
        // Toggle the 'nav-active' class on the navigation links
        navLinks.classList.toggle('nav-active');
        
        // Prevent scrolling when menu is open
        document.body.classList.toggle('no-scroll');
    });
    
    // Close menu when a link is clicked (for mobile)
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('nav-active')) {
                burger.classList.remove('active');
                navLinks.classList.remove('nav-active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
});