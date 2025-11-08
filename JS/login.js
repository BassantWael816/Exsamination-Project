function validateForm(e) {
    var errorMsg = document.getElementById("error-message");
    errorMsg.style.display = "none";

    var email = document.getElementById("email").value.trim();
    var EmailMsg = document.getElementById("EmailMsg");

    if (email === "") {
        e.preventDefault();
        EmailMsg.textContent = "This field is required";
        return false;
    } 
    else if (!email.includes('@') || !email.includes('.')) {
        e.preventDefault();
        EmailMsg.textContent = "Enter valid email";
        return false;
    } 
    else {
        EmailMsg.textContent = "";
    }

    var Password = document.getElementById("password").value.trim();
    var PasswordMsg = document.getElementById("passwordMsg");

    if (Password === '') {
        e.preventDefault();
        PasswordMsg.textContent = "This field is required";
        return false;
    } 
    else if (Password.length < 8) {
        e.preventDefault();
        PasswordMsg.textContent = "Password must be at least 8 characters";
        return false;
    } 
    else {
        PasswordMsg.textContent = "";
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        e.preventDefault();
        errorMsg.textContent = "No user found! Please sign up first.";
        errorMsg.style.display = "block";
        return false;
    }

    var userByEmail = users.find(u => u.email === email);

    if (!userByEmail) {
        e.preventDefault();
        errorMsg.textContent = "No user found! Please sign up first.";
        errorMsg.style.display = "block";
        return false;
    }

    if (userByEmail.password !== Password) {
        e.preventDefault();
        errorMsg.textContent = "Invalid email or password.";
        errorMsg.style.display = "block";
        return false;
    }

    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("firstName", userByEmail.firstName);
    localStorage.setItem("lastName", userByEmail.lastName);

    localStorage.setItem("loggedUser", JSON.stringify(userByEmail));

    localStorage.removeItem("score");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("questions");


    window.location.href = "/Pages/exsam.html";
    return true;
}



function validateInput(fieldId){
    var value = document.getElementById(fieldId).value;
    var msgElement = document.getElementById(fieldId + "Msg");

    if (fieldId === "email") {
        if (value === "") {
            msgElement.textContent = "This field is required";
        } 
        else if (!value.includes('@') || !value.includes('.')) {
            msgElement.textContent = "Enter a valid email";
        } 
        else {
            msgElement.textContent = "";
        }
    }
    else if (fieldId === "password") {
        if (value === "") {
            msgElement.textContent = "This field is required";
        } 
        else if (value.length < 8) {
            msgElement.textContent = "Password must be at least 8 characters";
        } 
        else {
            msgElement.textContent = "";
        }
    }
}
