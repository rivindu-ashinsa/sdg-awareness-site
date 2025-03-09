document.getElementById('form').addEventListener('submit', function(event) {
    let isValid = true;

    // Full Name Validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.textContent = 'Full Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Telephone Number Validation
    const tel = document.getElementById('tel');
    const telError = document.getElementById('tel-error');
    const telPattern = /^[0-9]{10}$/; // Example pattern for 10-digit numbers
    if (!telPattern.test(tel.value.trim())) {
        telError.textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    } else {
        telError.textContent = '';
    }

    // Address Validation
    const address = document.getElementById('address');
    const addressError = document.getElementById('address-error');
    if (address.value.trim() === '') {
        addressError.textContent = 'Residential Address is required.';
        isValid = false;
    } else {
        addressError.textContent = '';
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
