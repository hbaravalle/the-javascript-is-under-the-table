window.onload = function() {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=81b468865772aad355fffbae68ca1383&language=es&page=1')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let main = document.querySelector('main');
      let containerPelis = document.querySelector('.populares');
      let pelis = data.results;
      console.log(pelis);

      for(let i = 0; i < pelis.length; i++) {
        let unaPeli = {
          id: pelis[i].id,
          generos: pelis[i].genre_ids,
          titulo: pelis[i].title,
          sinopsis: pelis[i].overview,
          backdrop: pelis[i].backdrop_path,
          poster: pelis[i].poster_path,
          ranking: pelis[i].vote_average,
          estreno: pelis[i].release_date
        }

        let markup = `
          <article class="card-pelicula">
            <img src="https://image.tmdb.org/t/p/w500/${unaPeli.poster}" alt="${unaPeli.titulo}">
            <img src="https://image.tmdb.org/t/p/w500/${unaPeli.backdrop}" alt="${unaPeli.titulo}">
            <h2>${unaPeli.titulo}</h2>
            <span>ranking</span>
          </article>
        `;

        containerPelis.innerHTML += markup;

      }
    });

}
