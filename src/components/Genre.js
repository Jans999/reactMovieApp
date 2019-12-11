import React from 'react';
import '../App.css';
import GenreCard from './GenreCard';

function Genre() {
    return(
    <main>
        <h2>Genres</h2>
        <div className="genre_container">

            <GenreCard />
            <GenreCard />
            <GenreCard />
            <GenreCard />
            <GenreCard />
            <GenreCard />

        </div>
    </main>
    )
}

export default Genre;