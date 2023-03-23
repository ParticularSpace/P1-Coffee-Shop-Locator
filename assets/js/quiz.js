const answers = document.querySelectorAll("button.answer");
const question = document.getElementById("questionPromp");
const mainBox = document.getElementById("box");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");
var startQuiz = document.getElementById("startQuiz");
var correctAlert = document.getElementById("correctAlert");

var startTime = 500;

// TO-DO : have the answer buttons hide until start quiz is clicked, only when i click buttons not the box element

startQuiz.addEventListener("click", function () {
  mainBox.classList.remove("hide");
  startQuiz.classList.add("hide");
  renderQuestion();
});


var questionPromp = [
  {
    question: "Coffee bitter or sweet?",
    choiceA: "Bitter",
    choiceB: "Sweet",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "Which one do you prefer?",
    choiceA: "Milk",
    choiceB: "Non-dairy",
    choiceC: "",
    choiceD: "",
    correct: "choiceA",
  },
  {
    question: "Would you like foam?",
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
    question: "Would you like to add a shot of espresso?",
    choiceA: "Please",
    choiceB: "Uh, no thanks",
    choiceC: "",
    choiceD: "",
    correct: "choiceB",
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

var answersClick = document.querySelector("section");

answersClick.addEventListener("click", function (event) {
  var buttonClickID = event.target.id;
  checkAnswer(buttonClickID);
});

function checkAnswer(buttonClickID) {
  if (questionPromp[questionIndex].correct === buttonClickID) {
    correctAlert.textContent = "Yum!";
  } else {
    correctAlert.textContent = "Nice!";
  }

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

function quizEnd() {
  
  // assign a coffee type based on user choices
  coffeeType = getCoffeeType(choices);

  //i want to set coffeeType to local storage
  localStorage.setItem("coffeeType", coffeeType);

  //api info for the coffee type

  // hide the quiz section and display the initials input box
  mainBox.classList.add("hide");
}

// function to assign a coffee type based on user choices
function getCoffeeType(choices) {
  // define the coffee types and their corresponding question numbers
  var coffeeTypes = [
    {name: "latte", questions: [0, 1, 2]},
    {name: "cappuccino", questions: [3, 4, 5]},
    {name: "iced coffee", questions: [1, 2, 4]},
    {name: "espresso", questions: [0, 2, 5]},
    {name: "macchiato", questions: [1, 3, 5]},
  ];

  // count the number of times each choice was selected
  var counts = {choiceA: 0, choiceB: 0, choiceC: 0, choiceD: 0};
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
  console.log(coffeeType);
  return coffeeType;
}


