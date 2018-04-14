// https://developers.zomato.com/api/v2.1/search?entity_id=259&entity_type=city&start=20&count=20

// Find the rating of any resteraunt in any city



$(document).ready(function() {

    // var queryURL =  "https://developers.zomato.com/api/v2.1/search?entity_id=259&entity_type=city&start=20&count=20";

    $("#cities").empty();
    $("#nyc").click(function() {
        event.preventDefault();

        console.log('clicked');

        var entity = $(this).attr("data-id");

        console.log(entity);

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

                // console.log(results);

                

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
    
        });

    });

    
