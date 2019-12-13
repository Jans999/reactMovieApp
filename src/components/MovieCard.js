import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function MovieCard() {
    return(
            <div className="movie_card">
                <h3>Title</h3>
                <Link to="/searchResult"> 
                    <img src="https://via.placeholder.com/250" alt="" />
                </Link>
                <p>Directed by: NAME OF THE PERSON</p>
                <p>Released: Year of release</p>

            </div>

    )
}

export default MovieCard;