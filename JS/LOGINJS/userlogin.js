// Define a default username and password (for demonstration purposes)
const defaultUsername = "admin";
const defaultPassword = "123";

// Function to handle form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get entered username and password from form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if username and password match the defaults
    if (username === defaultUsername && password === defaultPassword) {
        // Redirect to home page or perform further actions
        window.location.href = "/HTML/home.html"; // Redirect to home page
    } else {
        alert("Invalid username or password. Please try again.");
        // Clear form fields (optional)
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});
