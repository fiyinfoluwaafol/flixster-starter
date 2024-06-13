import "./MovieCard.css";
import PropTypes from 'prop-types';

function MovieCard(props) {
    let img_src = null;
    if (props.poster_path === null) {
        img_src =`https://placehold.co/250x400`
    }
    else {
        img_src = `https://image.tmdb.org/t/p/original/${props.poster_path}`
    }
    return (
        <div className="movie-card">
            <img src={img_src} alt="movie-poster" className="movie-backdrop"/>
            <h2>{props.original_title}</h2>
            <p>Rating: {props.vote_average}</p>
        </div>
    )
}

MovieCard.propTypes = {
    backdrop_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
};

export default MovieCard;
