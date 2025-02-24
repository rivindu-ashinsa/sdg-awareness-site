// JavaScript to toggle the menu visibility and dropdown items
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('.header-navigation');
    nav.classList.toggle('show');
    
    const menuItems = nav.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Adjust delay for each item to appear one after the other
    });
});
