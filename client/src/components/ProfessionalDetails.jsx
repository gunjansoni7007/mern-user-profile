import React from 'react';

const ProfessionalDetails = ({ formData, handleChange, nextStep, prevStep }) => {
  const handleNext = () => {
    if (!formData.profession || !formData.addressLine1) {
      alert("Please fill all required fields.");
      return;
    }
    if (formData.profession === "Entrepreneur" && !formData.companyName) {
      alert("Company Name is required for Entrepreneurs.");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2><i>Professional Details</i></h2>

      <label>Profession:</label><br />
      <select value={formData.profession} onChange={handleChange("profession")}>
        <option value="">-- Select Profession --</option>
        <option value="Student">Student</option>
        <option value="Developer">Developer</option>
        <option value="Entrepreneur">Entrepreneur</option>
      </select>

      {formData.profession === "Entrepreneur" && (
        <>
          <br /><br />
          <label>Company Name:</label><br />
          <input
            type="text"
            value={formData.companyName}
            onChange={handleChange("companyName")}
          />
        </>
      )}

      <br /><br />
      <label>Address Line 1:</label><br />
      <input
        type="text"
        value={formData.addressLine1}
        onChange={handleChange("addressLine1")}
      />

      <br /><br />
      <button onClick={prevStep}>Back</button>{' '}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ProfessionalDetails;
