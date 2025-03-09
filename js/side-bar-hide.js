document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('show'); // Hides sidebar
        
        // Only show the button in mobile mode
        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar-toggle').style.display = "block";
        }
    });
});

function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    let button = document.querySelector('.sidebar-toggle');

    sidebar.classList.toggle('show'); // Toggle sidebar visibility

    // Only hide/show button in mobile mode
    if (window.innerWidth <= 768) {
        button.style.display = sidebar.classList.contains('show') ? "none" : "block";
    }
}
