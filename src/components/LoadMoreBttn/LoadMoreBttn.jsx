import "./LoadMoreBttn.css";

function LoadMoreButton ({onLoadMore}) {
    return (
        <div id="load-bttn">
            <button onClick={onLoadMore}>Load More</button>
        </div>
    )
}

export default LoadMoreButton;
