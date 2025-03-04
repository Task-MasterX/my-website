document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a response message
    const responseDiv = document.getElementById('form-response');
    responseDiv.textContent = `Thank you, ${name}! Your