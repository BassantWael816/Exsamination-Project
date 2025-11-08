window.addEventListener("load", function() {
    var user = JSON.parse(localStorage.getItem("loggedUser"));

    if (user) {
        document.getElementById("student-name").textContent = user.firstName + " " + user.lastName;
    }
});
