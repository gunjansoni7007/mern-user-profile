import React, { useState } from 'react';

const PersonalInfo = ({ formData, handleChange, nextStep }) => {
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      handleChange("profilePhoto")({ target: { value: file } });

      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("profilePreview")({ target: { value: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 8) return "Weak";
    if (/\d/.test(password) && /[!@#$%^&*]/.test(password)) return "Strong";
    if (/\d/.test(password) || /[!@#$%^&*]/.test(password)) return "Medium";
    return "Weak";
  };

  const handleNext = () => {
    const username = formData.username || "";
    const newPassword = formData.newPassword || "";
    const file = formData.profilePhoto;

    if (
      !file ||
      !(file instanceof File) ||
      username.trim().length < 4 ||
      username.includes(" ") ||
      !formData.currentPassword ||
      newPassword.length < 8 ||
      !/\d/.test(newPassword) ||
      !/[!@#$%^&*]/.test(newPassword) ||
      (!formData.dob)
    ) {
      alert(
        "❌ Please fill all required fields correctly:\n" +
        "- Username (4+ chars, no spaces)\n" +
        "- Current password\n" +
        "- New password (8+ chars, 1 number, 1 special char)\n" +
        "- Upload JPG/PNG photo\n" +
        "- Please enter your Date of Birth."
      );
    return;  
    }

    nextStep();
  };

  return (
    <div>
      <h2><i>Personal Info</i></h2>

      <label>Profile Photo (JPG/PNG, max 2MB):</label><br />
      <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
      <br />
      {formData.profilePreview && (
        <img
          src={formData.profilePreview}
          alt="Preview"
          width="100"
          height="100"
          style={{ marginTop: '10px', borderRadius: '8px' }}
        />
      )}

      <br /><br />
      <label>Username:</label><br />
      <input
        type="text"
        value={formData.username}
        onChange={handleChange("username")}
        placeholder="4-20 chars, no spaces"
      />

      <br /><br />
      <label>Current Password:</label><br />
      <input
        type="password"
        value={formData.currentPassword}
        onChange={handleChange("currentPassword")}
        placeholder="Required"
      />

      <br /><br />
      <label>New Password:</label><br />
      <input
        type="password"
        value={formData.newPassword}
        onChange={(e) => {
          handleChange("newPassword")(e);
          setPasswordStrength(evaluatePasswordStrength(e.target.value));
        }}
        placeholder="Min 8 chars, 1 number, 1 special char"
      />

      {formData.newPassword && (
        <p style={{ fontSize: "0.85rem", color: 
          passwordStrength === "Strong" ? "green" : 
          passwordStrength === "Medium" ? "orange" : "red"
        }}>
          🔐 Strength: {passwordStrength}
        </p>
      )}

      <br /><br />
      <label>Gender:</label><br />
      <select value={formData.gender} onChange={handleChange("gender")}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <br /><br />
      {formData.gender === "Other" && (
        <>
          <label>Specify Gender:</label><br />
          <input
            type="text"
            value={formData.customGender}
            onChange={handleChange("customGender")}
            placeholder="Enter your gender"
          />
        </>
      )}
<label>Date of Birth:</label><br />
<input
  type="date"
  value={formData.dob}
  onChange={handleChange("dob")}
  max={new Date().toISOString().split("T")[0]} // restrict future dates
/>

      <br /><br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalInfo;
