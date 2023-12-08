<?php


$host = '127.0.0.1';
$user = 'root';
$password = '';
$database = 'bubi';


$mysqli = new mysqli($host, $user, $password, $database);


if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}


$name = $_POST['ime'];
$email = $_POST['email'];
$subject = $_POST['subjekt'];
$message = $_POST['poruka'];


$sql = "INSERT INTO kontakti (ime, email, subjekt, poruka) VALUES (?, ?, ?, ?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param('ssss', $name, $email, $subject, $message);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}


$stmt->close();
$mysqli->close();

?>
