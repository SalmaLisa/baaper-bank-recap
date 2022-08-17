const submitButton = document.getElementById("submit-btn").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // wrong process but just for now as a junior
  if (email === "baperbank@gmail.com" && password === "baperhotel") {
    window.location.href = "index.html";
  }
  else if (password == '' || email == '') {
    alert("You can't leave the box EMPTY!")
  }
  else if (email !== "baperbank@gmail.com" ) {
    emailField.value = "";
    alert("Please input a valid email!")
  }
  else if (password !== "baperhotel") {
    alert('Password is not matched')
  }
  passwordField.value = "";
});
