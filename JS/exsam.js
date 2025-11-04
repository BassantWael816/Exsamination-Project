//questions and answers

var questions = [
    {
        text:"Which language is used for styling web pages?",
        answers:[
            {text:"a) HTML",isCorrect:false},
            {text:"b) CSS",isCorrect:true},
            {text:"c) Java Script",isCorrect:false},
            {text:"d) JQuery",isCorrect:false},
        ]
    },
    {
        text:"Which of the following is correct about JavaScript?",
        answers:[
            {text:"a) JavaScript is an Object-Based language",isCorrect:true},
            {text:"b) JavaScript is Assembly-language",isCorrect:false},
            {text:"c) JavaScript is Assembly-language",isCorrect:false},
            {text:"d) JavaScript is Assembly-language",isCorrect:false},
        ]
    },
    {
        text:"Arrays in JavaScript are defined by which of the following statements?",
        answers:[
            {text:"a) It is an ordered list of values",isCorrect:true},
            {text:"b) It is an ordered list of objects",isCorrect:false},
            {text:"c) It is an ordered list of string",isCorrect:false},
            {text:"c) It is an ordered list of string",isCorrect:false},
        ]
    },
    {
        text:"What is the correct syntax of doctype in HTML5?",
        answers:[
            {text:"a) </doctype html>",isCorrect:false},
            {text:"b) <doctype html>",isCorrect:false},
            {text:"b) <doctype html>",isCorrect:false},
            {text:"d) <!doctype html>",isCorrect:true},
        ]
    },
    {
        text:"Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers:[
            {text:"a) Position",isCorrect:false},
            {text:"b) Window",isCorrect:true},
            {text:"c) Standard",isCorrect:false},
            {text:"d) Location",isCorrect:false},
        ]
    },
    {
        text:"Which of the following is used to read an HTML page and render it?",
        answers:[
            {text:"a) Web server",isCorrect:false},
            {text:"a) Web server",isCorrect:false},
            {text:"c) Web browser",isCorrect:true},
            {text:"d) Web matrix",isCorrect:false},
        ]
    },
    {
        text:"Which HTML tag is used to insert an image?",
        answers:[
            {text:"a) <img url=”htmllogo.jpg” />",isCorrect:false},
            {text:"b) <img alt=”htmllogo.jpg” />",isCorrect:false},
            {text:"c) <img src=”htmllogo.jpg” />",isCorrect:true},
            {text:"d) <img link=”htmllogo.jpg” />",isCorrect:false},
        ]
    },
    {
        text:"Which of the following CSS property is used to make the text bold?",
        answers:[
            {text:"a) text-decoration: bold",isCorrect:false},
            {text:"b) text-align: bold",isCorrect:false},
            {text:"c) font-style: bold",isCorrect:false},
            {text:"d) font-weight: bold",isCorrect:true},
        ]
    },
    {
        text:"Which of the following function defines a linear gradient as a CSS image?",
        answers:[
            {text:"a) grayscale()",isCorrect:false},
            {text:"b) gradient()",isCorrect:false},
            {text:"c) linear-gradient()",isCorrect:true},
            {text:"d) image()",isCorrect:false},
        ]
    },
    {
        text:"Which of the following is the correct way to apply CSS Styles?",
        answers:[
            {text:"a) in an external CSS file",isCorrect:false},
            {text:"b) inside an HTML element",isCorrect:false},
            {text:"c) inside the <head> section of an HTML page",isCorrect:false},
            {text:"d) all of the mentioned",isCorrect:true},
        ]
    },
];

//make questions random
function getRandomQuestions(){
    return questions.sort(() => Math.random() - 0.5);
}

var randomQuestions = getRandomQuestions();

var currentQuestionIndex = 0;
var selectedAnswers ={};

//display questions and answers
function showQuestion(index) {
    var questionObj = randomQuestions[index];
    var questionText = document.getElementById("question-text");
    var answersContainer = document.getElementById("answers");

    questionText.innerHTML = `<h3>Question ${index + 1}</h3><p>${questionObj.text}</p>`;
    answersContainer.innerHTML = "";

    questionObj.answers.forEach((ans, i) => {
        var button = document.createElement("button");
        button.classList.add("option");
        button.innerText = ans.text;

        if (selectedAnswers[index] === i) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            selectedAnswers[index] = i; 
            document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
            button.classList.add("selected");

            var ansButton = document.querySelectorAll("#mark-list .question-btn");
            ansButton[index].classList.add("answered");
        });

        answersContainer.appendChild(button);
    });
}

showQuestion(currentQuestionIndex);

//next button
document.getElementById("next").addEventListener("click", () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    }
});

//previous button
document.getElementById("prev").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    }
});

//progress bar

function updateProgressBar() {
    var progress = ((currentQuestionIndex + 1) / randomQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = `${progress}%`;
}

//Finish Button
document.getElementById("submit").onclick = function() {
    var score = 0;
    for (var i = 0; i < randomQuestions.length; i++) {
        var ansIndex = selectedAnswers[i];
        if (ansIndex !== undefined && randomQuestions[i].answers[ansIndex].isCorrect) score++;
    }
    var percentage = Math.round((score / randomQuestions.length) * 100);
    localStorage.setItem("score", percentage);

    var studentName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName") || "";
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("lastName", lastName);

    window.location.href = "/Pages/result.html";
};

// Timer
var timeLeft = 5* 60;
var timer = setInterval(function() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById("time-text").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    if (timeLeft <= 0) {
        clearInterval(timer);
        window.location.href="/Pages/timeOut.html"
    }
    timeLeft--;
}, 1000);


// Mark button
document.getElementById("mark").onclick = function() {
    var marked = document.querySelectorAll("#mark-list .question-btn")[currentQuestionIndex];
    marked.classList.add("marked");
};