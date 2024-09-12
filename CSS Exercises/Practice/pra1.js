// formScript.js
document.addEventListener('DOMContentLoaded', function () {
  // Get references to satisfaction rating elements
  const satisfactionInput = document.getElementById('satisfaction');
  const satisfactionLabel = document.querySelector('.rating-label');
  const satisfactionFill = document.querySelector('.slider-fill');

  // Update satisfaction rating display on input change
  satisfactionInput.addEventListener('input', function () {
    const value = satisfactionInput.value;
    satisfactionLabel.textContent = value;
    satisfactionFill.style.width = `${(value / 10) * 100}%`;
  });

  // Handle form submission
  const customerForm = document.getElementById('customerForm');
  customerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your form submission logic here
    // For example, you can access form data using: customerForm.elements
  });
});
