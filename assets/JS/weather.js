
$("#click-button").on("click", function() {


    var cityID = $("#city").val().trim();
    
    var APIkey = "f11f4afd34871da9528775f1a3c40f4f";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityID + "&APPID=" + APIkey;


    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);
        console.log(response);


        
        

        //$(".city").html("<h1>" + response.name + " Weather Details</h1>");
        //$(".wind").text("Wind Speed: " + response.wind.speed);
        //$(".humidity").text("Humidity: " + response.main.humidity);
        //$(".temp").text("Temperature (F) " + response.main.temp);



    });
 });