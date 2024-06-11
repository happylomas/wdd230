const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	
	
	// Add authentication logic here
	// For example, you can make an API call to a backend server
	// or check against a hardcoded credentials
	
	// if (email === 'example@example.com' && password === 'password') {
		// alert('Login successful!');
	// } else {
		// errorMessage.textContent = 'Invalid email or password';
	// }
});
