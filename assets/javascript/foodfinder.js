//var APIKey= 'dfe59e8c95da55af';
    //key:2a98759c3f05101c

    //var queryURL="https://api.eatstreet.com//publicapi/v1/restaurant/access-token=dfe59e8c95da55af/menu?includeCustomizations=false";

     /*$.ajax({
    method: "get",
    // url 'https://api.eatstreet.com/publicapi/v1/restaurant/d6030cd1335dc7d3459c89af9c680205d30b6aeaa238f8d1/menu?includeCustomizations=false'
    url: "https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=89c8d7ed28eb8302&method=both&street-address=316+W.+Washington+Ave.+Madison,+WI"
  }).then(function(results){
    console.log(results)
  })*/
    //.then(function(response) {
        //console.log(queryURL);
       // console.log(response);
    //})

    $.ajax({
        method: "get",
        // url:  'https://api.eatstreet.com/publicapi/v1/restaurant/d6030cd1335dc7d3459c89af9c680205d30b6aeaa238f8d1/menu?includeCustomizations=false'
        url: "https://api.eatstreet.com/publicapi/v1/restaurant/search?access-token=2a98759c3f05101c&method=both&street-address=316+W.+Washington+Ave.+Madison,+WI"
      }).then(function(results){
        console.log(results.restaurants[2].apiKey)
        $.ajax({
          method: "get",
          url:  'https://api.eatstreet.com/publicapi/v1/restaurant/' + results.restaurants[2].apiKey + '/menu?access-token=2a98759c3f05101c&includeCustomizations=false'
        }).then(function(results2){
          console.log(results2)
        })
      })