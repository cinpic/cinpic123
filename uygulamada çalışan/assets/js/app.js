
// Selecting elements from the DOM


const searchButton = document.querySelector('#search');;
const searchInput = document.querySelector('#exampleInputEmail1');
const moviesContainer = document.querySelector('#movies-container');
const moviesSearchable = document.querySelector('#movies-searchable');


function createImageContainer(imageUrl, id) {
    
    const tempDiv = document.createElement('div');
    tempDiv.setAttribute('class', 'imageContainer');
    tempDiv.setAttribute('data-id', id);

    const movieElement = `
      <div class="container">
      <a href="about.php?movie_id=${id}"><button id="movie_btn"><img src="${imageUrl}" alt="" data-movie-id="${id}"></button></a>
        <div class="top-left"> <button  class="heart""><img src="bookmark.png"></button></div>
        <div class="top-right"><button  id="movie_btn""><img src="bookmark1.png"></button></div>
      
        </div>
    `;
    tempDiv.innerHTML = movieElement;
    
    return tempDiv;
   
}



function resetInput() {
    searchInput.value = '';
}

function handleGeneralError(error) {
    log('Error: ', error.message);
    alert(error.message || 'Internal Server');
}



function createSectionHeader(title) {
    const header = document.createElement('h2');
    header.innerHTML = title;

    return header;
}


function renderMovies(data) {
    const moviesBlock = generateMoviesBlock(data);
    const header = createSectionHeader(this.title);
    moviesBlock.insertBefore(header, moviesBlock.firstChild);
    moviesContainer.appendChild(moviesBlock);
}



function renderSearchMovies(data) {
    moviesSearchable.innerHTML = '';
    const moviesBlock = generateMoviesBlock(data);
    moviesSearchable.appendChild(moviesBlock);
}
function generateMoviesBlock(data) {
    const movies = data.results;
    const section = document.createElement('section');
    section.setAttribute('class', 'section');

    for (let i = 0; i < movies.length; i++) {
        const { poster_path, id } = movies[i];

        if (poster_path) {

            const imageUrl = MOVIE_DB_IMAGE_ENDPOINT + poster_path;
    
            const imageContainer = createImageContainer(imageUrl, id);
            section.appendChild(imageContainer);
        }
    }

    const movieSectionAndContent = createMovieContainer(section);
    return movieSectionAndContent;
}


// Inserting section before content element

// Inserting section before content element
function createMovieContainer(section) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const template = `
        <div class="content">
           
        </div>
    `;

    movieElement.innerHTML = template;
    movieElement.insertBefore(section, movieElement.firstChild);
    return movieElement;
}
/*searchButton.onclick = function (event) {
    event.preventDefault();
    const value = searchInput.value

   if (value) {
    searchMovie(value);
   }
    resetInput();
}*/





// Initialize the search

searchUpcomingMovies();
searchPopularMovie();
getTopRatedMovies();
getTrendingMovies();
getopRatedTv();
getPopularTv();
getLatestTv();



