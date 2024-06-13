import "./ModalView.css";

function ModalView(props) {
  return (
  <div className="modal-view">
    <div className="modal-content">
      <h1>Movie Title</h1>
      <img src="" />
      <p>
        Release Date: date
      </p>
      <p>Overview: overview of the movie</p>
      <p>Genres: genres</p>
      <button className="close">&times;</button>
    </div>
  </div>
  );
}

export default ModalView;
