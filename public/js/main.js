
document.addEventListener('DOMContentLoaded', function onReady(){
    
  var a = 5;
  fetchMovies('Inside');
  var b = 10;
  document.getElementById('search-form').addEventListener('submit', function onSearchSubmit(e){
    e.preventDefault();
  
    const title = document.getElementById('search-text').value;
    
    fetchMovies(title);
  });

});

const fetchMovies = (title) => {
  const API_BASE = "/movies"
  return fetch(API_BASE)
    .then((res)=>res.json())
    .then((data)=> loadMovies(data))
    .catch(err=>console.log(err))
};

function loadMovies(movies){

  var output = '';
  movies.forEach(function(movie){
      output += `
      <div class="container">
        <div>
          <img class="object-fit-cover" src="${movie.Poster}">
          <h2 class="movie-title" >${movie.Title}</h2>
          <a class="view-details" onclick="movieSelected('${movie.imdbID}')" target="_blank" >Movie Details</a>
        </div>
      </div>
    `;
  })
  
  document.getElementById('movies').innerHTML = output;
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}