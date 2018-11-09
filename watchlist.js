document.addEventListener('DOMContentLoaded', function () {
    // pulls the watchlist data from local storage
    const watchlistEl = localStorage.getItem('watchlist')
    localStorage.getItem('watchlist')
    console.log('this is my watchlist:', watchlistEl)   

    // displays the watchlist movie data into the movie container
    function renderMovies(watchlistEl) {
        var movieHTML = watchlistEl.map(function (currentMovie) {
            return `<div class="card">
            <img class="card-img-top" src=${currentMovie.Poster} alt="Movie Poster">
            <div class="card-body">
            <h5 class="card-title">${currentMovie.Title}</h5>
            <p class="card-text">${currentMovie.Year}</p>
            <button type="button" class="btn btn-primary" onclick="window.SCENE_IT.saveToWatchlist('${currentMovie.imdbID}')">Add</button>
            </div>
            </div>`
        })
        return movieHTML.join('')
        console.log('this are my movies:', movieHtml)
    }
    
})