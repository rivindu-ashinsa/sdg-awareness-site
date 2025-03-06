window.onscroll = function() {
    let topButton = document.getElementById("top");
    let windowHeight = window.innerHeight;
    let fullHeight = document.documentElement.scrollHeight;
    let scrollPosition = window.scrollY;
    if (window.scrollY > 180 && (scrollPosition + windowHeight) < fullHeight - 350) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};
document.getElementById("top").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
