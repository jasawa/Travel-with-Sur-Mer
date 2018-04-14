$(document).ready(function() {

    var places = [];

 
  

    function makeFavPush() {

       var buttons = $("#myCityButtons button")
       for(var i = 0; i < buttons.length; i++) {
        buttons[i].remove();
       }
       for (var i = 0; i < places.length; i++) {
       
    

          var newB = $("<button>");

      newB.addClass('city-button btn btn-secondary m-2');

      newB.attr("data-id", places[i]);
 
      newB.text(places[i]);
     
      $("#myCityButtons").append(newB);
       }
    }

    $("#cities").empty();
    
    function startThePage() {
        event.preventDefault();

        //console.log('clicked');

        var entity = $(this).attr("data-id");

        //console.log(entity);

         var queryURL =  "https://developers.zomato.com/api/v2.1/search?entity_id=" + entity + "&entity_type=city&start=5&count=5";

         $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "user-key":"254d49e71e47dd430d7c824c04f1b73e"
            }
            
            })

            .then(function(response) {
                console.log(response);
                 var results = response.restaurants;

                 for (var i = 0; i < results.length; i++) {

                     var favDiv = $("<div>");

                     var restaurantName = $("<p>").text("Name: " + results[i].restaurant.name);

                     var rating = $("<p>").text("Rating: " + results[i].restaurant.user_rating.aggregate_rating);
 
                     var location = $("<p>").text("Address: " + results[i].restaurant.location.address);

                     var locality = $("<p>").text("Local Area: " + results[i].restaurant.location.locality);

                     var costForTwo = $("<p>").text("Cost for Two: " + results[i].restaurant.average_cost_for_two);

                     var favImage = $("<img>");

                     favImage.attr("src", results[i].restaurant.featured_image);

                        favDiv.append(favImage);

                       favDiv.append(rating).append(restaurantName).append(location).append(locality).append(costForTwo);


                     $("#cities").prepend(favDiv);

                 }
                });
            }
                


                 $("#addCity").on("click", function(event) {
                    event.preventDefault();
                
                
                    var fav = $("#city-input").val().trim();
                
                    // The movie from the textbox is then added to our array
                    places.push(fav);
                
                    // Calling renderButtons which handles the processing of our movie array
                    makeFavPush();

                $(document).on("click", ".city-button", startThePage);
                    
                 });
            });
    
        

     
    
    





    

    
