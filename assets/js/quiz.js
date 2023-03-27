const answers = document.querySelectorAll("button.answer");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const startQuiz = document.getElementById("startQuiz");
const tutorial = document.getElementById("tutorial");

const startTime = 500;

// TO-DO : have the answer buttons hide until start quiz is clicked, only when i click buttons not the box element

startQuiz.addEventListener("click", function () {
  // hide the start quiz button
  startQuiz.classList.add("hide");
  choiceA.classList.remove("hide");
  choiceB.classList.remove("hide");
  // show the quiz section
  mainBox.classList.remove("hide");
  tutorial.classList.remove("hide");
  renderQuestion();
});


// array of questions and answers
var questionPromp = [
  {
    question: "Coffee bitter or sweet?",
    choiceA: "Bitter",
    choiceB: "Sweet",
  },
  {
    question: "Which one do you prefer?",
    choiceA: "Milk",
    choiceB: "Non-dairy",
  },
  {
    question: "Would you like foam?",
    choiceA: "Yes",
    choiceB: "None for me",
  },
  {
    question: "Would you like to add chocolate syrup to your drink?",
    choiceA: "Yes",
    choiceB: "No",
  },
  {
    question: "How do you like your coffee",
    choiceA: "Iced",
    choiceB: "Hot",
  },
  {
    question: "Would you like to add a shot of espresso?",
    choiceA: "Please",
    choiceB: "Uh, no thanks",
  },
];


const lastQuestion = questionPromp.length - 1;

var questionIndex = 0;
var choices = [];

// show the questions
function renderQuestion() {
  var q = questionPromp[questionIndex];
  question.textContent = q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
}

// check the answer
var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  checkAnswer(buttonClickID);
});


function checkAnswer(buttonClickID) {
  // add the user's choice to an array
  choices.push(buttonClickID);

  questionIndex++;

  if (startTime === 0 || questionIndex === questionPromp.length) {
    console.log("Quiz is over");
    quizEnd();
  } else {
    renderQuestion();
  }
}

// function to end the quiz
function quizEnd() {

  // assign a coffee type based on user choices
  coffeeType = getCoffeeType(choices);

  //i want to set coffeeType to local storage
  localStorage.setItem("coffeeType", coffeeType);

  //api info for the coffee type

  // hide the quiz section and display the initials input box
  // mainBox.classList.add("hide");
  window.location.href = "../index.html";
}

// function to assign a coffee type based on user choices
function getCoffeeType(choices) {
  // define the coffee types and their corresponding question numbers
  var coffeeTypes = [
    { name: "latte", questions: [0, 1] },
    { name: "cappuccino", questions: [2, 3] },
    { name: "iced_coffee", questions: [1, 3, 4] },
    { name: "espresso", questions: [0, 3] },
    { name: "macchiato", questions: [1, 2] },
    { name: "americano", questions: [0, 4] },
    { name: "mocha", questions: [0, 1, 2, 3] },
    { name: "breve", questions: [0, 1, 2] },
    { name: "flat_white", questions: [0, 1, 2, 3] },
    { name: "frappuccino", questions: [0, 1, 2, 3, 4] },
    
  ];

  // count the number of times each choice was selected
  var counts = { choiceA: 0, choiceB: 0 };
  for (var i = 0; i < choices.length; i++) {
    counts[choices[i]]++;
  }

  // determine which coffee type has the most questions answered in its favor
  var maxCount = 0;
  var coffeeType = "";
  for (var i = 0; i < coffeeTypes.length; i++) {
    var typeCount = 0;
    for (var j = 0; j < coffeeTypes[i].questions.length; j++) {
      if (choices[coffeeTypes[i].questions[j]] === "choiceA") {
        typeCount++;
      } else {
        typeCount--;
      }
    }
    if (typeCount > maxCount) {
      maxCount = typeCount;
      coffeeType = coffeeTypes[i].name;
    }
  }
  console.log(coffeeType)
  return coffeeType;
}