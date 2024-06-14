import React, { useState } from 'react';

const CreatePlumberProfile = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Updated field name
    service_areas: ''
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/plumbers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Plumber profile created successfully!');
        
        setFormData({
          name: '',
          contact: '', 
          service_areas: ''
        });
      } else {
        console.error('Failed to create plumber profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
          <label htmlFor="contact" className="form-label">Contact Info</label>
          <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="service_areas" className="form-label">Service Areas</label>
          <input type="text" className="form-control" id="service_areas" name="service_areas" value={formData.service_areas} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreatePlumberProfile;
