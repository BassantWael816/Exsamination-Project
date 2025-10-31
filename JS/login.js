function validateForm(e){
    //Email
    var email = document.getElementById("email").value;
    var EmailMsg = document.getElementById("EmailMsg");
    
    if(email === ""){
        e.preventDefault();
        EmailMsg.textContent = "This feild is requird";
        return false;
    } else if (!email.includes('@') || !email.includes('.')){
        e.preventDefault()
        EmailMsg.textContent = "Enter Valid Email";
        return false;
    }

    else
        EmailMsg.textContent = "";

    //Password

    var Password = document.getElementById("password").value;
    var PasswordMsg = document.getElementById("passwordMsg");

    if(Password == ''){
        e.preventDefault();
        PasswordMsg.textContent = "This feild is requried";
        return false;
    }else if (Password.length < 6){
        e.preventDefault();
        PasswordMsg.textContent = "Password must be at least 6 character";
        return false;
    }

    else
        PasswordMsg.textContent = "";

    var getEmail = localStorage.getItem("email");
    var getPassword = localStorage.getItem("password");

    if(getEmail === null|| getPassword === null){
        e.preventDefault();
        alert("No user found! Please sign up first.");
        return false;
    }

    if(email === getEmail && Password === getPassword){
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", true);
        // window.location.href = "exsam.html";
    } else {
        e.preventDefault();
        alert("Invalid email or password");
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
        } else if (value.length < 6) {
            msgElement.textContent = "Password Must Be Long More Than";
        } else 
            msgElement.textContent = "";
    }
}

