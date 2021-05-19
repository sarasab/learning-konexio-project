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

