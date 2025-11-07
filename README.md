Overview
This project is an Examination Website that allows users to register, log in, take a timed exam, mark questions for review, navigate between questions, and finally receive a performance result.

The website includes:
  Login Page.
  Registration Page.
  Exam Page (Questions + Timer + Navigation + Marking System).
  Result Page.
  Timeout Page (if the exam time ends before finishing).

Features
  User Authentication:

    Login with full input validation.
    Registration form with:
    First Name.
    Last Name.
    Email.
    Password & Confirm Password.
    Stores multiple users using localStorage.
    
    Handles:
    Empty fields.
    Invalid email format.
    Password mismatch.
    User already exists.
    User not found.

 Exam Page:
    Randomized questions every time the exam starts.
    Answer selection with visual highlighting.
    Question list with states:
      Answered → Blue.
      Marked → Distinct color.
      Unanswered → Default.
    Navigation buttons:
      Next.
      Previous.
      Mark.
      Finish.
    Progress bar that updates as you navigate.
    Countdown timer.
    Auto-redirect to Timeout page when time ends.
        
 Timer Configuration:
    The timer logic is located in:/JS/exsam.js.
    To change the exam duration, edit: var timeLeft = 2 * 60;
    Increase the time to allow more exam duration.
    Decrease the time if you want to quickly test the Timeout page.

Result Page:
  After clicking Finish, the user is redirected to a detailed result page displaying:
    Name.
    Score (%).
    Performance (Good / Needs Improvement).
    Rank (A, B, C, D).
    Status (Passed / Failed).
    The score is calculated even if the user answers only one question.

Timeout Page:
  Appears automatically when time finishes.
  The user cannot retake the exam after timeout.
  Contains a button that redirects back to the Login page. 

Project Structure:
/Pages
   ├── login.html
   ├── RegistrationForm.html
   ├── exsam.html
   ├── result.html
   └── timeOut.html

/JS
   ├── login.js
   ├── register.js
   ├── exsam.js
   └── Result.js

/style
   ├── login.css
   ├── register.css
   ├── exam.css
   ├── result.css
   └── timeout.css

/Images
   ├── LoginPhoto.svg
   ├── examResultPhoto.png
   └── other images...


How to Run the Project:
  Download or clone the repository
  Open the project folder
  Start the website by opening: /Pages/login.html
  (Optional) Modify the exam timer from: exsam.js → var timeLeft = 2 * 60; 

Technologies Used:
  HTML.
  CSS3.
  JavaScript.
  LocalStorage API. 

Summary of Features:
  Login & Registration with validation
  Storing multiple users in localStorage
  Random exam questions
  Timer with auto timeout
  Mark / Answer tracking
  Detailed exam result
  Clean UI with animations  

Developer Notes:
  The project uses HTML, CSS, and JavaScript only.
  All user data (first name, last name, email, password) stored in: localStorage.users → JSON array
  Login searches for the user inside this array, not single values.
  The exam logic, timer, and score calculations are inside exsam.js.
  The UI is styled using custom CSS
  Styling files are under /style. 

  Decrease the time if you want to quickly test the Timeout page 

    
