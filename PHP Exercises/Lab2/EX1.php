<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $first_name = $_POST["first_name"];
  $last_name = $_POST["last_name"];

  // Display the greeting message
  echo "Have a good day $first_name $last_name!";
}

