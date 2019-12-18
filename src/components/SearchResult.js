import React from 'react';
import '../App.css';

function SearchResult({searchResult}) {
    return(
        <main>
            <div className="search_result">
                <h3>{searchResult.title}</h3>
                <img src={`http://image.tmdb.org/t/p/w185/${searchResult.poster_path}`} alt={`${searchResult.title}`} />
                <p>Directed by: NAME OF THE PERSON</p>
                <p>Released: {searchResult.release_date}</p>
                <p>{searchResult.overview}</p>
            </div>
        </main>
    )
}

export default SearchResult;