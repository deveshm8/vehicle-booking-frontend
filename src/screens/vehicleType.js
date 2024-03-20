import React from 'react';

function VehicleType({ formData, setFormData, onNext }) {
  const handleChange = (event) => {
    setFormData({ ...formData, vehicleType: event.target.value });
  };

  return (
    <div>
      <h2>Vehicle Type</h2>
      <select value={formData.vehicleType} onChange={handleChange}>
        <option value="">Select Vehicle Type</option>
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
      </select>
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default VehicleType;
