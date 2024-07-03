document.getElementById('organizationLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const defaultUsername = 'admin';
    const defaultPassword = '123';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match the default values
    if (username === defaultUsername && password === defaultPassword) {
        // Redirect to the organization dashboard or home page
        window.location.href = '/HTML/home.html';
    } else {
        alert('Login failed: Incorrect username or password');
    }
});
