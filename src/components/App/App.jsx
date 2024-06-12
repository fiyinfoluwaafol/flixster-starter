import { useState } from 'react'
import './App.css'
import SearchForm from '../SearchForm/SearchForm'
import MovieList from '../MovieList/MovieList'
import SortMenu from '../SortMenu/SortMenu'
// import LoadMoreButton from '../LoadMoreBttn/LoadMoreBttn'

const App = () => {
  return (
  <div className="App">
    <header className="App-header">
      <SearchForm />
      <h1>Flixster</h1>
      <SortMenu />
    </header>
    <main>
      <MovieList />
    </main>
    <footer>
      <p id="footer">&#169; 2024 Flixster</p>
    </footer>
  </div>
  )
}

export default App
