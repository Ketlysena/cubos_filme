//import {  Outlet } from 'react-router-dom'
import './App.css';
import Fundo from './components/Fundo';
import Topbar from './components/Topbar';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div className="App">
      <Fundo>
        <Topbar />
          <SearchBar />
          <MovieList />
      </Fundo>
    </div>
  );
};

export default App;
