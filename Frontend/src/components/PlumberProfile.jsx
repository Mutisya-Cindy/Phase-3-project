import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlumberProfile = () => {
  const { plumberId } = useParams();
  const [plumber, setPlumber] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
   
    fetch(`/api/plumbers/${plumberId}`)
      .then(response => response.json())
      .then(data => {
        setPlumber(data);
        setRating(data.averageRating); 
      })
      .catch(error => console.error('Error fetching plumber details:', error));
  }, [plumberId]);

  const handleRatingChange = (newRating) => {
    
    fetch(`/api/plumbers/${plumberId}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating: newRating })
    })
      .then(response => {
        if (response.ok) {
          
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
  
          <Rating value={rating} onChange={handleRatingChange} />
        </div>
      )}
    </div>
  );
}

export default PlumberProfile;
