<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Assuming you retrieve day, month, and year from the form
  $day = $_POST["day"];
  $month = $_POST["month"];
  $year = $_POST["year"];

  // Check if the provided date is valid
  if (checkdate($month, $day, $year)) {
    // Calculate the timestamp for the given date
    $timestamp = mktime(0, 0, 0, $month, $day, $year);

    // Get the day of the week
    $dayOfWeek = date("l", $timestamp);

    // Display the result
    echo "<p>The day of the week for $day/$month/$year is: $dayOfWeek</p>";
  } else {
    echo "<p>Invalid date. Please enter a valid date.</p>";
  }
}
?>
