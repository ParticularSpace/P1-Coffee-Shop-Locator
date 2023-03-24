let longi = '';
let lati = '';

let rec; // recipes
let loc; // location
//let loop = loc.length;

let test = "flat_white";

	// external variable: let x = value of quiz score.
	let $x = localStorage.getItem("coffeeType"); // = quiz score;
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
	  displayRecipes();
	});





	// displayRecipes does exactly that. It's target is index.html under the quiz container. 
	function displayRecipes () {
		let counter = rec.recipe.ingredients.length;
		let counter2 = rec.recipe.instructions.length;
		let pHolder1 = rec.name;
		let tempArray = [];

	
	
		for(j = 0; j < counter; j++){
			tempArray.push(rec.recipe.ingredients[j]);
		}
	
		let pHolder2 = tempArray.map(function(el){
			return el.name + " " + el.quantity;
		});

		let pHolder3 = [];

		for(k = 0; k < counter2; k++){
			pHolder3.push(rec.recipe.instructions[k]);
		}

		let $newLi = $("<li/>")
			.addClass("card")
			.attr("style","background-color: lightblue; padding: 1%; border-radius: 12px; margin-top: 2%; list-style-type: none;transition: all 0.2s ease-in-out; background: linear-gradient(124deg, cadetblue, lightskyblue, lightsteelblue,lightblue, cornflowerblue); background-size: 1800% 1800%; -webkit-animation: rainbow 8s ease infinite;-z-animation: rainbow 8s ease infinite;-o-animation: rainbow 8s ease infinite;animation: rainbow 12s ease infinite;")
			.html(pHolder1 + ": " + pHolder2.join(", ") + "... " + pHolder3.join(", "));
		$(".recipe-container").append($newLi);

	};

// this function dynamically creates the html elements along with css attributes for the location api to display its results onto the page.
function displayLocations () {

	let $parent = $(".locations");

	if($parent.children().length > 0){
		$parent.empty();

	}
	
	for(let i = 0; i < loc.length; i++){

		let temp1 = loc[i].poi.name;
		let temp2 = loc[i].address.streetNumber;
		let temp3 = loc[i].address.streetName;
		let temp4 = loc[i].poi.phone;
		let $newLi = $("<li/>")
		.addClass("card")
		.attr("style","background-color: beige; padding: 1%; border-radius: 12px; margin-top: 2%; list-style-type: none")//;transition: all 0.2s ease-in-out; background: linear-gradient(124deg, cadetblue, lightskyblue, lightsteelblue,lightblue, cornflowerblue); background-size: 1800% 1800%; -webkit-animation: rainbow 8s ease infinite;-z-animation: rainbow 8s ease infinite;-o-animation: rainbow 8s ease infinite;animation: rainbow 12s ease infinite;
		.html(temp1 + ", " + temp2 + " " + temp3 + ", " + temp4);

	$(".locations").append($newLi);

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

			displayLocations();
		});
		
	}

	// this is the search button function that will call for the cafes.
	$("#zip-code-btn").click(function(){
		let $zipCodeBtn = $(".form-control").val()

		let apiKey = "4f9b9f0d81395d4880a33e43a1783f9e";
		//console.log($zipCodeBtn);
    	let weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent($zipCodeBtn)}&units=imperial&appid=${encodeURIComponent(apiKey)}`;

	

		fetch(weatherURL)
        	.then(function(response){
            return response.json();
        })
    	.then(function(data){
        	//console.log(data);
			//===========================
			lati = data.city.coord.lat;
			longi = data.city.coord.lon;
			
			//console.log(lati);
			//console.log(longi);
			secondCall(lati,longi);
			
		});
	
		
		
	});





	
});


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
