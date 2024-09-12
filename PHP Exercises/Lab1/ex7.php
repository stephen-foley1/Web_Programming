<?php

// Create an associative array called $cart
$cart = array(
  "Cereal" => 5.00,
  "Coffee" => 2.50,
  "Bananas" => 3.50,
  "Onions" => 1.00,
  "Lettuce" => 2.40,
  "Tomatoes" => 3.50
);

// Output for each item, its name, and its price
foreach ($cart as $item => $price) {
  echo "$item costs $price USD<br>";
}


