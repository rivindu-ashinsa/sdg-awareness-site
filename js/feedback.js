document.getElementById('form').addEventListener('submit', function(event) {
    let isValid = true;

    // Full Name Validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (!name.value.trim()) {
        nameError.textContent = 'Please enter your full name.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if invalid
    }
});