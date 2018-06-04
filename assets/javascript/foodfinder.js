
var cityInput = "west los angeles"
var keywordInput = ""
var radiusInput = 5000

var locationQueryURL = "https://developers.zomato.com/api/v2.1/locations?query=" + cityInput

var latitude;
var longitude;

$.ajax({
  method: "GET",
  url: locationQueryURL,
  headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
}).then(function(response){
  latitude = response.location_suggestions[0].latitude;
  longitude = response.location_suggestions[0].longitude;
  console.log(latitude, longitude)
})

var restaurantQueryURL = "https://developers.zomato.com/api/v2.1/search?q=" + keywordInput + "&lat=" + latitude + "&lon=" + longitude + "&radius=" + radiusInput

$.ajax({
  method: "GET",
  url: restaurantQueryURL,
  headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
}).then(function(response){
  console.log(response)
})











var namesearchES= "2 for 1 Pizza"

var latitudeES=34.039524;
var longitudeES=-118.309551;



var restaurantURLES="https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&latitude=" + latitudeES + "&longitude=" + longitudeES+ "&method=both&search=" + namesearchES


$.ajax({
  method: "get",
  url: restaurantURLES,
}).then(function(results){
  console.log(results.restaurants[2].apiKey)
  $.ajax({
    method: "get",
    url:  'https://api.eatstreet.com/publicapi/v1/restaurant/' + results.restaurants[2].apiKey
     + '/menu?access-token=89c8d7ed28eb8302&includeCustomizations=false'
  }).then(function(results2){
    console.log(results2)
   for (var i = 0; i < results2.length; i++){
      for (var x = 0; x < results2[i].items.length; x++){
        console.log(results2[i].items[x].description)
        
        
      
   
      }}
  })
})








// url with lat/long search name and address:  https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&latitude=34.059003&longitude=-118.418866&method=both&search=california+pizza+kitchen&street-address=10250+Santa+Monica+Blvd+%232800,+Los+Angeles,+CA+90067

// url with just address , it that gives all restaurants:    https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=2a98759c3f05101c&method=both&street-address=659+S+Broadway+Los+Angeles,+CA&search=901+Bar+and+grill"
      


  // url with out address:  https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&latitude=34.059003&longitude=-118.418866&method=both&search=california+pizza+kitchen




// error url concole said either long/lat or address much be inputted: https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&latitude=" + latitudeES + "&longitude=" + longitudeES + "&method=both&search=" + namesearchES



//url with address and search name  "https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&method=both&search=california+pizza+kitchen&street-address=10250+Santa+Monica+Blvd+%232800,+Los+Angeles,+CA+90067"





      