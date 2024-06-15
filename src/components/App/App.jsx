import { useState } from 'react'
import './App.css'
import SearchForm from '../SearchForm/SearchForm'
import MovieList from '../MovieList/MovieList'
import ModalView from '../ModalView/ModalView'
import FilterForm from '../FilterForm/FilterForm'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);

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
    />
  </div>
  )
}

export default App;
