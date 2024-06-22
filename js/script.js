import peliculas from './peliculas.js'

const genres = {
    28: 'genero-28', 
    53: 'genero-53', 
    12: 'genero-12'  
};

const addMovieToDOM = (movie, genreId) => {
    const container = document.getElementById(genres[genreId]);
    const texto = document.createElement('h4');
    const img = document.createElement('img');
    const contenedor = document.createElement('div');

    texto.innerText = movie.title;
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    container.appendChild(contenedor);
};


peliculas.forEach(pelicula => {
    pelicula.genre_ids.forEach(genreId => {
        if (genres[genreId]) {
            addMovieToDOM(pelicula, genreId);
        }
    });
});