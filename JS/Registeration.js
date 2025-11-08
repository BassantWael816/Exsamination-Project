function registerUser(e) {
  e.preventDefault();

  var firstName = document.getElementById("one").value.trim();
  var lastName = document.getElementById("two").value.trim();
  var email = document.getElementById("three").value.trim();
  var password = document.getElementById("four").value.trim();
  var rePassword = document.getElementById("five").value.trim();

  if (!firstName || !lastName || !email || !password || !rePassword) {
    alert("All fields are required!");
    return;
  }

  if (password !== rePassword) {
    alert("Passwords do not match!");
    return;
  }

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var exists = users.some(u => u.email === email);
  if (exists) {
    alert("User already exists! Please login.");
    return;
  }

  users.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  });

  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("loggedUser", JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  }));

  localStorage.removeItem("score");
  localStorage.removeItem("currentQuestion");
  localStorage.removeItem("questions");

  window.location.href = "/Pages/exsam.html";
}
