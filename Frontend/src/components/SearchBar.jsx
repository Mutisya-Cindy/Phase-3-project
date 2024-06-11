import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    setSearchTerm(''); // Clear the search term after searching
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex" style={{ maxWidth: '300px' }}> {/* Set max-width for smaller size */}
      <input
        type="text"
        placeholder="Enter your location ..."
        className="form-control form-control-sm me-1" // Added form-control-sm for smaller input
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button type="submit" className="btn btn-outline-primary btn-sm"> 🔍</button> {/* Changed button class to btn-outline-primary */}
    </form>
  );
};

export default SearchBar;
