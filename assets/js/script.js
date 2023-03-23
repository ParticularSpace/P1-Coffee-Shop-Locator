$(document).ready(function() {

zipCodeBtn = $('#zip-code-btn');
zipDataDisplay = $('.zip-data');
takeQuiz = $('.takeQuiz');
coffeeQuiz = $('#centerQuiz');

startQuiz = $('#startQuiz');
questionPromp = $('#questionPromp');
answers = $('.answers')

  startQuiz.on("click", function () {
    console.log("container");
});

takeQuiz.on('click', function() {
    //take me to quiz.html
    window.location.href = "quiz.html";

});
});

