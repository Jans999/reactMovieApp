import React from 'react';
import '../App.css';

// Components
import MovieCard from './MovieCard'

function GenreCard() {
    return(

        <div className="movie_list">
            <h2 className="genre_title">Horror</h2>
    
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />

        </div>
    )
}

export default GenreCard;