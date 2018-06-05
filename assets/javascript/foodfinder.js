
var cityInput = "west los angeles"

var radiusInput = 5000

var locationQueryURL;

var cityLatitude;
var cityLongitude;

var restaurantLatitude;
var restaurantLongitude;

// create a queryurl for zomato CUISINES using latitude and longitude

var cuisineQueryURL;
var cuisineIds;
var selectedCuisine;

// create a queryurl for zomato SEARCH using latitude, longitude, cuisine and radius

var restaurantQueryURL;

var restaurantList = [];

// ajax call to zomato LOCATIONS to get cityLatitude and cityLongitude of a given city


$("#firstsubmit").on("click", function(event){

  event.preventDefault()
  cityInput = $("#citySearch").val()
  radiusInput = parseInt($("#inputGroupSelect01").val()) * 1610
  localStorage.setItem("cityname", cityInput)
  localStorage.setItem("radius", radiusInput)
  window.location.href = "cuisinesearch.html"
})

$("cuisinesearch.html").ready(function(){
locationQueryURL = "https://developers.zomato.com/api/v2.1/locations?query=" + localStorage.getItem("cityname")

  $.ajax({
    method: "GET",
    url: locationQueryURL,
    headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
  }).then(function(response){
    cityLatitude = response.location_suggestions[0].latitude;
    cityLongitude = response.location_suggestions[0].longitude;

    cuisineQueryURL = "https://developers.zomato.com/api/v2.1/cuisines?" + "lat=" + cityLatitude + "&lon=" + cityLongitude

    $.ajax({
      method: "GET",
      url: cuisineQueryURL,
      headers: { "user-key": "69efdd6d88045ed798460c615c4d6ad9" }
    }).then(function(response){
      console.log(cuisineQueryURL)
      cuisineIds = response.cuisines
    
      for (var i = 0; i < cuisineIds.length; i++){
        var dropdownitem = $("<option>").attr("value", i).text(cuisineIds[i].cuisine.cuisine_name)
        $(".custom-select2").append(dropdownitem)
      }
    })
  })
})



// click listener on cuisine select page; selectedCuisine provides cuisine id

$(document.body).on("click", "#secondsubmit", function(){
  
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
    restaurantList = response.restaurants;
    console.log(restaurantList)

    $("body").empty()

    for (var i = 0; i < 20; i++){
      var parentDiv = $("<div>")
      var linkName = $("<a>").attr({href: "#", id: i}).text(restaurantList[i].restaurant.name).addClass("restaurantlink")
      var address = $("<div>").text(restaurantList[i].restaurant.location.address)
      var rating = $("<div>").text(restaurantList[i].restaurant.user_rating.aggregate_rating)
      parentDiv.append(linkName, address, rating)
      $("body").append(parentDiv)
  
    }
  })

 
})

$(document.body).on("click", ".restaurantlink", function(){
  console.log($(this).text())
  localStorage.setItem("restaurantname", $(this).text())
  localStorage.setItem("restaurantlatitude", restaurantList[$(this).attr("id")].restaurant.location.latitude)
  localStorage.setItem("restaurantlongitude", restaurantList[$(this).attr("id")].restaurant.location.longitude)
  
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





      