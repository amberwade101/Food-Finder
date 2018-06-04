
var cityInput = "west los angeles"

var radiusInput = 5000

var locationQueryURL = "https://developers.zomato.com/api/v2.1/locations?query=" +          cityInput

var cityLatitude;
var cityLongitude;

var restaurantLatitude;
var restaurantLongitude;

// ajax call to zomato LOCATIONS to get cityLatitude and cityLongitude of a given city

$.ajax({
  method: "GET",
  url: locationQueryURL,
  headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
}).then(function(response){
  cityLatitude = response.location_suggestions[0].latitude;
  cityLongitude = response.location_suggestions[0].longitude;
  // console.log(latitude, longitude)
})

// create a queryurl for zomato CUISINES using latitude and longitude

var cuisineQueryURL = "https://developers.zomato.com/api/v2.1/cuisines?" + "lat=" + cityLatitude + "&lon=" + cityLongitude
var cuisineIds;
var selectedCuisine;

$.ajax({
  method: "GET",
  url: cuisineQueryURL,
  headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
}).then(function(response){

  cuisineIds = response.cuisines

  for (var i = 0; i < cuisineIds.length; i++){
    var dropdownitem = $("<option>").attr("value", i).text(cuisineIds[i].cuisine.cuisine_name)
    $(".custom-select").append(dropdownitem)
  }
  
  
})

// create a queryurl for zomato SEARCH using latitude, longitude, cuisine and radius

var restaurantQueryURL = "https://developers.zomato.com/api/v2.1/search?" + "&lat=" + cityLatitude + "&lon=" + cityLongitude + "&radius=" + radiusInput + "&cuisine=" + selectedCuisine

// click listener on cuisine select page; selectedCuisine provides cuisine id

$(document.body).on("click", ".btn-outline-secondary", function(){
  
  console.log($("#inputGroupSelect04")[0].value)
  selectedCuisine = cuisineIds[$("#inputGroupSelect04")[0].value].cuisine.cuisine_id
  restaurantQueryURL = "https://developers.zomato.com/api/v2.1/search?" + "&lat=" + cityLatitude + "&lon=" + cityLongitude + "&radius=" + radiusInput + "&cuisines=" + selectedCuisine;
  console.log(selectedCuisine)
  console.log(restaurantQueryURL)

  $.ajax({
    method: "GET",
    url: restaurantQueryURL,
    headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
  }).then(function(response){
    console.log(response)
  })
})









$.ajax({
  method: "get",
  // url:  'https://api.eatstreet.com/publicapi/v1/restaurant/d6030cd1335dc7d3459c89af9c680205d30b6aeaa238f8d1/menu?includeCustomizations=false'
  url: "https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=2a98759c3f05101c&method=both&street-address=659+S+Broadway+Los+Angeles,+CA&search=901+Bar+and+grill"
}).then(function(results){
  // console.log(results)
  $.ajax({
    method: "get",
    url:  'https://api.eatstreet.com/publicapi/v1/restaurant/' + results.restaurants[0].apiKey + '/menu?access-token=2a98759c3f05101c&includeCustomizations=false'
  }).then(function(results2){
    // console.log(results2)
    for (var i = 0; i < results2.length; i++){
      for (var x = 0; x < results2[i].items.length; x++){
        // console.log(results2[i].items[x].description)
        
      }
    }
  })
})





      