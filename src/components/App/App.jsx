import { useState } from 'react'
import './App.css'
import SearchForm from '../SearchForm/SearchForm'
import MovieList from '../MovieList/MovieList'
import SortMenu from '../SortMenu/SortMenu'
import ModalView from '../ModalView/ModalView'
import FilterForm from '../FilterForm/FilterForm'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);
  // const [isCardOpen, setIsCardOpen] = useState(false);
  // const [searchPageNum, setMoviesPageNum] = useState(1);
  // const [sortBy, setSortBy] = useState('');
  // setMoviesPageNum(1);
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  const handleFilterChange = (genreId) => {
    setFilterCriteria(genreId);
  }
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  }

  const handleCloseModal = () => {
    setSelectedMovie(null);
  }
  return (
  <div className="App">
    <h1>Flixster</h1>
    <header className="App-header">
      <SearchForm onSearch={handleSearch}/>
      <FilterForm onFilterChange={handleFilterChange}/>
      {/* <SortMenu /> */}
    </header>
    <main>
      <MovieList
        filterCriteria={filterCriteria}
        searchQuery={searchQuery}
        onMovieClick={handleMovieClick}
      />
    </main>
    <footer>
      <p id="footer">&#169; 2024 Flixster</p>
    </footer>
    <ModalView
      movie={selectedMovie}
      onClose={handleCloseModal}
      // isCardOpen={isCardOpen}
    />
  </div>
  )
}

export default App;
