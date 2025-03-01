// Highlight Active Page
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".header-navigation a");
    let currentURL = window.location.pathname.split("/").pop(); // Get current page filename

    links.forEach(link => {
        if (link.getAttribute("href") === currentURL) {
            link.classList.add("active");
        }
    });
});
