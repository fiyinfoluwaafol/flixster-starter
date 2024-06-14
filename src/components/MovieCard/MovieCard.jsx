import "./MovieCard.css";
import PropTypes, { func } from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

function MovieCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [isWatched, setIsWatched] = useState(false);
    const handleClick = () => {
        props.onMovieClick();
    }

    function handleLikeBttn (event) {
        event.preventDefault();
        event.stopPropagation();
        setIsLiked(!isLiked);
    }

    function handleWatchedBttn (event) {
        event.preventDefault();
        event.stopPropagation();
        setIsWatched(!isWatched);
    }
    // const movieId = props.id;
    let img_src = null;
    if (props.posterPath === null) {
        img_src =`https://placehold.co/250x400`
    }
    else {
        img_src = `https://image.tmdb.org/t/p/original/${props.posterPath}`
    }
    return (
        <div className="movie-card" onClick={handleClick}>
        {/* <div className="movie-card" onClick={handleClick}> */}
            <img src={img_src} alt="movie-poster" className="movie-backdrop"/>
            <h2>{props.originalTitle}</h2>
            <p>Rating: {props.voteAverage}</p>
            <div className="interactive-buttons">
                <button onClick={handleLikeBttn}>{isLiked? <FontAwesomeIcon icon={solidHeart}/> : <FontAwesomeIcon icon={regularHeart}/>}</button>
                <button onClick={handleWatchedBttn}>{isWatched? '👁️' : '🍿'}</button>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    posterPath: PropTypes.string,
    originalTitle: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
