
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




// $.ajax({
//   method: "get",
//   // url:  'https://api.eatstreet.com/publicapi/v1/restaurant/d6030cd1335dc7d3459c89af9c680205d30b6aeaa238f8d1/menu?includeCustomizations=false'
//   url: "https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=2a98759c3f05101c&method=both&street-address=659+S+Broadway+Los+Angeles,+CA"
// }).then(function(results){
//   console.log(results)
//   $.ajax({
//     method: "get",
//     url:  'https://api.eatstreet.com/publicapi/v1/restaurant/' + results.restaurants[2].apiKey + '/menu?access-token=2a98759c3f05101c&includeCustomizations=false'
//   }).then(function(results2){
//     console.log(results2)
//     for (var i = 0; i < results2.length; i++){
//       for (var x = 0; x < results2[i].items.length; x++){
//         console.log(results2[i].items[x].description)
        
//       }
//     }
//   })
// })





      