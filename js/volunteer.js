// Toggle dropdown on click
document.querySelector(".filter-select").addEventListener("click", function () {
    document.querySelector(".filter-form").classList.toggle("active");
});
// User reviews Show More/Show Less
// Add an event listener to each button to toggle visibility of full-text and short-text
document.querySelectorAll('.see_more, .see_less').forEach(function(button) {
    button.addEventListener('click', function() {
        // Find the closest parent section
        const section = button.closest('.text-section');

        // Toggle visibility of full-text and short-text within the same section
        const fullText = section.querySelector('.full-text');
        const shortText = section.querySelector('.short-text');

        fullText.classList.toggle('hidden');
        shortText.classList.toggle('hidden');
    });
});

// Green Technology & Sustainability
const GreenTechSustain_checkbox = document.querySelector('input[type="checkbox"][value="GreenTechSustain"]');
const GreenTechSustain_div = document.querySelector('.topics.GreenTechSustain');
// Smart Cities & Infrastructure
const SmartCitiesInfra_checkbox = document.querySelector('input[type="checkbox"][value="SmartCitiesInfra"]');
const SmartCitiesInfra_div = document.querySelector('.topics.SmartCitiesInfra');
// Innovative Industries
const InnoIndustries_checkbox = document.querySelector('input[type="checkbox"][value="InnoIndustries"]');
const InnoIndustries_div = document.querySelector('.topics.InnoIndustries');

// Add an event listener to toggle visibility based on checkbox state
// Green Technology & Sustainability
GreenTechSustain_checkbox.addEventListener("change", function() {
    if (GreenTechSustain_checkbox.checked) {
        GreenTechSustain_div.style.display = "block";  // Show div when checkbox is checked
    } else {
        GreenTechSustain_div.style.display = "none";  // Hide div when checkbox is unchecked
    }
});
// Smart Cities & Infrastructure
SmartCitiesInfra_checkbox.addEventListener("change", function() {
    if (SmartCitiesInfra_checkbox.checked) {
        SmartCitiesInfra_div.style.display = "block";  // Show div when checkbox is checked
    } else {
        SmartCitiesInfra_div.style.display = "none";  // Hide div when checkbox is unchecked
    }
});
// Innovative Industries
InnoIndustries_checkbox.addEventListener("change", function() {
    if (InnoIndustries_checkbox.checked) {
        InnoIndustries_div.style.display = "block";  // Show div when checkbox is checked
    } else {
        InnoIndustries_div.style.display = "none";  // Hide div when checkbox is unchecked
    }
});

// Initial check to see if checkbox is checked on page load
// Green Technology & Sustainability
if (GreenTechSustain_checkbox.checked) {
    GreenTechSustain_div.style.display = "block";
}
// Smart Cities & Infrastructure
if (SmartCitiesInfra_checkbox.checked) {
    SmartCitiesInfra_div.style.display = "block";
}
// Innovative Industries
if (InnoIndustries_checkbox.checked) {
    InnoIndustries_div.style.display = "block";
}

document.querySelectorAll('.rating-review').forEach(ratingContainer => {
    const stars = ratingContainer.querySelectorAll('.stars');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const selectedValue = parseInt(star.getAttribute('data-value'));

            stars.forEach(s => s.classList.remove('selected'));

            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) >= selectedValue) {
                    s.classList.add('selected');
                }
            });
        });
    });
});
