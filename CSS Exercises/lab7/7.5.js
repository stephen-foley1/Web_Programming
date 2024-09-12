// Task 5: Calculate Age
function calculateAge() {
  let dob = new Date(document.getElementById("dob").value);
  let today = new Date();
  let age = today.getFullYear() - dob.getFullYear();

  if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
    age--;
  }

  alert(`Your age is: ${age} years.`);
}
