<?php
$host = 'localhost';
$user = 'root';
$password = '';
$db = 'foodshop';
$conn = new mysqli($host, $user, $password, $db);

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo json_encode(["status" => "success"]);
} else {
  echo json_encode(["status" => "fail"]);
}
?>
