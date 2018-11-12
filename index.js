window.SCENE_IT = window.SCENE_IT || {}

document.addEventListener('DOMContentLoaded', function () {
    // $('#movie-container').html(renderMovies(movieData))
    // get the form element from the DOM
    const formEl = document.getElementById('search-form')
    console.assert(formEl, 'Form element not found! Exciting...')

    // add event listener when the form was submitted
    formEl.addEventListener('submit', formSubmitted)

    // testing the form submission event
    function formSubmitted(e) {
        e.preventDefault()
        console.log('the form was submitted')
        $('#movie-container').html(renderMovies(movieData))
    }

    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
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

    function saveToWatchlist(imdbID) {
        var movie = movieData.find(function (currentMovie) {
            return currentMovie.imdbID === imdbID;
        })

        var watchlistJSON = localStorage.getItem('watchlist')
        var watchlist = JSON.parse(watchlistJSON)
        if (!watchlist) {
            watchlist = []
        }

        watchlist.push(movie)
        watchlistJSON = JSON.stringify(watchlist)
        localStorage.setItem('watchlist', watchlistJSON)
        console.log('the watchlist is working', watchlist)
    }

    window.SCENE_IT.saveToWatchlist = saveToWatchlist
})