$(document).ready(function(){
  console.log('ready to go');
  $.ajax('http://www.omdbapi.com/?s=jaws')
  .then(function(movies){
    var myMovies = movies.Search;
    console.log('movies are:', myMovies);
    for (var i = 0; i < myMovies.length; i++) {
      var movie = myMovies[i];
      //console.log('movies', movie);
      var title = movie.Title;
      $.ajax(`http://www.omdbapi.com/?t=${title}&tomatoes=true&plot=full`)
        .then(function(detailedMovie){
          var m = detailedMovie;
          console.log('deets:', m);
          var genre = m.Genre;
          var year = m['Year'];
          var actors = m.Actors;
          var tomatoes = m.tomatoMeter;
          var plot = m.Plot;
          var imgUrl = m.Poster;
          $('#content').append(`
              <div>
                <h1><strong>Title:</strong> ${title}</h1>
                <p><strong>Year:</strong> ${year}</p>
                <img src=${imgUrl} />
                <p><strong>Plot:</strong> ${plot}</p>
              </div>
            `
          )
        })
      // var year = movie['Year'];
      // var imgUrl = movie['Poster'];
      if(imgUrl === 'N/A'){
        imgUrl = 'http://www.fillmurray.com/g/200/300';
      }

    }
  })




})
