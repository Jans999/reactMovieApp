import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function GenreCard({genreTitle, genreID, handleGenreClick}) {

    return(
        <Link to="/genreselect" className="genre_card" onClick={() => handleGenreClick(genreID, genreTitle)}>
            <h3>{genreTitle}</h3>
            <img src="https://via.placeholder.com/250" alt="" />
        </Link>
    )
}

export default GenreCard;