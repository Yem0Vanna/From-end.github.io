<?php
$conn = new mysqli("localhost", "root", "", "foodshop");
$item = $_POST['item'];
$price = $_POST['price'];
$sql = "INSERT INTO cart (item, price) VALUES ('$item', '$price')";
$conn->query($sql);
?>
