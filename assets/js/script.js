/*Document.ready(function() {

zipCodeBtn = $('.primary-btn');
zipDataDisplay = $('.zip-data');


zipCodeBtn.on('click', function() {
    var zipCode = $('#zip-code-btn').val();
    if (zipCode.length !== 5) {
        $('#zip-code-btn').val('');
        alert('Please enter a valid zip code');
    } else {
        //Locator API
        $.ajax({
            url: ' ',
            dataType: 'json',
            success: function(data) {
                var zipData = data;
                zipDataDisplay.html(zipData);
            }
        });
        //Ingredients API
        $.ajax({
            url: ' ',
            dataType: 'json',
            success: function(data) {
                var zipData = data;
                zipDataDisplay.html(zipData);
            }
        });
    }
});
*/

