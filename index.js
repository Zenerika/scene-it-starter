document.addEventListener(‘DOMContentLoaded’, function() {                
    function renderMovies (movieArray) {
        movieHTML = movieArray.map(currentMovie).join('')
        document.getElementById("container").innerHTML = renderMovies(movieData)
    }
});

function currentMovie () {
    return  `<div class="card">
    <img class="card-img-top" src="${currentMovie.Poster}" alt="Movie Poster">
    <div class="card-body">
      <h5 class="card-title">"${currentMovie.Title}"</h5>
      <p class="card-text">"${currentMovie.Year}"</p>
      <p class="card-text">"${currentMovie.imdbID}"</p>
      <p class="card-text">"${currentMovie.Type}"</p>
      <button type="button" class="btn btn-primary">Add</button>
    </div>
  </div>`
    return finalHTML.join(‘’);
}