$(document).ready(function() {

    var places = [];

 
  

   

                
                 $("#addCity").on("click", function(event) {
                    event.preventDefault();
                
                
                    var fav = $("#city-input").val().trim();
                
                    var queryURL =  "https://developers.zomato.com/api/v2.1/search?entity_id=" + fav + "&entity_type=city&start=7&count=7";

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

                     var currency = $("<p>").text("Currency: " + results[i].restaurant.currency);
                    

                     var favImage = $("<img>");

                
                     favImage.css({'width': '290px' , 'height': '210px'});

                     favImage.attr("src", results[i].restaurant.featured_image);

                        favDiv.append(favImage);

                       favDiv.append(rating).append(restaurantName).append(location).append(locality).append(costForTwo).append(currency);
                 

                     $("#cities").prepend(favDiv);

                     $('img').on('error', function () {
                        $(this).hide();
                      });

                 }
                      
                });
                    
                 });
            });

        

     
    
    





    

    
