import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function GenreCard() {
    return(
        <Link to="/genreselect" className="genre_card">
            <h3>Horror</h3>
            <img src="https://via.placeholder.com/250" alt="" />
        </Link>
    )
}

export default GenreCard;