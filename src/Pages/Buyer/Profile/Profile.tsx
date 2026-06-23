import React from "react";

const Profile = () => {
  return (
    <div className="container mt-4">
      <h2>Company Profile</h2>

      <div className="card">
        <div className="card-body">
          <label>Company Name</label>
          <input
            className="form-control mb-3"
            defaultValue="ABC Rice Company"
          />

          <label>Email</label>
          <input className="form-control mb-3" defaultValue="abc@gmail.com" />

          <label>Phone</label>
          <input className="form-control mb-3" defaultValue="09123456789" />

          <label>Address</label>
          <textarea
            className="form-control mb-3"
            rows="3"
            defaultValue="Yangon, Myanmar"
          />

          <button className="btn btn-success">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
