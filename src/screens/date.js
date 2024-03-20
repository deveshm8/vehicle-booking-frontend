import React from 'react';

function DateRangePicker({ formData, setFormData, onNext }) {
  const handleStartDateChange = (event) => {
    setFormData({ ...formData, startDate: event.target.value });
  };

  const handleEndDateChange = (event) => {
    setFormData({ ...formData, endDate: event.target.value });
  };

  return (
    <div>
      <h2>Date Range Picker</h2>
      <label htmlFor="start-date">Start Date:</label>
      <input
        type="date"
        id="start-date"
        value={formData.startDate}
        onChange={handleStartDateChange}
        required
      />
      <br />
      <label htmlFor="end-date">End Date:</label>
      <input
        type="date"
        id="end-date"
        value={formData.endDate}
        onChange={handleEndDateChange}
        required
      />
      <br />
      <button onClick={onNext}>Submit</button>
    </div>
  );
}

export default DateRangePicker;
