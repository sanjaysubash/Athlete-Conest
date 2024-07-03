document.addEventListener('DOMContentLoaded', function() {
    const userLoginButton = document.querySelector('.login-card a[href="/HTML/LOGIN HTML/user-login.html"]');
    const orgLoginButton = document.querySelector('.login-card a[href="/HTML/LOGIN HTML/organization-login.html"]');

    userLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to user login page
        window.location.href = "/HTML/LOGIN HTML/user-login.html";
    });

    orgLoginButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Redirect to organization login page
        window.location.href = "/HTML/LOGIN HTML/organization login.html";
    });
});
