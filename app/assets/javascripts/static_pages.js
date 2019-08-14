var Seasons = $(function() {
  $.get("https://api.themoviedb.org/3/tv/48891/season/6?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season6 ) {
      console.log(season6.name)
      var htmlString = "";

      $.each(season6.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

  $.get("https://api.themoviedb.org/3/tv/48891/season/5?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season5 ) {
      console.log(season5.name);
      var htmlString2 = "";

      $.each(season5.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

  $.get("https://api.themoviedb.org/3/tv/48891/season/4?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season4 ) {
      console.log(season4.name);
      var htmlString3 = "";

      $.each(season4.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

  $.get("https://api.themoviedb.org/3/tv/48891/season/3?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season3 ) {
      console.log(season3.name);
      var htmlString4 = "";

      $.each(season3.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

  $.get("https://api.themoviedb.org/3/tv/48891/season/2?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season2 ) {
      console.log(season2.name);
      var htmlString5 = "";

      $.each(season2.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

  $.get("https://api.themoviedb.org/3/tv/48891/season/1?api_key=82eb0ac25f815361824054b571667b78&language=en-US").success( function( season1 ) {
      console.log(season1.name);
      var htmlString6 = "";

      $.each(season1.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });

      // console.log('html string', htmlString);
      $('.brooklyn99').html(htmlString, htmlString2, htmlString3, htmlString4, htmlString5, htmlString6);
            });
          });
        });
      });
    });
  });
});

$(Seasons);