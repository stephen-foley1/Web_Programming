// Task 1: Function to check if a number is positive
function isPositive(number) {
  return number > 0;
}

// Sentinel-controlled looping
while (true) {
  let input = prompt("Enter an integer:");

  if (input === null) {
    alert("You have cancelled the input. Exiting.");
    break;
  }

  let num = parseInt(input);

  if (!isNaN(num)) {
    let positive = isPositive(num);
    alert(`${num} is ${positive ? "positive" : "negative"}.`);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}
