<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve user input
  $height = $_POST["height"];
  $weight = $_POST["weight"];

  // Display user details
  echo "User Details:<br>";
  echo "Height: $height meters<br>";
  echo "Weight: $weight Kgs<br>";

  // Calculate BMI
  $bmi = $weight / ($height * $height);

  // Display BMI
  echo "BMI: " . number_format($bmi, 2);
}
?>
