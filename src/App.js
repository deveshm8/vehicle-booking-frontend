import React, { useState } from 'react';
import NameQuestion from './NameQuestion';
import WheelsQuestion from './WheelsQuestion';
import VehicleTypeQuestion from './VehicleTypeQuestion';
import VehicleModelQuestion from './VehicleModelQuestion';
import DateRangePicker from './DateRangePicker';
import Button from '@mui/material/Button';

function App() {
  const [step, setStep] = useState(1); // Current step of the form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    numberOfWheels: '',
    vehicleType: '',
    vehicleModel: '',
    startDate: null,
    endDate: null,
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    try {
      
      const response = await axios.post('/api/submitForm', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {step === 1 && <Name formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {step === 2 && <Wheels formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {step === 3 && <VehicleType formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {step === 4 && <VehicleModel formData={formData} setFormData={setFormData} onNext={handleNext} />}
      {step === 5 && <DateRangePicker formData={formData} setFormData={setFormData} onNext={handleNext} />}

      {step < 5 && (
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      )}

      {step === 5 && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </div>
  );
}

export default App;