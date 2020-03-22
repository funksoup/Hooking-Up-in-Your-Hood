
// var userZip = "11206";

var keyZip

var zipForm = document.getElementById("zipForm");

var zipHoodData = {};
	
	zipHoodData["Kingsbridge - Riverdale"] = ["10463","10471"]
	zipHoodData["Northeast Bronx"] = ["10466", "10469", "10470", "10475"]
	zipHoodData["Fordham - Bronx Park"] = ["10458", "10467", "10468"]
	zipHoodData["Pelham - Throgs Neck"] = ["10461", "10462", "10464", "10465", "10472", "10473"]
	zipHoodData["Crotona - Tremont"] = ["10453", "10457", "10460"]
	zipHoodData["High Bridge - Morrisania"] = ["10451", "10452", "10456"]
	zipHoodData["Hunts Point - Mott Haven"] = ["10454", "10455", "10459", "10474"]

	zipHoodData["Greenpoint"] = ["11211", "11222"]
	zipHoodData["Downtown - Heights - Park Slope"] =["11201", "11205", "11215", "11217", "11231"]
	zipHoodData["Bedford Stuyvesant - Crown Heights"] = ["11213", "11212", "11216", "11233", "11238"]
	zipHoodData["East New York"] = ["11207", "11208"]
	zipHoodData["Sunset Park"] = ["11220", "11232"]
	zipHoodData["Borough Park"] = ["11204", "11218", "11219", "11230"]
	zipHoodData["East Flatbush - Flatbush"] = ["11203", "11210", "11225", "11226"]
	zipHoodData["Canarsie - Flatlands"] = ["11234", "11236", "11239"]
	zipHoodData["Bensonhurst - Bay Ridge"] = ["11209", "11214", "11228"]
	zipHoodData["Coney Island - Sheepshead Bay"] = ["11223", "11224", "11229", "11235"]
	zipHoodData["Williamsburg - Bushwick"] = ["11206", "11221", "11237"]

	zipHoodData["Washington Heights - Inwood"] = ["10031", "10032", "10033", "10034", "10040"]
	zipHoodData["Central Harlem - Morningside Heights"] = ["10026", "10027", "10030", "10037", "10039"]
	zipHoodData["East Harlem"] = ["10029", "10035"]
	zipHoodData["Upper Westside"] = ["10023", "10024", "10025"]
	zipHoodData["Upper Eastside"] = ["10021", "10028", "10044", "10128"]
	zipHoodData["Chelsea - Clinton"] = ["10001", "10011", "10018", "10019", "10020", "10036"]
	zipHoodData["Gramercy Park - Murray Hill"] = ["10010", "10016", "10017", "10022"]
	zipHoodData["Greenwich Village - SoHo"] = ["10012", "10013", "10014"]
	zipHoodData["Union Square - Lower Eastside"] = ["10002", "10003", "10009"]
	zipHoodData["Lower Manhattan"] = ["10004", "10005", "10006", "10007", "10038", "10280"]

	zipHoodData["Long Island City - Astoria"] = ["11101", "11102", "11103", "11104", "11105", "11106"]
	zipHoodData["West Queens"] = ["11368", "11369", "11370", "11372", "11373", "11377", "11378"]
	zipHoodData["Flushing - Clearview"] = ["11354", "11355", "11356", "11357", "11358", "11359", "11360"]
	zipHoodData["Bayside - Little Neck"] = ["11361", "11362", "11363", "11364"]
	zipHoodData["Ridgewood - Forest Hills"] = ["11374", "11375", "11379", "11385"]
	zipHoodData["Fresh Meadows"] = ["11365", "11366", "11367"]
	zipHoodData["Southwest Queens"] = ["11414", "11415", "11416", "11417", "11418", "11419", "11420", "11421"]
	zipHoodData["Jamaica"] = ["11412", "11423", "11432", "11433", "11434", "11435", "11436"]
	zipHoodData["Southeast Queens"] = ["11004", "11005", "11411", "11413", "11422", "11426", "11427", "11428", "11429"]
	zipHoodData["Rockaway"] = ["11691", "11692", "11693", "11694", "11695", "11697"]

	zipHoodData["Port Richmond"] = ["10302", "10303", "10310"]
	zipHoodData["Stapleton - St. George"] = ["10301", "10304", "10305"]
	zipHoodData["Willowbrook"] = ["10314"]
	zipHoodData["South Beach - Tottenville"] = ["10306", "10307", "10308", "10309", "10312"]




// function keysToText(stringZip) {
	
// 	for (var i=0; i<stringZip.length; i++) {
// 		// stringZip[i];
// 	// for (var char of stringZip) {
		
// 		if(stringZip.charCodeAt(i) >= 65 && stringZip.charCodeAt(i) <= 90) {
		
// 		var arr = stringZip.split("");
// 		arr.splice(i, 0, " ");
// 		}
// 	}

// 	arr[0] = arr[0].toUpperCase();
// 	var userHood = arr.join("");
// 	return userHood;


// }

// zipHoodData.centralBronx.filter(function(currVal) {
// 	if (userZip == currVal) {
// 		$("#neighborhood-name").append(currVal);
// 	}
// });

// zipHoodData.centralBrooklyn.filter(function(currVal) {
// 	if (userZip == currVal) {
// 		$("#neighborhood-name").append(currVal);
// 	}
// });




$("#button-submit").on("click", function(event) {

	// $("#hiv-cases").currVal('');

	event.preventDefault();

	console.log(userZip);

	// var APIKey = "qj67cp6rjxq8k99n6r88tfnd";

	var userZip = $("#input-zip").val();

		// iterate thru object keys 
		for (var key in zipHoodData) {		
		if (zipHoodData[key].indexOf(userZip) >= 0) {
			keyZip = key;
			// $("#neighborhood-name").append(keysToText(key));
			$("#neighborhood-name").append(keyZip);
			};
		};




   	var queryURL = "https://data.cityofnewyork.us/resource/ykvb-493p.json?" + "neighborhood=" + keyZip + "&sex=" + "All" + "&race=" + "All" + "&year=2013" ;

	

		// debugger;

  	// AJAX call
    $.when(
  	// Get the HTML
 	 $.get(queryURL, function(response) {
   		console.log(response);
		// $("#neighborhood-name").append(userHood);	
   		

 	 }),

 	 // $.get(queryURLForecast, function(responseForecast) {
   // 		// console.log(responseForecast);
 	 // }),


		).then(function(response) {	
		console.log("2nd response:", response);
		// debugger;
		$("#hiv-cases").append(response[0].hiv_diagnoses_num);
   		console.log("hiv cases",response[0].hiv_diagnoses_num);

	});




	});
