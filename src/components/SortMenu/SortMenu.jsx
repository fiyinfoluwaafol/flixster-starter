import "./SortMenu.css";

function SortMenu() {
return (
    <select name="sort-by">
        <option value="">Sort By</option>
        <optgroup label="Popularity">
            <option value="popularity.desc">Popularity - Descending</option>
            <option value="popularity.asc">Popularity - Ascending</option>
        </optgroup>
        <optgroup label="Movie Title">
            <option value="original_title.asc">Movie Title - Ascending</option> // think of putting icons to represent ascending and descending
            <option value="original_title.desc">Movie Title - Descending</option>
        </optgroup>
        <optgroup label="Rating">
            <option value="vote_average.desc">Rating (High to Low)</option>
            <option value="vote_average.asc">Rating (Low to High)</option>
        </optgroup>

    </select>
)
}

export default SortMenu;
