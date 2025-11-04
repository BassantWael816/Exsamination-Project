window.addEventListener("load", function() {
  var scoreData = localStorage.getItem("score");

  if (!scoreData) {
    window.location.href = "/Pages/exsam.html"; 
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
  const circle = document.querySelector(".circle");
  const valueDisplay = document.getElementById("scoreValue");

  if (!circle || !valueDisplay) return;

  valueDisplay.textContent = score + "%";

  let color;
  if (score >= 85) {
    color = "#390d9aff"; 
  } else if (score >= 60) {
    color = "#FFA500"; 
  } else {
    color = "#FF4C4C";  
  }

  const angle = (score / 100) * 360;

  circle.style.background = `conic-gradient(${color} ${angle}deg, #ddd ${angle}deg)`;

  const inner = circle.querySelector(".inner-circle h3");
  if (inner) {
    inner.style.color = color;
  }
}