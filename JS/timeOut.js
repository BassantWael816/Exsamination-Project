window.addEventListener("load", function() {
    var studentFirstName = localStorage.getItem("firstName");
    var studentLastName = localStorage.getItem("lastName");

if (studentFirstName && studentLastName) {
    document.getElementById("student-name").textContent = `${studentFirstName} ${studentLastName}`;
    }
});
