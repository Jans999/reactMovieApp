import React from 'react';
import '../App.css';
import GenreCard from './GenreCard';

function Genre({genres, handleGenreSelect, handleGenreClick}) {
    return(
    <main>
        <h2>Genres</h2>
        <div className="genre_container">

           {genres.map( genre => (
            <GenreCard key={genre.id} genreTitle={genre.name} genreID={genre.id} handleGenreSelect={handleGenreSelect} handleGenreClick={handleGenreClick}/>
           ))}

        </div>
    </main>
    )
}

export default Genre;