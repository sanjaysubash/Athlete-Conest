document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic here (e.g., saving user details)
    alert('Signup successful!');
    window.location.href = 'login.html';
});
