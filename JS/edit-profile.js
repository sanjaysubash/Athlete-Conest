// Example JavaScript for handling form submission
document.getElementById('editProfileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Fetch the form data
    const formData = new FormData(this);

    // Example: Log the form data to console
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Perform any further actions, like sending data to a server via AJAX
    // For demonstration, redirecting back to profile page
    alert('Profile updated successfully!');
    window.location.href = '/HTML/profilepage.html'; // Replace with your actual profile page URL
});
