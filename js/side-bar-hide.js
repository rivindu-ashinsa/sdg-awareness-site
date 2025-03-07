document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('show'); // Hides sidebar
        document.querySelector('.sidebar-toggle').style.display = "block"; // Show button again
    });
});

function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    let button = document.querySelector('.sidebar-toggle');

    sidebar.classList.toggle('show'); // Toggle sidebar visibility

    if (sidebar.classList.contains('show')) {
        button.style.display = "none"; // Hide button when sidebar is open
    } else {
        button.style.display = "block"; // Show button when sidebar is closed
    }
}
