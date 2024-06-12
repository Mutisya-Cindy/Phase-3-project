import React from 'react';
import NavBar from './components/NavBar';
import CreatePlumberProfile from './components/CreatePlumberProfile';
import PlumberProfile from './components/PlumberProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      
        
      
      <div id="createProfile">
        <CreatePlumberProfile /> 
      </div>
      <div id="plumberProfile">
        <PlumberProfile /> 
      </div>
    </div>
  );
}

export default App;
