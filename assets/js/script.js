$(document).ready(function() {

zipCodeBtn = $('#zip-code-btn');
zipDataDisplay = $('.zip-data');
coffeeQuiz = $('#centerQuiz');

const coffeeAPI = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-coffee-api.p.rapidapi.com/drinks/unique/id/1?keys=description%2ChasAlcohol%2CcupSize%2Crecipe",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "533ff7e0a9msh3eba0022d84c638p19ec67jsnb6f2f7fce0a0",
		"X-RapidAPI-Host": "the-coffee-api.p.rapidapi.com"
	}
};

const restaurantNear = {
	"async": true,
	"crossDomain": true,
	"url": "https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "81ab8adb7dmsha1dccf88ead99f0p166e50jsn077cda1fb367",
		"X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com"
	}
};

coffeeQuiz.on('click', function() {
    console.log(restaurantNear)

    
});

zipCodeBtn.on('click', function() {
    console.log(coffeeAPI)






    var zipCode = $('#zip-code-btn').val();
    if (zipCode.length !== 5) {
        $('#zip-code-btn').val('');
        alert('Please enter a valid zip code');
    } else {
        //Locator API
        $.ajax({
            url: 'https://the-coffee-api.p.rapidapi.com/drinks/unique/id/1',
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

});
