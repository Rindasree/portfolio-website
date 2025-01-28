document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Display a confirmation message
    const formStatus = document.getElementById('form-status');
    formStatus.innerHTML = '<p>Thank you for your message, ' + name + '! I will get back to you soon.</p>';
    formStatus.style.color = 'green';

    // Clear form fields
    document.getElementById('contact-form').reset();
});
