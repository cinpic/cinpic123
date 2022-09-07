// Initial Values
const MOVIE_DB_API = '9b46fd2d705c60c0004023ae5aab66f4';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';



function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}




function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
}




function getTrendingMovies() {
    const url = generateMovieDBUrl('/trending/movie/day');
    const render = renderMovies.bind({ title: 'Trending Movies' })
    requestMovies(url, render, handleGeneralError);
}


function getTopRatedMovies() {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    const render = renderMovies.bind({ title: 'Top Rated Movies' })
    requestMovies(url, render, handleGeneralError);
}



function searchUpcomingMovies() {
    const url = generateMovieDBUrl('/movie/upcoming');
    const render = renderMovies.bind({ title: 'Upcoming Movies' })
    requestMovies(url, render, handleGeneralError);
}

function searchPopularMovie() {
    const url = generateMovieDBUrl('/movie/popular');
    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleGeneralError);
}

function getopRatedTv() {
    const url = generateMovieDBUrl(`/tv/top_rated`);
    const render = renderMovies.bind({ title: 'Top Rated Tv' })
    requestMovies(url, render, handleGeneralError);
}
function getPopularTv() {
    const url = generateMovieDBUrl(`/tv/popular`);
    const render = renderMovies.bind({ title: 'Popular Tv' })
    requestMovies(url, render, handleGeneralError);
}

function getLatestTv() {
    const url = generateMovieDBUrl(`/tv/on_the_air`);
    const render = renderMovies.bind({ title: 'Latest Tv' })
    requestMovies(url, render, handleGeneralError);
}





// Invoke a different function for search movies
function searchMovie(value) {
    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleGeneralError);
}

function searchTv(value) {
    const url = generateMovieDBUrl('/search/tv') + '&query=' + value;
    requestTv(url, renderSearchTv, handleGeneralError);
}


