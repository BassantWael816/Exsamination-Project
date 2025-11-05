
window.addEventListener("load", function() {
  var scoreData = localStorage.getItem("score");

  if (!scoreData) {
    alert("No exam result found. Please complete the exam first.");
    window.location.href = "exam.html"; 
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
  var scoreValue = document.getElementById("scoreValue");

  var current = 0;
  var target = Math.min(score, 100); 
  var interval = setInterval(function() {
    if (current >= target) {
      clearInterval(interval);
    } else {
      current++;
      scoreValue.textContent = current + "%";

      
      var color;
      if (current >= 85) color = "#152C76";     
      else if (current >= 60) color = "green";
      else color = "red";                    
      circle.style.background = 
        "conic-gradient(" + color + " " + current + "%, #ddd " + current + "% 100%)";
    }
  }, 20);
}

