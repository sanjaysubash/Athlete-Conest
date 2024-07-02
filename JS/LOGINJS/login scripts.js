document.getElementById('signUpLink').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('signUpCard').style.display = 'flex';
});

document.getElementById('backToLoginLink').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'flex';
    document.getElementById('signUpCard').style.display = 'none';
});

document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'none';
    document.getElementById('forgotPasswordCard').style.display = 'flex';
});

document.getElementById('backToLoginFromForgotLink').addEventListener('click', function() {
    document.getElementById('loginCard').style.display = 'flex';
    document.getElementById('forgotPasswordCard').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login logic here
    alert('Login successful!');
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add sign-up logic here
    alert('Sign up successful!');
});

document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add forgot password logic here
    alert('Password reset link sent!');
});
s