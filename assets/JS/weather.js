
$("#click-button").on("click", function() {


    var cityID = $("#city").val().trim();
    
    var APIkey = "f11f4afd34871da9528775f1a3c40f4f";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityID + "&units=imperial&APPID=" + APIkey;


    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response) {
        console.log(queryURL);
        console.log(response);
        var results = response.list;


        $(".city").html("<h1>" + response.city.name + " Weather Details</h1>");
        $(".date").text("Date: " + response.list[0].dt_txt);
        $(".humidity").text("Humidity: " + response.list[0].main.humidity);
        $(".temp").text("Temperature: (F) " + response.list[0].main.temp);
        $(".wind").text("Wind Speed: " + response.list[0].wind.speed);
        $(".weather").text("Current Weather: " + response.list[0].weather[0].description);

        $(".date1").text("Date: " + response.list[8].dt_txt);
        $(".humidity1").text("Humidity: " + response.list[8].main.humidity);
        $(".temp1").text("Temperature: (F) " + response.list[8].main.temp);
        $(".wind1").text("Wind Speed: " + response.list[8].wind.speed);
        $(".weather1").text("Current Weather: " + response.list[8].weather[0].description);
       


    });
 });