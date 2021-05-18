$(document).ready(function () {
  const urltoto = "https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1";
  const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w1280_and_h720_multi_faces/"

  //les tailles d'images utilsées dans TMDB//
  //                                  Min Res      Max Res  
  // poster   = Poster ............  500 x 750   2000 x 3000  
  // backdrop = Fanart ............ 1280 x 720   3840 x 2160  
  //still    = TV Show Episode ... 1280 x 720   3840 x 2160  
  //profile  = Actors Actresses ..  300 x 450   2000 x 3000  
  //logo     = TMDb Logo 



  $.ajax({
       url: urltoto,
       success: function (data) {
            console.log(data.results)
            let films = data.results;
            //il faut faire un random sur  les index du tableau contenu danx l'id bloc afin d'afficher les résultats de façon aléatoire
            const RandomIndex = Math.floor(Math.random() * (20));
            console.log(RandomIndex);
            randomBackDrop = data.results[RandomIndex].backdrop_path;

            films.forEach(function (film) {
                 let filmenhtml = `<div  class="carousel">`;
                 filmenhtml += `<div class="love">`;
                 filmenhtml += `<img style='height:700px ' src="${URL_IMAGE_PREFIX + randomBackDrop}"> `;
                 `</div>`;
                 `</div>`;
                 $("#d-block").append(filmenhtml)

            });

       }
  });

});


// BLOC BMP1 POPuLAR MOVIES
const URL_API_KEY = "b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3/movie/popular";
const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w200";

$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEARCH}?api_key=${URL_API_KEY}&query=harry&language=fr-FR`;

  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.results; // results est un array

      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel">`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd += `<img  class="m-3 rounded" style="width:180px" src="${URL_IMAGE_PREFIX + movie.poster_path}">`;
        movieHtmlToAdd += `<h5 style="text-align:center" > <a href="m.html?filmId=${movie.id}">${movie.title}></a> </h5>`;
        movieHtmlToAdd += "<h6 style ='text-align:center'> " + movie.release_date + "</h6>";
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $(".BMP1").append(movieHtmlToAdd);
      });
    },
  });
})

// BLOC TV ON AIR
const URL_API_MOVIE_S = "https://api.themoviedb.org/3/tv/on_the_air?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1";
const URL_IMAGE_PREF = "https://image.tmdb.org/t/p/w200";

$(function () {

  $.ajax({
    url: URL_API_MOVIE_S,
    success: function (data) {
      let TVS = data.results; // results est un array

      TVS.forEach(function (TV) {
        let movieHtmlToAdd = `<div  class="owl-carousel">`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd += `<img  class="m-3 rounded" style="width:180px" src="${URL_IMAGE_PREFIX + TV.poster_path}">`;
        movieHtmlToAdd += `<h5 style="text-align:center" > <a href="m.html?filmId=${TV.id}">${TV.name}></a> </h5>`;
        movieHtmlToAdd += "<h6 style ='text-align:center'> " + TV.first_air_date + "</h6>";
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $(".BFW1").append(movieHtmlToAdd);
      });
    },
  });
})


// BLOC TRENDING MOVIES
const URL_API_MOVIE_SEA = "https://api.themoviedb.org/3/trending/all/day?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_IMA_PREFIX = "https://image.tmdb.org/t/p/w200";
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEA}&query=harry&language=fr-FR`;

  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.results; // results est un array

      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel"  >`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd += `<img  class="m-3 rounded" style="width:180px" src="${URL_IMA_PREFIX + movie.poster_path}">`;
        movieHtmlToAdd += "<button class ='radius'> " + movie.vote_average + "</button>";
        movieHtmlToAdd += `<h5 style="text-align:center" > <a href="./film.html?filmId=${movie.id}">${movie.original_title}></a> </h5>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';

        $(".BT1").append(movieHtmlToAdd);
      });
    },
  });
});


// BLOC TRAILER https://www.youtube.com/embed/567159?playlist=567159&loop=1 a regler

const URL_API_MOVIE_SE = "https://api.themoviedb.org/3/movie/567189/videos?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US";
const URL_IMAGE_PRE = "https://developers.themoviedb.org/3/movies/get-movie-videos";
const TRAIL = "https://www.youtube.com/embed/567159?playlist=567159&loop=1";

$(function () {

  $.ajax({
    url: URL_API_MOVIE_SE,
    success: function (data) {
      let videos = data.results;
      videos.forEach(function (video) {
        let videoHtmlToAdd = `<div  class="owl-carousel"  >`;
        videoHtmlToAdd += `<div class="love">`;
        videoHtmlToAdd += `<video src="${TRAIL}" width='320'  height="240" controls poster="vignette.jpg"> </a>
                          </video>`
        videoHtmlToAdd += '</div>';
        videoHtmlToAdd += '</div>';
        $(".BLT1").append(videoHtmlToAdd);
        console.log(".BLT1");

      });
    },
  });
});



const url =
'https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1';
const URL_img = 'https://image.tmdb.org/t/p/w500';
$(document).ready(function () {
$.ajax({
  url: url,
  success: function (data) {
    console.log(data.results);
    const randomIndex = Math.floor(Math.random() * (data.results.length - 0) + 0);
    console.log(randomIndex);
    const randomBackdrop = data.results[randomIndex].backdrop_path;
    const movies=data.results
    movies.forEach(function (movie) {
      let movieHtml = '<div id=carousel>';
      movieHtml += `<img src="${URL_img + randomBackdrop}">`;
      $('#bloc1').append(movieHtml);
    });
  },
});
});

