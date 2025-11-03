var questions = [
  { text:"Which language is used for styling web pages?", answers:[
      {text:"a) HTML",isCorrect:false},
      {text:"b) CSS",isCorrect:true},
      {text:"c) JavaScript",isCorrect:false},
      {text:"d) JQuery",isCorrect:false}
    ]},
  { text:"Which of the following is correct about JavaScript?", answers:[
      {text:"a) JavaScript is an Object-Based language",isCorrect:true},
      {text:"b) JavaScript is Assembly-language",isCorrect:false},
      {text:"c) JavaScript is Assembly-language",isCorrect:false},
      {text:"d) JavaScript is Assembly-language",isCorrect:false}
    ]},
  { text:"Arrays in JavaScript are defined by which of the following statements?", answers:[
      {text:"a) It is an ordered list of values",isCorrect:true},
      {text:"b) It is an ordered list of objects",isCorrect:false},
      {text:"c) It is an ordered list of strings",isCorrect:false},
      {text:"d) It is an ordered list of strings",isCorrect:false}
    ]},
  { text:"What is the correct syntax of doctype in HTML5?", answers:[
      {text:"a) </doctype html>",isCorrect:false},
      {text:"b) <doctype html>",isCorrect:false},
      {text:"c) <doctype html>",isCorrect:false},
      {text:"d) <!doctype html>",isCorrect:true}
    ]}
];

var randomQuestions = questions.sort(function() { return Math.random() - 0.5; });
var currentQuestionIndex = 0;
var selectedAnswers = {};

function showQuestion(index) {
  var questionObj = randomQuestions[index];
  var questionText = document.getElementById("question-text");
  var answersContainer = document.getElementById("answers");

  questionText.innerHTML = "<h3>Question " + (index+1) + "</h3><p>" + questionObj.text + "</p>";
  answersContainer.innerHTML = "";

  for (var i=0; i<questionObj.answers.length; i++) {
    (function(i) {
      var btn = document.createElement("button");
      btn.className = "option";
      btn.innerText = questionObj.answers[i].text;

      if (selectedAnswers[index] === i) btn.classList.add("selected");

      btn.onclick = function() {
        selectedAnswers[index] = i;
        var options = document.querySelectorAll(".option");
        for (var j=0; j<options.length; j++) options[j].classList.remove("selected");
        this.classList.add("selected");
        document.querySelectorAll("#mark-list .question-btn")[index].classList.add("answered");
      };

      answersContainer.appendChild(btn);
    })(i);
  }
}

showQuestion(currentQuestionIndex);

document.getElementById("next").onclick = function() {
  if (currentQuestionIndex < randomQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
};

document.getElementById("prev").onclick = function() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateProgressBar();
  }
};

function updateProgressBar() {
  var progress = ((currentQuestionIndex+1)/randomQuestions.length)*100;
  document.getElementById("progress-fill").style.width = progress + "%";
}

document.getElementById("submit").onclick = function() {
  var score = 0;
  for (var i=0; i<randomQuestions.length; i++) {
    var ansIndex = selectedAnswers[i];
    if (ansIndex !== undefined && randomQuestions[i].answers[ansIndex].isCorrect) score++;
  }
  var percentage = Math.round((score/randomQuestions.length)*100);
  localStorage.setItem("score", percentage);

  var studentName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName") || "";
  localStorage.setItem("studentName", studentName);
  localStorage.setItem("lastName", lastName);

  window.location.href = "/Pages/result.html";
};

var timeLeft = 5*60;
var timer = setInterval(function() {
  var minutes = Math.floor(timeLeft/60);
  var seconds = timeLeft%60;
  document.getElementById("time-text").textContent = minutes + ":" + (seconds<10?"0":"") + seconds;
  if (timeLeft <= 0) {
    clearInterval(timer);
    document.getElementById("submit").click();
  }
  timeLeft--;
}, 1000);

document.getElementById("mark").onclick = function() {
  var marked = document.querySelectorAll("#mark-list .question-btn")[currentQuestionIndex];
  marked.classList.add("marked");
};
