// Function to validate the form
function validateForm() {
  var name = document.querySelector('input[name="Name"]').value;
  var email = document.querySelector('input[name="Email"]').value;
  var subject = document.querySelector('input[name="Subject"]').value;
  var message = document.querySelector('textarea[name="Message"]').value;

  // Check if any field is empty
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("All fields are required!");
    return false;
  }

  // Check if the email address is valid using a simple regex pattern
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email address!");
    return false;
  }

  return true;
}
