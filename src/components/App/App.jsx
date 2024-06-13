import { useState } from 'react'
import './App.css'
import SearchForm from '../SearchForm/SearchForm'
import MovieList from '../MovieList/MovieList'
import SortMenu from '../SortMenu/SortMenu'
import ModalView from '../ModalView/ModalView'


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchPageNum, setMoviesPageNum] = useState(1);
  // const [sortBy, setSortBy] = useState('');
  // setMoviesPageNum(1);
  const handleSearch = (query) => {
    setSearchQuery(query);
  }
  return (
  <div className="App">
    <header className="App-header">
      <SearchForm onSearch={handleSearch}/>
      <h1>Flixster</h1>
      <SortMenu />
    </header>
    <main>
      <MovieList searchQuery={searchQuery} />
    </main>
    <ModalView />
    <footer>
      <p id="footer">&#169; 2024 Flixster</p>
    </footer>
  </div>
  )
}

export default App
