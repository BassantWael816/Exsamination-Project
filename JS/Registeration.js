function registerUser(e) {
  e.preventDefault();

  var firstName = document.getElementById("one").value;
  var lastName = document.getElementById("two").value;
  var email = document.getElementById("three").value;
  var password = document.getElementById("four").value;
  var rePassword = document.getElementById("five").value;

  if (!firstName || !lastName || !email || !password || !rePassword) {
    alert("All fields are required!");
    return false;
  }

  if (password !== rePassword) {
    alert("Passwords do not match!");
    return false;
  }

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  window.location.href = "/Pages/exsam.html";
  return false; 
}
