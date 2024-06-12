import React, { useState } from 'react';

const CreatePlumberProfile = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    contactDetails: '',
    qualifications: ''
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    // Handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <div>
      <h2>Create Plumber Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="contactDetails" className="form-label">Contact Details</label>
          <input type="text" className="form-control" id="contactDetails" name="contactDetails" value={formData.contactDetails} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="qualifications" className="form-label">Qualifications</label>
          <textarea className="form-control" id="qualifications" name="qualifications" value={formData.qualifications} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreatePlumberProfile;
