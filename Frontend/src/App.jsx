import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <div id="searchBar">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
