zipCodeBtn = $('#zip-code-btn');
zipDataDisplay = $('.zip-data');


zipCodeBtn.on('click', function() {
    var zipCode = $('#zip-code-btn').val();
    if (zipCode.length !== 5) {
        alert('Please enter a valid zip code');
    } else {
        zipDataDisplay.textContent = 'Loading...';
    }
});