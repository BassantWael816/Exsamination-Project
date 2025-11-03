window.addEventListener("load", function() {
  var scoreData = localStorage.getItem("score");

  if (!scoreData) {
    alert("No exam result found. Please complete the exam first.");
<<<<<<< HEAD
    window.location.href = "/pages/exam.html"; 
=======
    window.location.href = "/Pages/exsam.html"; 
>>>>>>> 9b750f5540552ec464a6da280a8a0c225a847ebf
    return;
  }

  showResult();
});

function showResult() {
  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");
  var score = localStorage.getItem("score");

  score = parseInt(score);

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
  document.getElementById("performance").textContent = performance;
  document.getElementById("status").textContent = status;
  document.getElementById("rank").textContent = rank;

  animateCircle(score);
}

function animateCircle(score) {
  var circle = document.querySelector(".circle");
  var valueDisplay = document.getElementById("scoreValue");

  valueDisplay.textContent = score + "%";

  if (score >= 85) {
    circle.style.backgroundColor = "#4CAF50"; 
  } else if (score >= 60) {
    circle.style.backgroundColor = "#FFA500"; 
  } else {
    circle.style.backgroundColor = "#FF4C4C"; 
  }
}
