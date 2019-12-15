import React from 'react';
import '../App.css';

// Components
import MovieCard from './MovieCard'

function GenreCard({genreSelected, genreSelectedList, handleTrendingSearch}) {
    return(

        <div className="movie_list">
            <h2 className="genre_title">{genreSelected.genreName}</h2>

            {/* Maps over the genreSelectedList which is populated on click before this component and displays the moviecards */}
  
              { genreSelectedList.map( data => (
                <MovieCard 
                    handleTrendingSearch ={handleTrendingSearch}
                    key= {data.id}
                    id={data.id}
                    imgURL= {data.poster_path} 
                    title= {data.title} 
                    releaseDate = {data.release_date}
           />
        )) }

        </div>
    )
}

export default GenreCard;