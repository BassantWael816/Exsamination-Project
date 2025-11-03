window.addEventListener("load", function () {
  if (localStorage.getItem("isRegistered") === "true") {
    window.location.href = "login.html";
  }
});

function registerUser() {
  var form = document.getElementById("registerForm");

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  var firstName = document.getElementById("one").value.trim();
  var lastName = document.getElementById("two").value.trim();
  var email = document.getElementById("three").value.trim();
  var password = document.getElementById("four").value;
  var rePassword = document.getElementById("five").value;

  if (password !== rePassword) {
    alert("Passwords do not match!");
    return;
  }

  var user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("isRegistered", "true");

  alert("Registration successful!");
  window.location.href = "login.html";
}
