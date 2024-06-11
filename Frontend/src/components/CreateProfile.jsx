import React, { useState } from 'react';

const CreateProfile = () => {
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [qualifications, setQualifications] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Location:', location);
    console.log('Contact:', contact);
    console.log('Qualifications:', qualifications);
   
    setLocation('');
    setContact('');
    setQualifications('');
  };

  return (
    <div className="col-md-4 mt-4">
      <div className="container">
        <h2>Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">Location:</label>
            <input type="text" className="form-control" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact:</label>
            <input type="text" className="form-control" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="qualifications" className="form-label">Qualifications:</label>
            <textarea className="form-control" id="qualifications" rows="3" value={qualifications} onChange={(e) => setQualifications(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
