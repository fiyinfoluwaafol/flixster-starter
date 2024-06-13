import "./MovieCard.css";
import PropTypes from 'prop-types';

function MovieCard(props) {
    const handleClick = () => {
        props.onMovieClick();
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
        </div>
    )
}

MovieCard.propTypes = {
    posterPath: PropTypes.string,
    originalTitle: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
};

export default MovieCard;
