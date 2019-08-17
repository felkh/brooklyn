
(async () => {
    const seasonsLength = await getAll();
    const urlParams = new URLSearchParams(window.location.search);

    let season = urlParams.get('season');

    if (!season) {
      season = seasonsLength -1;
    }
    console.log('in here', season);
    const html = await getSeason(season);
    // console.log('html from season', season);
    $('.brooklyn99').html(html);

})();

async function getAll() {
  return new Promise((resolve, reject) => {

    $.get('https://api.themoviedb.org/3/tv/48891?api_key=82eb0ac25f815361824054b571667b78&language=en-US').success( ( allData ) => {
      resolve(allData.seasons.length);
    });
  });
}

async function getSeason(season) {
  let htmlString = "";
  return new Promise((resolve, reject) => {
    $.get(`https://api.themoviedb.org/3/tv/48891/season/${season}?api_key=82eb0ac25f815361824054b571667b78&language=en-US`).success( function( seasonData ) {
      console.log(seasonData.name);

      $.each(seasonData.episodes, function(index, episode) {
        console.log(episode.episode_number, episode.name);
        htmlString += `<li> 
          ${episode.episode_number} - ${episode.name} - ${episode.air_date}
        <p>${episode.overview}</p> 
        </li>`;
      });
      resolve(htmlString);
    }); 
  });

}