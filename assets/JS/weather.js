
//Weather Undergroun API : f6b871c148f6c510
//Open Weather Map API : f11f4afd34871da9528775f1a3c40f4f

$("#click-button").on("click", function() {

    event.preventDefault();


    var cityID = $("#city").val().trim();
    var countryID = $("#country").val().trim();
    
    var APIkey = "f6b871c148f6c510";
    //var APIkey = "f11f4afd34871da9528775f1a3c40f4f";

    var queryURL = "https://api.wunderground.com/api/" + APIkey + "/forecast10day/geolookup/conditions/q/" + countryID + "/" + cityID + ".json";

    //var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityID + "&units=imperial&APPID=" + APIkey;
    

    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);
        console.log(response);
        //var results = response.list;


        $(".city").html("<h1>" + response.location.city + " Weather Details</h1>");
        $(".country").text("Country: " + response.location.country);
        $(".weather").text("Current Weather Details: " + response.location.wuiurl);
        //$(".weather").attr("src", response.location.wuiurl).text("Current Weather Details: " + response.location.wuiurl);

        //$(".date").text("Date: " + response.list[0].dt_txt);
        //$(".humidity").text("Humidity: " + response.list[0].main.humidity);
        //$(".temp").text("Temperature: (F) " + response.list[0].main.temp);
        //$(".wind").text("Wind Speed: " + response.list[0].wind.speed);

        //$(".date1").text("Date: " + response.list[8].dt_txt);
        //$(".humidity1").text("Humidity: " + response.list[8].main.humidity);
        //$(".temp1").text("Temperature: (F) " + response.list[8].main.temp);
        //$(".wind1").text("Wind Speed: " + response.list[8].wind.speed);
        //$(".weather1").text("Current Weather: " + response.list[8].weather[0].description);
    
        var forecast = response.forecast.simpleforecast.forecastday;

        var weatherRow = $("<div class='row'>");

        for(i = 0; i < 5; i++){
            var weatherDisplay = $("<div>");
            weatherDisplay.html("<h1>" + forecast[i].date.weekday_short + "</h1><br><img src='" + forecast[i].icon_url + "'><br><p>Conditions: "+ "<br>" + forecast[i].conditions + "     " + "<br><span id='highTemp'>"+forecast[i].high.fahrenheit+"</span> | <span id='lowTemp'>"+forecast[i].low.fahrenheit)+"</span>";
            weatherRow.append(weatherDisplay);
            
        }

        $("#display-div").append(weatherRow);

        //save to local storage (persistence)
        localStorage.clear();

        localStorage.setItem("cityID", cityID);
        localStorage.setItem("countryID", countryID);


    });

        $("#city").text(localStorage.getItem("cityID"));
        $("#country").text(localStorage.getItem("countryID"));

        //weatherData.zipcode = localStorage.getItem("addressZip");
        //weatherData.city = localStorage.getItem("addressCity");
        //console.log(weatherData.city);
        //console.log(weatherData.zipcode);


        //function clear() {
        //$("#input-display").empty();
        //}
        //$("#clear-button").on("click", function(event) {

        //event.preventDefault();
        
        //clear();


        //if(weatherData.zipcode === "" && weatherData.city === ""){
            //console.log("zip code or city was not provided");

        
       

   
 });

 //$("#clear-all").on("click", clear);