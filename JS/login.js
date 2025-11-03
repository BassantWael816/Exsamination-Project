function validateForm(e){
    var errorMsg = document.getElementById("error-message");
    errorMsg.style.display = "none";

    // Email
    var email = document.getElementById("email").value;
    var EmailMsg = document.getElementById("EmailMsg");

    if(email === ""){
        e.preventDefault();
        EmailMsg.textContent = "This field is required";
        return false;
    } else if (!email.includes('@') || !email.includes('.')){
        e.preventDefault();
        EmailMsg.textContent = "Enter valid email";
        return false;
    } else {
        EmailMsg.textContent = "";
    }

    // Password
    var Password = document.getElementById("password").value;
    var PasswordMsg = document.getElementById("passwordMsg");

    if(Password === ''){
        e.preventDefault();
        PasswordMsg.textContent = "This field is required";
        return false;
    } else if (Password.length < 8){
        e.preventDefault();
        PasswordMsg.textContent = "Password must be at least 8 characters";
        return false;
    } else {
        PasswordMsg.textContent = "";
    }

    // Get from localStorage
    var getEmail = localStorage.getItem("email");
    var getPassword = localStorage.getItem("password");

    if(getEmail === null || getPassword === null){
        e.preventDefault();
        errorMsg.textContent = "No user found! Please sign up first.";
        errorMsg.style.display = "block";
        return false;
    }

    if(email === getEmail && Password === getPassword){
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/Pages/exsam.html";
    } else {
        e.preventDefault();
        errorMsg.textContent = "Invalid email or password.";
        errorMsg.style.display = "block";
        return false;
    }
}

function validateInput(fieldId){
    var value = document.getElementById(fieldId).value;
    var msgElement = document.getElementById(fieldId + "Msg");

    if(fieldId === "email"){
        if(value === ""){
        EmailMsg.textContent = "This feild is requird";
    } else if (!email.includes('@') || !email.includes('.')){
        msgElement.textContent = "Enter a valid email";
    } else
        msgElement.textContent = "";
    }
    else if (fieldId === "password"){
        if (value === "") {
            msgElement.textContent = "This field is required";
        } else if (value.length < 8) {
            msgElement.textContent = "Password Must Be Long More Than";
        } else 
            msgElement.textContent = "";
    }
}

