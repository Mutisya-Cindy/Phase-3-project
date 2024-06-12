// PlumberProfile.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlumberProfile = () => {
  const { plumberId } = useParams();
  const [plumber, setPlumber] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch plumber details including ratings from backend based on plumberId
    // Example fetch call to get plumber details from backend
    fetch(`/api/plumbers/${plumberId}`)
      .then(response => response.json())
      .then(data => {
        setPlumber(data);
        setRating(data.averageRating); // Assuming averageRating is provided by the backend
      })
      .catch(error => console.error('Error fetching plumber details:', error));
  }, [plumberId]);

  const handleRatingChange = (newRating) => {
    // Send the new rating to the backend
    // Example fetch call to send rating to backend
    fetch(`/api/plumbers/${plumberId}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating: newRating })
    })
      .then(response => {
        if (response.ok) {
          // Update the local state with the new rating
          setRating(newRating);
        } else {
          throw new Error('Failed to submit rating');
        }
      })
      .catch(error => console.error('Error submitting rating:', error));
  };

  return (
    <div>
      {plumber && (
        <div>
          <h2>{plumber.name}</h2>
          <p>Contact Details: {plumber.contactDetails}</p>
          <p>Qualifications: {plumber.qualifications}</p>
          <p>Average Rating: {rating}</p>
          {/* Rating component */}
          <Rating value={rating} onChange={handleRatingChange} />
        </div>
      )}
    </div>
  );
}

export default PlumberProfile;
