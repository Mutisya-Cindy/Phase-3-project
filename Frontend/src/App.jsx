import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import PlumberProfile from './components/PlumberProfile'; 


function App() {
  
  const plumberData = {
    name: 'John Doe',
    location: 'Westlands, Nairobi',
    phoneNumber: '+254712345678',

   
  };

  return (
    <div>
      <NavBar />
      <div id="searchBar">
        <SearchBar />
      </div>
      <div className="container mt-3">
        <PlumberProfile plumber={plumberData} /> 
      </div>
      {/* Other components and content of your app */}
    </div>
  );
}

export default App;
