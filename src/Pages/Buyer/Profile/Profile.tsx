import React, { useState, useEffect } from "react";
import "./Profile.css";
const Profile = () => {
  const [logo, setLogo] = useState("https://via.placeholder.com/120");

  useEffect(() => {
    const savedLogo = localStorage.getItem("companyLogo");

    if (savedLogo) {
      setLogo(savedLogo);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setLogo(reader.result);
      localStorage.setItem("companyLogo", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <h2>🏢 Company Profile</h2>
          <p>Manage your company information and logo.</p>
        </div>

        <div className="logo-section">
          <div className="logo-preview">
            <img src={logo} alt="Company Logo" />
          </div>

          <label className="upload-btn">
            Upload Logo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue="ABC Rice Company"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            defaultValue="abc@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            defaultValue="09123456789"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            rows="4"
            className="form-control"
            defaultValue="Yangon, Myanmar"
          />
        </div>

        <button className="btn btn-success w-100 mt-3" onClick={handleSubmit}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
