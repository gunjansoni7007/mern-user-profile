import React, { useState } from 'react';

const SummaryStep = ({ formData }) => {
  const [submitted, setSubmitted] = useState(false);
  const {
    profilePhoto,
    username,
    currentPassword,
    newPassword,
    profession,
    companyName,
    addressLine1,
    city,
    state,
    country,
    subscriptionPlan,
    newsletter,
  } = formData;

  const handleSubmit = async () => {
    if (submitted) return;

    const formDataToSend = new FormData();

    formDataToSend.append("username", username);
    formDataToSend.append("currentPassword", currentPassword);
    formDataToSend.append("newPassword", newPassword);
    formDataToSend.append("profession", profession);
    formDataToSend.append("companyName", companyName);
    formDataToSend.append("addressLine1", addressLine1);
    formDataToSend.append("city", city);
    formDataToSend.append("state", state);
    formDataToSend.append("country", country);
    formDataToSend.append("subscriptionPlan", subscriptionPlan);
    formDataToSend.append("newsletter", newsletter);

    if (profilePhoto instanceof File) {
      formDataToSend.append("profilePhoto", profilePhoto);
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Profile submitted successfully!");
        setSubmitted(true);
      } else {
        alert("❌ Submission failed. Try again.");
      }
    } catch (error) {
      alert("❌ Submission failed. Try again.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4"><i>🔍 Review Your Information</i></h2>

      {profilePhoto ? (
        <div>
          <strong>🖼️ Profile Photo:</strong>
          <br />
          <img
  src={
    typeof profilePhoto === "string"
      ? `https://mern-user-backend-ovcm.onrender.com/uploads/${profilePhoto}`
      : URL.createObjectURL(profilePhoto)
  }
  alt="Profile Preview"
  style={{
    width: "120px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "10px"
  }}
/>

        </div>
      ) : (
        <p><strong>🖼️ Profile Photo:</strong> Not uploaded</p>
      )}

      <p><strong>👤 Username:</strong> {username}</p>
      <p><strong>🔐 Current Password:</strong> ••••••••</p>
      <p><strong>🆕 New Password:</strong> ••••••••</p>
      <p><strong>🎓 Profession:</strong> {profession}</p>
      <p><strong>🏢 Company Name:</strong> {companyName || '—'}</p>
      <p>
        <strong>📍 Address:</strong> {addressLine1}, {city}, {state}, {country}
      </p>
      <p><strong>📦 Subscription Plan:</strong> {subscriptionPlan}</p>
      <p><strong>📬 Subscribed to Newsletter:</strong> {newsletter ? 'Yes' : 'No'}</p>

      <div className="pt-4">
        <button
          onClick={handleSubmit}
          disabled={submitted}
          className={`${
            submitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-4 py-2 rounded transition`}
        >
          {submitted ? "Submitted ✅" : "Submit ✅"}
        </button>
      </div>
    </div>
  );
};

export default SummaryStep;
