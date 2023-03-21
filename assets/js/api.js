let longi = '';
let lati = '';

let rec; // recipes
let loc; // location

// external variable: let x = value of quiz score.
let $x = 'flat_white'; // = quiz score;
// Coffee recipes

const coffeeRecipes = {
	"async": true,
	"crossDomain": true,
	"url": "https://the-coffee-api.p.rapidapi.com/drinks/unique/name/" + $x + "?keys=description%2ChasAlcohol%2CcupSize%2Crecipe",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b89c6902dbmsh56ed3f58eeefa96p1b1bcejsn66fb37adad3c", 
		"X-RapidAPI-Host": "the-coffee-api.p.rapidapi.com"
	}
};

// This requests the data back from the coffee recipe API. 
$.ajax(coffeeRecipes).done(function (response) {
	console.log(response);
	rec = response;
});


// 
/*
function displayRecipes () {
	let $newDiv = $("<div/>")
		.addClass("card")
		.html(rec.name);
	$("locations").append($newDiv);

};
*/

function displayLocations () {
	//let loop = loc.length;
	
	for(let i = 0; i < loc.length; i++){
	
	let $newDiv = $("<div/>")
		.addClass("card")
		.html(loc[i].poi.name);
	$("locations").append($newDiv);

	}
};

$(document).ready(function () {
	
	// this function requests the "cafe" within city area in a 5000(feet?) radius.
	function secondCall () {
		
		let searchApi = `https://api.tomtom.com/search/2/categorySearch/cafe.json?lat=${encodeURIComponent(lati)}&lon=${encodeURIComponent(longi)}&radius=5000&openingHours=nextSevenDays&key=FLQAGv9rGb43fsKGnXayxy5Tm0Au1azE`;
		
		console.log(searchApi,"Api");
		fetch(searchApi)
			.then(function(response){
			return response.json();
		})
			.then(function(data){
			console.log(data);
			loc = data.results;

	
		});
	}

	// this is the search button function that will call for the cafes.
	$(".btn1").click(function(){
		let $zipCodeBtn = $("#zip-code-btn").val()

		let apiKey = "4f9b9f0d81395d4880a33e43a1783f9e";
		//console.log($zipCodeBtn);
    	let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent($zipCodeBtn)}&units=imperial&appid=${encodeURIComponent(apiKey)}`;

	

		fetch(weatherURL)
        	.then(function(response){
            return response.json();
        })
    	.then(function(data){
        	console.log(data);
			//===========================
			lati = data.city.coord.lat;
			longi = data.city.coord.lon;
			
			//console.log(lati);
			//console.log(longi);
			secondCall(lati,longi);
			
		});
	
		//displayLocations();
		
	});





	
});
