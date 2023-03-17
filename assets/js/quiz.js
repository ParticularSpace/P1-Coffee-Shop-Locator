const answers = document.querySelectorAll("answers");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startQuiz = document.getElementById("startQuiz");
var startTimer = document.getElementById("startTimer");
var correctAlert = document.getElementById("correctAlert");
var initials = document.getElementById("initials");
var startTime = 500;

startQuiz.addEventListener("click", function () {
  mainBox.classList.remove("hide");
  renderQuestion();
});

// attempts to make it stop at zero and clear the mainbox upon hitting zero, clear mainbox againa and display form section


var questionPromp = [
  {
    question: "How many scoops of sugar do you prefer?",
    choiceA: "One",
    choiceB: "Two",
    choiceC: "Three",
    choiceD: "Four",
    correct: "choiceA",
  },
  {
    question: "Would you like room for cream?",
    choiceA: "Ehhh",
    choiceB: "None for me",
    choiceC: "Some",
    choiceD: "Lots",
    correct: "choiceB",
  },
  {
    question: "Favorite coffee shop from below?",
    choiceA: "Starbucks",
    choiceB: "Philz",
    choiceC: "The Old Independent",
    choiceD: "Dutch Bros",
    correct: "choiceC",
  },
  {
    question: "Choose a mix from below",
    choiceA: "Americano",
    choiceB: "Latte",
    choiceC: "Cappuchino",
    choiceD: "Macchiato",
    correct: "choiceD",
  },
  {
    question: "How you like you coffee",
    choiceA: "Hot",
    choiceB: "Iced",
    choiceC: "In a hurry!",
    choiceD: "Just a little bit",
    correct: "choiceB",
  },

  {
    question: "",
    choiceA: "Elder Wand",
    choiceB: "Cloak of Invisibility",
    choiceC: "Resurection Stone",
    choiceD: "The Room of Requirement",
    correct: "choiceD",
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
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  console.log(buttonClickID);
  checkAnswer(buttonClickID);
});

function checkAnswer(buttonClickID) {
  if (questionPromp[questionIndex].correct === buttonClickID) {
    correctAlert.textContent = "Nice!";
  } else {
    correctAlert.textContent = "Yum!";
  }

  

  // add a condition that gives a correct answer a point.
  // var finalScore = localStorage.getItem("points");

  // function correctScore(buttonClickID) {
  //     if (questionPromp[questionIndex].correct === buttonClickID) {

  //     } else {;
  //     }

  questionIndex++;
  if (startTime === 0 || questionIndex === questionPromp.length) {
   console.log("hello"); 
   console.log(questionIndex)
   console.log(questionPromp.length)
    quizEnd();
  } else {
    renderQuestion();
    console.log("duck");
  };
 
};
// var nameBox = document.getElementById("answers");
// function inputBox () {
//   document.createElement("INPUT");
// nameBox.setAttribute("type", "text");
// };

function quizEnd() {
  startTime++;
  initials.textContent = "Final Score:" + startTime;
  initials.classList.remove("hide");
  

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
 
}

