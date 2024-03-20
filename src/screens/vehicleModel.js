import React from 'react';

function Wheels({ formData, setFormData, onNext }) {
  const handleChange = (event) => {
    setFormData({ ...formData, numberOfWheels: event.target.value });
  };

  return (
    <div>
      <h2>Number of Wheels</h2>
      <input
        type="radio"
        id="two-wheels"
        name="numberOfWheels"
        value="2"
        checked={formData.numberOfWheels === '2'}
        onChange={handleChange}
      />
      <label htmlFor="two-wheels">2 Wheels</label>
      <br />
      <input
        type="radio"
        id="four-wheels"
        name="numberOfWheels"
        value="4"
        checked={formData.numberOfWheels === '4'}
        onChange={handleChange}
      />
      <label htmlFor="four-wheels">4 Wheels</label>
      <br />
      <button onClick={onNext}>Next</button>
    </div>
  );
}

export default Wheels;
