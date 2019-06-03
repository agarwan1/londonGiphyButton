 // Event listener for our cat-button
 $("#london-button").on("click", function() {

  // Storing our giphy API URL for a random cat image
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=a2LcASYPuxXKgyvEZBbdYHAOPWXMMvhx&tag=london";

  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    // After the data from the AJAX request comes back
    .then(function(response) {

      // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var londonImage = $("<img>");

      // Setting the londonImage src attribute to imageUrl
      londonImage.attr("src", imageUrl);
      londonImage.attr("alt", "london image");

      // Prepending the londonImage to the images div
      $("#images").prepend(londonImage);
    });
});