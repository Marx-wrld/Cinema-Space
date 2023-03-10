import React from 'react';

const MovieCard = ({movie}) => { //movie1 is a destructured prop so that we do not have to repeat ourselves everytime with eg- {props.movie1.Year} 
    return (
        <div className="movie">
            <div>
            <p>{movie.Year}</p>
            </div>

            <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.title}
            />
            </div>

            <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
        </div>
    )
};

export default MovieCard;