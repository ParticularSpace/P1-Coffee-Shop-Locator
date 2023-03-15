// Coffee recipes

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-coffee-api.p.rapidapi.com/drinks",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "81ab8adb7dmsha1dccf88ead99f0p166e50jsn077cda1fb367",
		"X-RapidAPI-Host": "the-coffee-api.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
// restaurant locator.
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "81ab8adb7dmsha1dccf88ead99f0p166e50jsn077cda1fb367",
		"X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

