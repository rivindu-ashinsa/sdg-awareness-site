document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        ".home-section-1, .home-section-2, .home-section-3, .home-section-4, .home-intro-title h1, .section-2-head-h1, .section-3-head-h1, .section-4-head h1, .home-description, .section-2-description p, .section-3-description p, .section-4-paragraph p"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        {
            threshold: 0.2, // Element becomes visible when 20% of it is in view
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
});
