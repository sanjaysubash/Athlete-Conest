document.getElementById('organizationLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add authentication logic here
    // For now, it will simply redirect to the organization's home page
    window.location.href = 'home-organization.html';
});
