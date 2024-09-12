// Task 3: Date Comparison
function checkDate() {
  let inputDate = new Date(document.getElementById("inputDate").value);
  let today = new Date();

  if (inputDate > today) {
    alert("This date is in the future.");
  } else if (inputDate.toDateString() === today.toDateString()) {
    alert("This date is today.");
  } else {
    alert("This date is in the past.");
  }
}
