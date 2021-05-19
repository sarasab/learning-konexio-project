const url =
  'https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1';
const URL_img = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';
$(document).ready(function () {
  $.ajax({
    url: url,
    success: function (data) {
      console.log(data.results);
      const movies = data.results;

      movies.forEach(function (movie, i) {
        const randomIndex = Math.floor(
          Math.random() * (data.results.length - 0) + 0
        );
        const randomBackdrop = data.results[randomIndex].backdrop_path;
        const className = i ? 'carousel-item' : 'carousel-item active';
        let carouselItem = `<div class="${className}">
          <img src="${
            URL_img + randomBackdrop
          }" class="d-block w-100" alt="...">
      </div>`;
        let movieHtml = '<div id=carousel>';
        movieHtml += `<img src="${URL_img + randomBackdrop}">`;
        $('.carousel-inner').append(carouselItem);
      });
    },
  });
});
// BLOC BMP1 POPuLAR MOVIES
const urlPopular=
  'https://api.themoviedb.org/3/movie/popular?api_key=b634f31bce06a1625850e6a8c9231f70&language=en-US&page=1';
  const URL_imgs = 'https://image.tmdb.org/t/p/w200';
$(document).ready(function () {
  $.ajax({
    url:urlPopular,
    success: function (data) {
      const movies = data.results;
      console.log(movies);
      movies.forEach(function (movie) {
        let movieHtml = '<div class="m-3">';
        movieHtml += `<img src="${URL_imgs
        +movie.poster_path}">`;
        movieHtml+=`<h5>${movie.original_title}</h5>`
        $('.bmp1').append( movieHtml);
      });
    },
  });
});


// BLOC TV ON AIR
const URL_API_MOVIE_S =
  'https://api.themoviedb.org/3/tv/on_the_air?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1';
const URL_IMAGE_PREF = 'https://image.tmdb.org/t/p/w200';
$(function () {
  $.ajax({
    url: URL_API_MOVIE_S,
    success: function (data) {
      let TVS = data.results; // results est un array
      TVS.forEach(function (TV) {
        let movieHtmlToAdd = `<div  class="owl-carousel">`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd += `<img  class="m-3 rounded" style="width:180px" src="${
          URL_IMAGE_PREF + TV.poster_path
        }">`;
        movieHtmlToAdd += `<h5 style="text-align:center" > <a href="m.html?filmId=${TV.id}">${TV.name}</a> </h5>`;
        movieHtmlToAdd +=
          "<h6 style ='text-align:center'> " + TV.first_air_date + '</h6>';
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('.bfw1').append(movieHtmlToAdd);
      });
    },
  });
});
// BLOC TRENDING MOVIES
const URL_API_MOVIE_SEA =
  'https://api.themoviedb.org/3/trending/all/day?api_key=b8e16ff25f44004fe2ab5dedc9e0453e';
const URL_IMA_PREFIX = 'https://image.tmdb.org/t/p/w200';
$(function () {
  let urlWithQuery = `${URL_API_MOVIE_SEA}&query=harry&language=fr-FR`;
  $.ajax({
    url: urlWithQuery,
    success: function (data) {
      let movies = data.results; // results est un array
      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div  class="owl-carousel"  >`;
        movieHtmlToAdd += `<div class="love">`;
        movieHtmlToAdd += `<img  class="m-3 rounded" style="width:180px" src="${
          URL_IMA_PREFIX + movie.poster_path
        }">`;
        movieHtmlToAdd +=
          "<button class ='radius'> " + movie.vote_average + '</button>';
        movieHtmlToAdd += `<h5 style="text-align:center" > <a href="./film.html?filmId=${movie.id}">${movie.original_title}</a> </h5>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('.bt1').append(movieHtmlToAdd);
      });
    },
  });
});
// BLOC TRAILER https://www.youtube.com/embed/567159?playlist=567159&loop=1 a regler

