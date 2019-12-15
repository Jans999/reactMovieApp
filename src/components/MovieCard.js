import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function MovieCard({imgURL, title, releaseDate, handleTrendingSearch, id}) {
    return(
            <div className="movie_card">
                <h3>{title}</h3>
                <Link to="/searchResult"> 
                    <img src={`http://image.tmdb.org/t/p/w185/${imgURL}`} onClick={() => handleTrendingSearch(id)}  alt="" />
                </Link>
                <p>Directed by: NAME OF THE PERSON</p>
                <p>Released: {releaseDate}</p>

            </div>

    )
}

export default MovieCard;