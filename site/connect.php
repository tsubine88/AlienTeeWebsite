<?php

// Establish database connection
$servername = "localhost";
$username = "tsubine";
$password = "tsubine88";
$dbname = "mysite";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve form data
$firstName = $_POST['First Name'];
$lastName = $_POST['Last Name'];
$email = $_POST['Email Adress'];
$message = $_POST['Message'];

// Sanitize data
$firstName = mysqli_real_escape_string($conn, $firstName);
$lastName = mysqli_real_escape_string($conn, $lastName);
$email = mysqli_real_escape_string($conn, $email);
$message = mysqli_real_escape_string($conn, $message);

// Insert data into database
$sql = "INSERT INTO form_data (first_name, last_name, email, message)
        VALUES ('$firstName', '$lastName', '$email', '$message')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);

?>
