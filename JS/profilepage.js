// Add event listener to the logout button
document.querySelector('.logout-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    alert('You have been logged out.');
    // Redirect to the login page
    window.location.href = '/HTML/index login.html';
});
