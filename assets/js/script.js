zipCodeBtn = $('.primary-btn');
zipDataDisplay = $('.zip-data');

// startQuiz = $('#startQuiz');
// questionPromp = $('#questionPromp');
// answers = $('.answers')



zipCodeBtn.on('click', function() {
    var zipCode = $('#zip-code-btn').val();
    if (zipCode.length !== 5) {
        $('#zip-code-btn').val('');
        alert('Please enter a valid zip code');
    } else {
        zipDataDisplay.textContent = 'Loading...';
    }
});


// function for when we click on start quiz, upon clicking the button, the quiz is rendered. so far the alert box keeps popping up when i click this button.
startQuiz.on("click", function () {
    console.log("container");
});