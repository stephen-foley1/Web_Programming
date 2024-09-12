// Task 4: Days till Christmas
function daysTillChristmas() {
  let today = new Date();
  let christmas = new Date(today.getFullYear(), 11, 25); // December is 11 in JavaScript

  if (today > christmas) {
    christmas.setFullYear(today.getFullYear() + 1);
  }

  let daysLeft = Math.ceil((christmas - today) / (1000 * 60 * 60 * 24));
  alert(`Days till Christmas: ${daysLeft}`);
}
