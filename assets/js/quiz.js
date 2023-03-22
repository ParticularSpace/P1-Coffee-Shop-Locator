const answers = document.querySelectorAll("answers");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startQuiz = document.getElementById("startQuiz");
// var startTimer = document.getElementById("startTimer");
var correctAlert = document.getElementById("correctAlert");

var startTime = 500;

// TO-DO : have the answer buttons hide until start quiz is clicked, only when i click buttons not the box element
// answers.classList.add("hide");

startQuiz.addEventListener("click", function () {
  mainBox.classList.remove("hide");
  renderQuestion();
});

// questions based around the data pulled from API, want to include coditional statements using boolean and array object in the data
var questionPromp = [
  {
    question: "Would you like milk or Half-and-half?",
    choiceA: "Yes",
    choiceB: "No",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "Which one do you prefer?",
    choiceA: "Milk",
    choiceB: "Half-and-half",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "Would you like milk foam?",
    choiceA: "Yes",
    choiceB: "None for me",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "Would you like to add chocolate syrup to your drink?",
    choiceA: "Yes",
    choiceB: "No",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "How do you like your coffee",
    choiceA: "Iced",
    choiceB: "Hot",
    choiceC: "",
    choiceD: "",
    correct: "choiceB",
  },
  {
    question: "Would you like to add a shot of alcohol?",
    choiceA: "Please",
    choiceB: "Uh, no thanks",
    choiceC: "",
    choiceD: "",
    correct: "choiceB",
  },
];

const lastQuestion = questionPromp.length - 1;

var questionIndex = 0;

console.log(question);

function renderQuestion() {
  var q = questionPromp[questionIndex];
  question.textContent = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  // choiceC.innerHTML = q.choiceC;
  // choiceD.innerHTML = q.choiceD;
}

var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  console.log(buttonClickID);
  checkAnswer(buttonClickID);
});

function checkAnswer(buttonClickID) {
  if (questionPromp[questionIndex].correct === buttonClickID) {
    correctAlert.textContent = "Yum!";
  } else {
    correctAlert.textContent = "Nice!";
  }
};


// quiz end function so that drink is displayed, along with description and recepi for the drink
function quizEnd() {
  initials.classList.remove("hide");
};
  

  










// add a condition that gives a correct answer a point.
  // var finalScore = localStorage.getItem("points");

  // function correctScore(buttonClickID) {
  //     if (questionPromp[questionIndex].correct === buttonClickID) {

  //     } else {;
  //     }

  // questionIndex++;
  // if (startTime === 0 || questionIndex === questionPromp.length) {
  //  console.log("hello"); 
  //  console.log(questionIndex)
  //  console.log(questionPromp.length)
  //   quizEnd();
  // } else {
  //   renderQuestion();
  //   console.log("duck");
  // };
 

// var nameBox = document.getElementById("answers");
// function inputBox () {
//   document.createElement("INPUT");
// nameBox.setAttribute("type", "text");
// };



  // initials.classList.remove ("hide");
  // mainBox.classList.add("hide");
  // clearInterval(startQuiz);
  // initials.classList.remove("initials");


// startQuiz = $('#startQuiz');
// questionPromp = $('#questionPromp');
// answers = $('.answers')

//   startQuiz.on("click", function () {
//     console.log("container");
// });
 


