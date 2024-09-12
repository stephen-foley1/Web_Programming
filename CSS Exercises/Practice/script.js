// Add your JavaScript here

// Function to validate the form
function validateForm() {
  // Check if the email addresses match
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  if (email !== confirmEmail) {
    alert('Email addresses do not match.');
    return;
  }

  // Check if the student is at least 17 years old (using date of birth)
  const dob = new Date(document.getElementById('dob').value);
  const currentDate = new Date();
  const ageInYears = Math.floor((currentDate - dob) / (365.25 * 24 * 60 * 60 * 1000));
  if (ageInYears < 17) {
    alert('Student must be at least 17 years old.');
    return;
  }

  // Check if the starting date is not before today
  const startDate = new Date(document.getElementById('startDate').value);
  if (startDate < currentDate) {
    alert('Starting date must not be before today.');
    return;
  }

  // If all validations pass, submit the form or perform further actions
  alert('Form submitted successfully!');
}

// Function to clear the form
function clearForm() {
  // Clear all form fields
  document.getElementById('name').value = '';
  document.getElementById('address').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('confirmEmail').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('startDate').value = '';
}
