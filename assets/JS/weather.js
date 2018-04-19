//Weather Undergroun API : f6b871c148f6c510
//Open Weather Map API : f11f4afd34871da9528775f1a3c40f4f
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

          //weatherData.zipcode = localStorage.getItem("addressZip");
          //weatherData.city = localStorage.getItem("addressCity");
          //console.log(weatherData.city);
          //console.log(weatherData.zipcode);

   });
   function getWeatherUpdates(query) {

      $.ajax({
       url: query,
       method: "GET"
       
     })
     .then(function(response) {
         console.log(query);
         console.log(response);
        
         $(".city").html("<h1>" + response.location.city + " Weather Details</h1>");
         //$(".country").text("Country: " + response.location.country);
         //$(".weather").text("Current Weather Details: " + response.location.wuiurl).attr("href", response.location.wuiurl);

         //$(".weather").attr("src", response.location.wuiurl).text("Current Weather Details: " + response.location.wuiurl);

         var forecast = response.forecast.simpleforecast.forecastday;


        //  var dateTime = response.forecast.simpleforecast.forecastday.date.pretty;
        //  var dateTime = moment();
        //  console.log("CURRENT TIME: " + moment(dateTime).format("hh:mm"));

         var weatherRow = $("<div class='row'>");

         for(i = 0; i < 5; i++){


        //var animalImage = $("<img>");
        //animalImage.attr("src", results[i].images.fixed_height.url);

            var weatherDisplay = $("<div>");
            //var weatherDisplay = $("<h1>");
            //weatherDisplay.text(forecast[i].date.weekday_short);
            //var weatherIcon = $("<img>");
            //weatherIcon.attr("src", forecast[i].icon_url);
            //var weatherLocation = $("<h3>");
            //weatherLocation.text(response.current_observation.display_location.full);
          
            //af//weatherDisplay.addClass()

            //af//var weatherImage = $('<img>');
            //af//weatherImage.attr('src', forecast[i].icon_url);

            
             
             weatherDisplay.html("<h1>" + forecast[i].date.weekday_short + "</h1><br><img src='" + forecast[i].icon_url + "'><br><p>Location: " + "<br>" + response.current_observation.display_location.full + "<p>Date: " + "<br>" + forecast[i].date.pretty + "<p>Conditions: "+ "<br>" + forecast[i].conditions + "     " + "<br>" + "<br><span id='highTemp'>"+forecast[i].high.fahrenheit+"</span> | <span id='lowTemp'>"+forecast[i].low.fahrenheit)+"</span>";
             weatherRow.append(weatherDisplay);
             //weatherRow.append(weatherIcon);
             //weatherRow.append(weatherLocation);

         }

         $("#display-div").append(weatherRow);


         //save to local storage (persistence)
         localStorage.clear();
         localStorage.setItem("query", query);

     });
   }

   //$("#clear-all").on("click", clear);

          //if(weatherData.zipcode === "" && weatherData.city === ""){
              //console.log("zip code or city was not provided");
              
});
