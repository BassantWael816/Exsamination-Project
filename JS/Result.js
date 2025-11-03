window.addEventListener("load", function() {
  var scoreData = localStorage.getItem("score");

  if (!scoreData) {
    alert("No exam result found. Please complete the exam first.");
    window.location.href = "/Pages/exsam.html"; 
    return;
  }

  showResult();
});

function showResult() {
  var firstName = localStorage.getItem("studentName") || "";
  var lastName = localStorage.getItem("lastName") || "";
  var score = parseInt(localStorage.getItem("score")) || 0;

  var performance;
  var status;

  if (score >= 85) {
    performance = "Excellent";
    status = "Passed";
  } else if (score >= 60) {
    performance = "Good";
    status = "Passed";
  } else {
    performance = "Needs Improvement";
    status = "Failed";
  }

  var rank;
  if (score >= 90) rank = "A";
  else if (score >= 75) rank = "B";
  else if (score >= 60) rank = "C";
  else rank = "D";

  document.getElementById("studentName").textContent = firstName + " " + lastName;
  document.get
}
