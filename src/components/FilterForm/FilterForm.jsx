import "./FilterForm.css";

function FilterForm(props) {
    // const [filterBy, setFilterBy] = useState("");
    const handleFilterChange = (event) => {
        // setFilterBy(event.target.value);
        props.onFilterChange(event.target.value);
    }
    return (
        <select name="filter-by" onChange={handleFilterChange}>
            <option value="">Filter by Genre</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fanatasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
        </select>
    )
}

export default FilterForm;
