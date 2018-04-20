
var cityID;
var countryID;
var APIkey;
var queryURL;

function clear() {
    $("#display-div").empty(); 
}

$("#clear-button").on("click", function(event) {

event.preventDefault();

clear();

});

$(document).ready(function() {
  if(localStorage.query !== 'undefined') {
    getWeatherUpdates(localStorage.query);
  }

  $("#click-button").on("click", function() {
    cityID = $("#city").val().trim();
    countryID = $("#country").val().trim();

    APIkey = "f6b871c148f6c510";

    queryURL = "https://api.wunderground.com/api/" + APIkey + "/forecast10day/geolookup/conditions/q/" + countryID + "/" + cityID + ".json";


      event.preventDefault();

      clear();

      getWeatherUpdates(queryURL);

   });
   function getWeatherUpdates(query) {

      $.ajax({
       url: query,
       method: "GET"
       
     })
     .then(function(response) {
         console.log(query);
         console.log(response);
        
         $(".city").html("<h1 class='text-center'>" + response.location.city + " Weather Details</h1>");
        //  $(".country").text("Country: " + response.location.country);
        //  $(".weather").text("Current Weather Details: " + response.location.wuiurl).attr("href", response.location.wuiurl);
         var forecast = response.forecast.simpleforecast.forecastday;


         var weatherRow = $("<div class='row'>");

         for(i = 0; i < 5; i++){

            var weatherDisplay = $("<div class='col-sm'>");
            
        //  var dateTime = response.forecast.simpleforecast.forecastday.date.pretty;
        //  var dateTime = moment();
        //  console.log("CURRENT TIME: " + moment(dateTime).format("hh:mm"));
             weatherDisplay.html("<h3>" + forecast[i].date.weekday_short + "</h3><br><img src='" + forecast[i].icon_url + "'><br><p>Location: " + "<br>" + response.location.country_name + 
             "<p>Date: " + "<br>" + forecast[i].date.month + "/" + forecast[i].date.day + "/" + forecast[i].date.year + 
             "<p>Conditions: "+ "<br>" + forecast[i].conditions + "     " + "<br>" + "<br><span id='highTemp'>"+forecast[i].high.fahrenheit+"</span> | <span id='lowTemp'>"+forecast[i].low.fahrenheit+"</span>");
             weatherRow.append(weatherDisplay);

         }

         $("#display-div").append(weatherRow);

         localStorage.clear();
         localStorage.setItem("query", query);

     });
   }
          //if(weatherData.zipcode === "" && weatherData.city === ""){
              //console.log("zip code or city was not provided");
              
});
