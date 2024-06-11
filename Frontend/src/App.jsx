import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CreateProfile from './components/CreateProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <div id="searchBar">
        <SearchBar />
      </div>
      <div id="createProfile">
        <CreateProfile /> 
      </div>
    </div>
  );
}

export default App;
