import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ProfessionalDetails from "./ProfessionalDetails";
import Preferences from "./Preferences";
import Summary from "./Summary";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    username: "",
    currentPassword: "",
    newPassword: "",
    gender: "",          
    customGender: "",
    dob: "",             // ✅ added DOB
    profession: "",
    companyName: "",
    addressLine1: "",
    country: "",
    state: "",
    city: "",
    subscriptionPlan: "",
    newsletter: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const value =
      input === "profilePhoto"
        ? e.target.files[0]
        : e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    if (input === "country") {
      setFormData((prev) => ({
        ...prev,
        country: value,
        state: "",
        city: "",
        addressLine1: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [input]: value,
      }));
    }
  };

  switch (step) {
    case 1:
      return (
        <PersonalInfo
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 2:
      return (
        <ProfessionalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 3:
      return (
        <Preferences
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
        />
      );
    case 4:
      return (
        <Summary
          prevStep={prevStep}
          values={formData}
          setFormData={setFormData}
        />
      );
    default:
      return <div>Unknown Step</div>;
  }
};

export default MainForm;
