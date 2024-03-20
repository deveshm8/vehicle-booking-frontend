import React from 'react';

function VehicleModelQuestion({ formData, setFormData, onNext }) {
  const handleChange = (event) => {
    setFormData({ ...formData, vehicleModel: event.target.value });
  };

  return (
    <div>
      <h2>Vehicle Model</h2>
      {/* Render radio buttons based on the selected vehicle type */}
      {/* For example, if formData.vehicleType === 'car', render car models */}
      <input
        type="radio"
        id="model1"
        name="vehicleModel"
        value="Model 1"
        checked={formData.vehicleModel === 'Model 1'}
        onChange={handleChange}
      />
      <label htmlFor="model1">Model 1</label>
      <br />
      <input
        type="radio"
        id="model2"
        name="vehicleModel"
        value="Model 2"
        checked={formData.vehicleModel === 'Model 2'}
        onChange={handleChange}
      />
      <label htmlFor="model2">Model 2</label>
      <br />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default VehicleModelQuestion;
