import "./ModalView.css";
import runtimeToHrsMins from "../../utils/utils";
// import { useState } from "react";
import PropTypes from "prop-types";

function ModalView(props) {
  // const [selectedMovie, setSelectedMovie] = useState(null);

  if (!props.movie) {
    return null;
  }
  return (
  <div className={`modal-view ${props.movie? 'show' : 'hide'}`}>
    {/* <div className="modal-view modal-close"> */}
    <div className="modal-content">
      <h2>{props.movie.title}</h2>
      {/* <h2>Movie Title</h2> */}
      <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt={props.movie.title}/>
      {/* <img src="https://placehold.co/600x400" /> */}

      <p>
        {/* Release Date: Release Date */}
        Release Date: {props.movie.release_date}

      </p>
      <p>
        {/* Overview: Overview of the movie */}
        Overview: {props.movie.overview}
        </p>
      <p>
        Genres: genres
      </p>
      <p>
        {/* Runtime: 00h 00mins */}
        Runtime: {runtimeToHrsMins(props.movie.runtime)}
      </p>
      {/* Embedded Youtube Video */}
      {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
      </div> */}
      <button className="close" onClick={props.onClose}>&times;</button>
      {/* <button className="close" onClick={props.onClose}>&times;</button> */}
    </div>
  </div>
  );
}
export default ModalView;
