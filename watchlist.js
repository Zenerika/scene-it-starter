var watchlist = localStorage.getItem('watchlist')
// console.log('watchlistJSON:', watchlistJSON)
var watchlistJSON = JSON.parse(watchlist)
// console.log('watchlist', watchlist)

document.addEventListener('DOMContentLoaded', function () {
    // pulls the watchlist data from local storage
    // console.log('this is my watchlist:', watchlistEl)

    // displays the watchlist movie data into the movie container
    function renderMovies(watchlist) {
        if (!watchlist) {
            watchlist = []
        }
        
        watchlistJSON = JSON.stringify(watchlist)
        localStorage.setItem('watchlist', watchlistJSON)
        console.log('the watchlist is working', watchlist)
        var movieHTML = watchlist.map(function (currentMovie) {
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
    }

    renderMovies(watchlist)
    console.log("my movies are showing", renderMovies)
})