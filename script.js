var app_token = "t1Gj7NDwL5V0BYVtdnQVM0prM"
var ZIP = ""
function ajaxCallNY(zipcode){
$.ajax({
    url: "https://data.cityofnewyork.us/resource/72ss-25qh.json?zip_code=" + zipcode,
    type: "GET",
    data: {
      "$limit" : 50,
      "$$app_token" : app_token
    }
}).done(function(data) {
  console.log(data);
  $("#zipcode").empty();
  for (var i=0; i<data.length; i++){
    var nyDiv = $(`<div class="col s12 m6">
                  <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                  <span class"card-title">${data[i].agency_id}</span>
                  <p>${data[i].address}</p>
                  <p><a href="${data[i].website}">Website</a></p>
                  </div>
                  </div>
                  </div>
                  `);
      $("#zipcode").append(nyDiv);
  }
});
}
//condom distribution center function
 function getCondomLocationsByZip(zip){
  var condomURL = "https://data.cityofnewyork.us/resource/4kpn-sezh.json?Zipcode=" + zip;
  $.get(condomURL)
  .then(function(res) {
    console.log(res);
    $("#condom-sites").empty();
      for (var i = 0; i < res.length; i++) {
          var site = $(`
          <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                  <span class="card-title">${res[i].facilityname}</span>
                  <p>${res[i].address}</p>
                  </div>
                  </div>
              </div>
              </div>
          `);
          $("#condom-sites").append(site);
      }
  });
 }
    ajaxCallNY(ZIP)
    $("#submitbutton").on("click", function(event){
        event.preventDefault();
        var userZip = $("#search-input").val().trim();
        ajaxCallNY(userZip);
        getCondomLocationsByZip(userZip);
    })



    var keyZip
    var zipHoodData = {};
      zipHoodData["Kingsbridge - Riverdale"] = ["10463","10471"]
      zipHoodData["Northeast Bronx"] = ["10466", "10469", "10470", "10475"]
      zipHoodData["Fordham - Bronx Park"] = ["10458", "10467", "10468"]
      zipHoodData["Pelham - Throgs Neck"] = ["10461", "10462", "10464", "10465", "10472", "10473"]
      zipHoodData["Crotona - Tremont"] = ["10453", "10457", "10460"]
      zipHoodData["High Bridge - Morrisania"] = ["10451", "10452", "10456"]
      zipHoodData["Hunts Point - Mott Haven"] = ["10454", "10455", "10459", "10474"]
      zipHoodData["Greenpoint"] = ["11211", "11222"]
      zipHoodData["Downtown - Heights - Park Slope"] =["11201", "11205", "11215", "11217", "11231", "11243"]
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
    

    // submit button on click event
    $("#submitbutton").on("click", function(event) {

      $("#neighborhood-name").empty();
      $("#HIVcases").empty();

      $("#hiv-cases-hood").addClass("blue-grey darken-1 white-text");


      event.preventDefault();

      var userZip = $("#search-input").val();

        // iterate thru object keys in zipHoodData object
        // to match userZip with neighborhood names
        for (var key in zipHoodData) {		
        if (zipHoodData[key].indexOf(userZip) >= 0) {
          keyZip = key;
      
          $("#neighborhood-name").append(keyZip);
          };
        };
         var queryURL = "https://data.cityofnewyork.us/resource/ykvb-493p.json?" + "neighborhood=" + keyZip + "&sex=" + "All" + "&race=" + "All" + "&year=2013" ;
        
        // AJAX call
        $.when(
        $.get(queryURL, function(response) {
        }),
        ).then(function(response) {	

        $("#HIVcases").append(response[0].hiv_diagnoses_num);
      });
      });