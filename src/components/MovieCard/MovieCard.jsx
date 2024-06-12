import "./MovieCard.css";
import PropTypes from 'prop-types';

function MovieCard(props) {
    return (
        // <div className="movie-card">
        //     <img src={props.image} alt="movie-poster" />
        //     <h2>{props.movieTitle}</h2>
        //     <p>Rating: {props.rating}</p>
        // </div>
        <div className="movie-card">
            <img src="https://placehold.co/600x400" alt="movie-poster" className="movie-backdrop"/>
            <h2>{props.original_title}</h2>
            <p>Rating: {props.vote_average}</p>
        </div>
    )
}

// MovieCard.propTypes = {
//     // backdrop_path: PropTypes.string.isRequired,
//     original_title: PropTypes.string.isRequired,
//     vote_average: PropTypes.number.isRequired,
// };

export default MovieCard;
