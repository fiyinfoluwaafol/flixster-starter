import "./MovieCard.css";

function MovieCard(props) {
    return (
        <div className="movie-card">
            <img src={props.image} alt="movie-poster" />
            <h2>{props.movieTitle}</h2>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default MovieCard;
