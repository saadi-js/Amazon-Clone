<?php
// Define your variables and check if they are set
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$repassword = isset($_POST['repassword']) ? $_POST['repassword'] : '';

// Database connection
$servername = "localhost";
$username = "root";
$db_password = "your_password"; // replace 'your_password' with your actual password
$dbname = "project";

$conn = new mysqli($servername, $username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// Now you can perform your database operations here
// For example, inserting user data into the database
if (!empty($name) && !empty($email) && !empty($password) && !empty($repassword) && $password == $repassword) {
    $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Please fill all the fields correctly.";
}

$conn->close();
?>




