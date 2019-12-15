import React from 'react';
import '../App.css';

function SearchResult({trendingSearch}) {
    return(
        <main>
            <div>
                <h3>{trendingSearch.title}</h3>
                <img src={`http://image.tmdb.org/t/p/w185/${trendingSearch.poster_path}`} alt="" />
                <p>Directed by: NAME OF THE PERSON</p>
                <p>Released: {trendingSearch.release_date}</p>
                <p>{trendingSearch.overview}</p>
            </div>
        </main>
    )
}

export default SearchResult;