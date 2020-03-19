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
      var nyDiv = $("<div>");
      var paragraphText = data[i].agency_id;
      var phone = data[i].phone_number;
      var weblink = data[i].website;
      var newLink = $("<a>")
      newLink.text(weblink);
      newLink.attr("href", weblink);
      
    
      nyDiv.append(paragraphText);
      nyDiv.append(phone);
      nyDiv.append(newLink);
      $("#zipcode").append(nyDiv);
  }
});
}
    ajaxCallNY(ZIP)
    $("#submitbutton").on("click", function(event){
        event.preventDefault();
        var userZip = $("#search-input").val().trim();
        ajaxCallNY(userZip);
    })
