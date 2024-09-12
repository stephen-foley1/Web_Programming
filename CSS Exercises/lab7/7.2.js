// Task 2: Temperature Conversion
/* a)	Function celcisus returns the Celsius equivalent of a Fahrenheit temperature, using the calculation
Cel = 5.0 / 9.0 * (Far -  32)
b)	Function Fahrenheit returns the Fahrenheit equivalent of a Celsius temperature, using the calculation
Far = 9.0 / 5.0 * Cel + 32
*/
function celsiusToFahrenheit(celsius) {
  return 9.0 / 5.0 * celsius + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return 5.0 / 9.0 * (fahrenheit - 32);
}

while (true) {
  let temp = prompt("Enter the temperature:");
  let unit = prompt("Convert to Celsius (C) or Fahrenheit (F)?").toUpperCase();

  if (temp === null || unit === null) {
    alert("You have cancelled the input. Exiting.");
    break;
  }

  let temperature = parseFloat(temp);

  if (!isNaN(temperature)) {
    let convertedTemperature;

    if (unit === "C") {
      convertedTemperature = fahrenheitToCelsius(temperature);
      alert(`Converted temperature: ${convertedTemperature.toFixed(2)}°C`);
    } else if (unit === "F") {
      convertedTemperature = celsiusToFahrenheit(temperature);
      alert(`Converted temperature: ${convertedTemperature.toFixed(2)}°F`);
    } else {
      alert("Invalid unit. Please enter 'C' or 'F'.");
    }
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
}
