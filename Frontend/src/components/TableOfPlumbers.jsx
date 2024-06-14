
import React, { useState, useEffect } from 'react';

const TableOfPlumbers = () => {
  // State to store the list of plumbers
  const [plumbers, setPlumbers] = useState([]);

  // Function to fetch plumber data from the backend
  const fetchPlumbers = async () => {
    try {
      // Fetch data from the backend API endpoint
      const response = await fetch('/api/plumbers'); // Adjust the endpoint as per your backend setup
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPlumbers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch plumber data when the component mounts
  useEffect(() => {
    fetchPlumbers();
  }, []);

  return (
    <div>
      <h2>Table of Plumbers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Details</th>
            <th>Qualifications</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {plumbers.map((plumber, index) => (
            <tr key={index}>
              <td>{plumber.name}</td>
              <td>{plumber.contactDetails}</td>
              <td>{plumber.qualifications}</td>
              {/* Render additional columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOfPlumbers;
