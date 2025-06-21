import React, { useEffect, useState } from 'react';

const Preferences = ({ formData, handleChange, nextStep, prevStep }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch countries on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/locations/countries')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    if (formData.country) {
      fetch(`http://localhost:5000/api/locations/states?country=${formData.country}`)
        .then(res => res.json())
        .then(data => setStates(data));

      // Reset dependent fields
      handleChange("state")({ target: { value: '' } });
      handleChange("city")({ target: { value: '' } });
    }
  }, [formData.country]);

  // Fetch cities when state changes (with country in query)
  useEffect(() => {
    if (formData.state) {
      fetch(`http://localhost:5000/api/locations/cities?country=${formData.country}&state=${formData.state}`)
        .then(res => res.json())
        .then(data => setCities(data));

      handleChange("city")({ target: { value: '' } });
    }
  }, [formData.state]);

  const handleNext = () => {
    if (!formData.country || !formData.state || !formData.city) {
      alert("Please select country, state, and city.");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2><i>Preferences</i></h2>

      <label>Country:</label><br />
      <select value={formData.country} onChange={handleChange("country")}>
        <option value="">-- Select Country --</option>
        {countries.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </select>

      <br /><br />
      <label>State:</label><br />
      <select value={formData.state} onChange={handleChange("state")}>
        <option value="">-- Select State --</option>
        {states.map((s, i) => <option key={i} value={s}>{s}</option>)}
      </select>

      <br /><br />
      <label>City:</label><br />
      <select value={formData.city} onChange={handleChange("city")}>
        <option value="">-- Select City --</option>
        {cities.map((c, i) => <option key={i} value={c}>{c}</option>)}
      </select>

      <br /><br />
      <label>Subscription Plan:</label><br />
      {["Basic", "Pro", "Enterprise"].map((plan) => (
        <label key={plan}>
          <input
            type="radio"
            name="subscriptionPlan"
            value={plan}
            checked={formData.subscriptionPlan === plan}
            onChange={handleChange("subscriptionPlan")}
          /> {plan}
        </label>
      ))}

      <br /><br />
      <label>
        <input
          type="checkbox"
          checked={formData.newsletter}
          onChange={handleChange("newsletter")}
        />
        Subscribe to Newsletter
      </label>

      <br /><br />
      <button onClick={prevStep}>Back</button>{' '}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Preferences;
