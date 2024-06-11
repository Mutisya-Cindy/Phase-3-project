import React from 'react';

const PlumberProfile = ({ plumber }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{plumber.name}</h5>
        <p className="card-text">Location: {plumber.location}</p>
        <p className="card-text">Phone Number: {plumber.phoneNumber}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default PlumberProfile;
