import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';

function Trending({trendingData, handleTrendingSearch}) {
    return(
        <main className="movie_list_container">
        <h2>Trending Movies</h2>
        <div className="movie_list">

        { trendingData.map( data => (
          <MovieCard 
            handleTrendingSearch = {handleTrendingSearch}
            key= {data.id}
            id={data.id}
            imgURL= {data.poster_path} 
            title= {data.title} 
            releaseDate = {data.release_date}
           />
        )) }

        </div>
      </main>
    )
}

export default Trending;