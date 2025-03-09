function validateFeedback() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name == "" || email == "") { 
        alert('Please provide your feedback');
        return false;
    }
    return true;
}