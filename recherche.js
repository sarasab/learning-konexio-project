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

const URL_API_KEY = 'b8e16ff25f44004fe2ab5dedc9e0453e';
const URL_API_MOVIE_SEARCH = 'https://api.themoviedb.org/3/search/movie/';
const URL_IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w200';
$(document).ready(function () {
  const query = new URL(document.location.toString()).searchParams.get('query');
  if (query === null) {
    window.location.replace('homepage.html');
    return;
  }

  let url = `${URL_API_MOVIE_SEARCH}?api_key=${URL_API_KEY}&query=${query}`;

  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      let movies = data.results;
      console.log(movies);
      movies.forEach(function (movie) {
        let movieHtmlToAdd = `<div class="d-flex">`;
        movieHtmlToAdd += `<div>`;
        movieHtmlToAdd += `<h3> <a href="./film.html?filmId=${movie.id}">${movie.title}</a> </h3>`;
        movieHtmlToAdd +=
          '<p><strong>Date de sortie</strong> : ' + movie.release_date + '</p>';
        movieHtmlToAdd += `<p><strong>Synopsis</strong> :<br> ${movie.overview}</p>`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '<div>';
        movieHtmlToAdd += `<img src="${URL_IMAGE_PREFIX + movie.poster_path}">`;
        movieHtmlToAdd += '</div>';
        movieHtmlToAdd += '</div>';
        $('#container').append(movieHtmlToAdd);
      });
    },
  });
});
