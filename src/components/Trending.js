import React from 'react';
import '../App.css';
import MovieCard from './MovieCard';

function Trending() {
    return(
        <main className="movie_list_container">
        <h2>Trending Movies</h2>
        <div className="movie_list">
    
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />


        </div>
      </main>
    )
}

export default Trending;