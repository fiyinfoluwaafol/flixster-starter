import "./ModalView.css";
import runtimeToHrsMins from "../../utils/utils";
// import { useState } from "react";
import PropTypes from "prop-types";

function ModalView(props) {

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
        Genres: {props.movie.genres.map(genre => genre.name).join(", ")}
      </p>
      <p>
        {/* Runtime: 00h 00mins */}
        Runtime: {runtimeToHrsMins(props.movie.runtime)}
      </p>
      {/* Embedded Youtube Video */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${props.movie.videos.results[0].key}`} allowFullScreen></iframe>
      </div>
      <button className="close" onClick={props.onClose}>&times;</button>
      {/* <button className="close" onClick={props.onClose}>&times;</button> */}
    </div>
  </div>
  );
}
export default ModalView;
