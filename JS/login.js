function validateForm(e){
    var errorMsg = document.getElementById("error-message");
    errorMsg.style.display = "none";

    var email = document.getElementById("email").value.trim();
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

    var Password = document.getElementById("password").value.trim();
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
    
    var getEmail = localStorage.getItem("email");
    var getPassword = localStorage.getItem("password");
    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");

    if(!getEmail || !getPassword){
        e.preventDefault();
        errorMsg.textContent = "No user found! Please sign up first.";
        errorMsg.style.display = "block";
        return false;
    }

    if(email === getEmail && Password === getPassword){
        localStorage.setItem("isLoggedIn", true);

        if(firstName && lastName){
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
        }

        window.location.href = "/Pages/exsam.html";
    } else {
        e.preventDefault();
        errorMsg.textContent = "Invalid email or password.";
        errorMsg.style.display = "block";
        return false;
    }
}
