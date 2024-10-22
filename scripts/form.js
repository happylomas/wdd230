

// Password confirmation validation
const form = document.getElementById('registrationForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        passwordError.style.display = 'block';
        password.value = '';
        confirmPassword.value = '';
        password.focus();
    }
});


