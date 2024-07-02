document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'organization') {
        window.location.href = 'home-organization.html';
    } else {
        window.location.href = 'home-user.html';
    }
});
