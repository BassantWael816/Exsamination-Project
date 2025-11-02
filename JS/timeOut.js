var studentFirstName = localStorage.getItem("FirstName");
var studentLastName = localStorage.getItem("LastName");

    if (studentFirstName && studentLastName) {
        document.getElementById("student-name").textContent = `${studentFirstName} ${studentLastName}`;
    }

    //Clear exam/session data
    // localStorage.removeItem("examStatus");
    // localStorage.removeItem("examStartTime");
    // localStorage.removeItem("examAnswers");