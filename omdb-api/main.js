/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/

$(document).ready(function(){
  $('h1').text('Movie Info!!');
  $('button').on('click',function(){
    var text = $('#anInput').val();
    var url = `http://www.omdbapi.com/?t=${text}&y=&plot=full&r=json`;
    console.log(url);
    $.ajax(url).then(function(results){
      console.log(results);
      var title = results.Title;
      var actors = results.Actors;
      var poster = results.Poster;
      var year = results.Year;
      var id = results.imdbID;
      var score = results.Metascore;
      $('.resultsDiv').html(`
        <div>
        <h2>${title}</h2>
        </div>
        <br>
        <div>
        <img src = ${poster} />
        <p>${title} is a movie starring ${actors}. It was released in ${year} and got a metascore ranking of ${score}. If all these things make you think you may want to check it out here\'s the imdb id to search for ${id}. If you\'re still not sure there\'s a plot summary below</p>
        </div>
        <br>
        <div>
        <p><strong>Plot Summary</strong><br>${results.Plot}</p>
        </div>
    `)
    })
  })





});
