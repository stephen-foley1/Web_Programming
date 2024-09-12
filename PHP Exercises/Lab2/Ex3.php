<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve user input
  $name = $_POST["name"];
  $dob = $_POST["dob"];

  // Display user details
  echo "Your name, you were born on " . date('d/m/Y', strtotime($dob)) . "<br>";
  echo "Example: $name, you were born on " . date('d/m/Y', strtotime($dob)) . "<br>";

  echo "Your name, you were born on " . date('D, j-M-y', strtotime($dob)) . "<br>";
  echo "Example: $name, you were born on " . date('D, j-M-y', strtotime($dob)) . "<br>";

  echo "Your name, you were born in " . date('Y', strtotime($dob)) . "<br>";
  echo "Example: $name, you were born in " . date('Y', strtotime($dob)) . "<br>";
}
?>
