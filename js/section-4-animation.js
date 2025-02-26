const contentData = [
    {
        img: "images-home/section-4-img1.svg",
        title: "Build Tomorrow's Smart Cities Today!",
        text: "Join us in creating innovative, connected, and sustainable urban environments. Embrace advanced technologies and modern infrastructure to enhance the quality of life and pave the way for smarter cities of the future.",
        countdown: { days: "06", hours: "22", minutes: "46" }
    },
    {
        img: "images-home/section-4-img2.svg",
        title: "Drive Industry Change. Join Us!",
        text: "Help revolutionize industries with innovative solutions, modern infrastructure, and sustainable practices. Together, we can shape a more inclusive, connected, and eco-friendly future. Join us now!",
        countdown: { days: "04", hours: "18", minutes: "30" }
    },
    {
        img: "images-home/section-4-img3.svg",
        title: "Lead the Charge for a Greener Planet.",
        text: "Join us in championing sustainable practices and green technologies to protect our environment. Together, we can make a significant impact and create a cleaner, healthier world for future generations.",
        countdown: { days: "02", hours: "12", minutes: "15" }
    }
];

let index = 1;
const imgElement = document.getElementById("section-4-img");
const titleElement = document.getElementById("section-4-title");
const textElement = document.getElementById("section-4-text");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const contentElement = document.getElementById("section-4-content");
const imgBlock = document.querySelector(".section-4-img"); // Image animation

function updateContent() {
    // Exit animations
    contentElement.classList.add("exit");
    imgBlock.classList.add("exit");

    setTimeout(() => {
        // Update content
        imgElement.src = contentData[index].img;
        titleElement.textContent = contentData[index].title;
        textElement.textContent = contentData[index].text;
        daysElement.textContent = contentData[index].countdown.days;
        hoursElement.textContent = contentData[index].countdown.hours;
        minutesElement.textContent = contentData[index].countdown.minutes;

        // Reset animations
        contentElement.classList.remove("exit", "visible");
        imgBlock.classList.remove("exit", "visible");

        setTimeout(() => {
            contentElement.classList.add("visible");
            imgBlock.classList.add("visible");
        }, 100);

        // Increment index or reset
        index = (index + 1) % contentData.length;
    }, 800); // Wait for exit animation to finish
}

// Initial state
setTimeout(() => {
    contentElement.classList.add("visible");
    imgBlock.classList.add("visible");
}, 100);

// Change content every 5 seconds
setInterval(updateContent, 5000);
