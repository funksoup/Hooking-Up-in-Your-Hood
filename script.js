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
      /*var paragraphText = data[i].agency_id;
      var phone = data[i].phone_number;
      var weblink = data[i].website;
      var newLink = $("<a>")
      newLink.text(weblink);
      newLink.attr("href", weblink);
      
    
      nyDiv.append(paragraphText);
      nyDiv.append(phone);
      nyDiv.append(newLink);*/
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
      for (var i = 0; i < 6; i++) {
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
