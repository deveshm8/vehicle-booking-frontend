import React from 'react';
import TextField from '@mui/material/TextField';

function Name({ formData, setFormData, onNext }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
      />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Name;