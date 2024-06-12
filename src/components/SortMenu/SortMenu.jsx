import "./SortMenu.css";

function SortMenu() {
return (
    <select name="sort-by">
        <option value="">Sort By</option>
        <option value="popularity">Popularity</option>
        <option value="rating">Rating</option>
    </select>
)
}

export default SortMenu;
