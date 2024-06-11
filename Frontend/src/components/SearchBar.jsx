import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex" style={{ maxWidth: '300px' }}> 
      <input
        type="text"
        placeholder="Enter your location ..."
        className="form-control form-control-sm me-1" 
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="btn btn-outline-primary btn-sm"> 🔍</button> 
    </form>
  );
};

export default SearchBar;
