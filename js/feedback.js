document.getElementById('form').addEventListener('submit', function(event) {
    
    const inputs = document.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        const errorDiv = document.getElementById(`${input.id}-error`);

        if (!input.checkValidity()) {
            errorDiv.classList.add('show-error');
            input.classList.add('invalid');
            isValid = false;
        } else {
            errorDiv.classList.remove('show-error');
            input.classList.remove('invalid');
        }
    });

    if (isValid) {
        this.submit();  
    }
});