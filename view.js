
//les tailles d'images utilsées dans TMDB//
//                       
//                                  Min Res      Max Res  
// poster   = Poster ............  500 x 750   2000 x 3000  
// backdrop = Fanart ............ 1280 x 720   3840 x 2160  
//still    = TV Show Episode ... 1280 x 720   3840 x 2160  
//profile  = Actors Actresses ..  300 x 450   2000 x 3000  
//logo     = TMDb Logo 

// REQUETE ENTIERE DU SITE WEB
const URL_API_MOVIE_SEARCH = "https://api.themoviedb.org/3//movie/581389?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_IMAGE = "https://image.tmdb.org/t/p/w1280";
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEARCH}`;
  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movie = data; //RECHERCHE UNIQUE DE FILM
      console.log(data);
      $('.bloc1').css('background-image', `url("${URL_IMAGE + movie.backdrop_path}")`)
      $('.poster').html(`<img  id="pictures"   src="${URL_IMAGE + movie.poster_path}">`)
      $('.title').html(`${ movie.title}`)
      $('.release_date').html(`${ movie.release_date}`)
      $('.runtime').html(`${movie.runtime}`)  
      $('.tagline').html(`${movie.tagline}`)   
      $('.overview').html(`${movie.overview}`)     
      $('.homepage').html(`${movie.homepage}`)  
      
    },
  });
});

// Extraction catégorie film
const URL_API_MOVIE_SEARC= "https://api.themoviedb.org/3//movie/520663?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_IMAG = "https://image.tmdb.org/t/p/w500";
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEARC}`;
  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.genres; //RECHERCHE MULTIPLE DE L'ARRAY( &nbsp; = espace)
      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel"  >`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd +=`<h5 style="display:inline">${"&nbsp;"+movie.name+"&nbsp;"}</h5>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('.genres').append(movieHtmlToAdd);
      });
    },
  });
});

// Extraction du array name
const URL_API_MOVIE_SEAR= "https://api.themoviedb.org/3//movie/520663?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_IMA= "https://image.tmdb.org/t/p/w500";
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEAR}`;
  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.production_companies; //RECHERCHE MULTIPLE DE L'ARRAY
      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel col-4"  >`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd +=`<h5 id="prod"style="font-size:12px">${movie.name}</h5>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('.production').append(movieHtmlToAdd);
      });
    },
  });
});

// EXTRACTION GENRES

const URL_API_MOVIE_SEA= "https://api.themoviedb.org/3//movie/520663?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
const URL_IM = "https://image.tmdb.org/t/p/w500";
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEA}`;
  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.genres; //RECHERCHE MULTIPLE DE L'ARRAY( &nbsp; = espace)
      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel"  >`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd +=`<h6 style="display:inline">${"&nbsp;&nbsp;"+movie.name+"&nbsp;"}</h6>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('.genres').append(movieHtmlToAdd);
      });
    },
  });
});

//EXTRACTIONS BILLED
const URL_CAST= "https://api.themoviedb.org/3/movie/520663/credits?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US"
 const URL_imgs = 'https://image.tmdb.org/t/p/w200';
$(function () {
  let url = `${URL_CAST}`;
  $.ajax({
    url:url,
    success: function (data) {
      const movies = data.cast;//RECHERCHE DE CAST
        movies.forEach(function (movie) {
        let movieHtml = '<div class="cast">';
        movieHtml+= `<img src="${URL_imgs + movie.name }">`;
        movieHtml+=`<h5>${movie.known_for_department}</h5>`;
        $('.topBilledCast').append( movieHtml);
      });
    },
  });
});

