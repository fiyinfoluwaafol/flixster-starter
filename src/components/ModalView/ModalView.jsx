import "./ModalView.css";
import runtimeToHrsMins from "../../utils/utils";
// import { useState } from "react";
import PropTypes from "prop-types";

function ModalView(props) {

  if (!props.movie) {
    return null;
  }
  const hasVideo = props.movie.video;
  return (
  <div className={`modal-view ${props.movie? 'show' : 'hide'}`}>
    {/* <div className="modal-view modal-close"> */}
    <div className="modal-content" style={
      {backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`,
      backgroundSize: "cover",
      }
      }>
      <h2>{props.movie.title}</h2>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${props.movie.videos.results[0].key}`} allowFullScreen></iframe>
        {/* <iframe className="embed-responsive-item" width="560" height="315" src={`https://www.youtube.com/embed/${
          props.movie.videos.results.find((video) => video.type === "Trailer")?.key || props.movie.videos.results[0].key}`}
          allowFullScreen></iframe> */}
      </div>
      {/* <img src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`} alt={props.movie.title}/> */}
      <p>
        Release Date: {props.movie.release_date}
      </p>
      <p>
        {props.movie.overview}
      </p>
      <p>
        Genres: {props.movie.genres.map(genre => genre.name).join(", ")}
      </p>
      <p>
        {/* Runtime: 00h 00mins */}
        Runtime: {runtimeToHrsMins(props.movie.runtime)}
      </p>
      <button className="close" onClick={props.onClose}>&times;</button>
      {/* <button className="close" onClick={props.onClose}>&times;</button> */}
    </div>
  </div>
  );
}
export default ModalView;
