$(document).ready(function(){
  $('#search').on('click', function(){
  var beer = $('#beerName').val().replace(/ /g,"_");
  $.ajax(`http://api.brewerydb.com/v2/search?key=f5c9343b036d0043ef4bf12ccbae0472&q=${beer}&type=beer`).then(function(beers){
    console.log('here are the beers:', beers);
    console.log(beers.data.length);
    console.log(beers.data[0].name)
    if(beers.hasOwnProperty('data') === false){
      $('#results').html(`<h2>Nothing could be found with that name. Are you sure it's a beer?</h2>`);
    }
    else{
      $('#results').html(`
        <h2>Here is a list of the top 10 beers matching the request you made</h2>
        `);
        for(var i = 0; i < 10; i++){

          if(beers.data[i].hasOwnProperty('name') === false){
            var name = 'this beer has no name!';
          }
          else{
            var name = beers.data[i].name;
          }
          if(beers.data[i].hasOwnProperty('description') === true){
            var description = beers.data[i].description;
          }
          else{
            var description = 'this beer has no description!';
          }
          if(beers.data[i].hasOwnProperty('labels') === false){
            img = 'https://www.fillmurray.com/200/300';
          }
          else{
            var img = beers.data[i].labels.large;
          }
          if(beers.data[i].hasOwnProperty('abv') === true){
            var abv = beers.data[i].abv;
          }
          else{
            var abv = 'cannot find abv';
          }
          if(beers.data[i].hasOwnProperty('description') === true){
            var profile = beers.data[i].style.description;
          }
          else{
            var profile = 'cannot find the profile'
          }
          if(beers.data[i].hasOwnProperty('ibu') === true){
            var ibu = beers.data[i].ibu;
          }
          else{
            var ibu = 'cannot find the ibu';
          }
          $('#results').append(`<li><strong>${name} abv:${abv} ibu:${ibu}</strong></li>`);
          $('#results').append(`<img src=${img}>`);
          $('#results').append(`<p>${description}</p>`);

        }
      }
    })

});
});
