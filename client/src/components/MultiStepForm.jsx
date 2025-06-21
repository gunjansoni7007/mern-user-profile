import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalDetails from './ProfessionalDetails';
import Preferences from './Preferences';
import Summary from './Summary';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    profilePhoto: null,
    profilePreview: '',
    username: '',
    currentPassword: '',
    newPassword: '',
    profession: '',
    companyName: '',
    addressLine1: '',
    country: '',
    state: '',
    city: '',
    subscriptionPlan: 'Basic',
    newsletter: true,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (field) => (e) => {
    const value =
      e?.target?.type === 'checkbox'
        ? e.target.checked
        : e?.target?.value || e;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <ProfessionalDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Preferences
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Summary
          formData={formData}
          prevStep={prevStep}
        />
      );
    default:
      return <div>Invalid step</div>;
  }
};

export default MultiStepForm;
