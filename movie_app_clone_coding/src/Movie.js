import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, genres, summary, poster}){
return (<div className = "movie">
            <img src = {poster} alt = {title} title = {title}/>

            <div className = "movie_deta">
                <h5 className = "movie_title">{title}</h5>

                <ul className = "movie_genres">
                    {genres.map((genreList, itemNumber) =>(
                        <li key = {itemNumber} className = "movie_genres_list">
                            {genreList}
                        </li>
                    ))}
                </ul>

                <h5 className = "movie_year">{year}</h5>
                <p className = "movie_summary">{summary.slice(0, 200)}...</p>

            </div>
        </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title:  PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;