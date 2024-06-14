import "./MovieCard.css";
import PropTypes, { func } from 'prop-types';
import { useState } from 'react';

function MovieCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = () => {
        props.onMovieClick();
    }

    function handleLikeBttn (event) {
        event.preventDefault();
        event.stopPropagation();
        setIsLiked(!isLiked);
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
            <button onClick={handleLikeBttn}>{isLiked? '❤️' : '🤍'}</button>
        </div>
    )
}

MovieCard.propTypes = {
    posterPath: PropTypes.string,
    originalTitle: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
