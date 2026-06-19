import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState<"selection" | "register">("selection");
  const [role, setRole] = useState<"Buyer" | "Farmer" | null>(null);

  const handleRoleSelect = (selectedRole: "Buyer" | "Farmer") => {
    setRole(selectedRole);
    setStep("register");
  };

  const handleExit = () => {
    setStep("selection");
    setRole(null);
  };

  const handleRoleExit = () => {
    setStep("selection");
    setRole(null);
  };
  return (
    <div className="register-container">
      {step === "selection" && (
        <div className="selection-card">
          <button onClick={handleRoleExit} className="close-role-btn-">
            ×
          </button>
          <h1>Welcome!</h1>
          <p>Please choose your role:</p>

          <div className="role-buttons">
            <button
              onClick={() => handleRoleSelect("Buyer")}
              className="buyer-btn"
            >
              I am a Buyer
            </button>

            <button
              onClick={() => handleRoleSelect("Farmer")}
              className="farmer-btn"
            >
              I am a Farmer
            </button>
          </div>
        </div>
      )}

      {step === "register" && (
        <div className="register-card">
          {/* <button onClick={handleExit} className="close-btn">
            ×
          </button> */}

          <h2>Register as {role}</h2>

          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="fullname">
              Full Name{role == "Buyer" && " ( Company Name )"}
            </label>
            <input type="text" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" />
            <label htmlFor="comfirm-password">Comfirm Password</label>
            <input type="password" placeholder="Confirm Password" />
            <input type="hidden" role="role" />

            <label className="checkbox-group">
              <input type="checkbox" required />
              <span>I agree to the terms</span>
            </label>

            <div className="form-buttons">
              <button
                type="button"
                className="back-btn"
                onClick={() => setStep("selection")}
              >
                Back
              </button>

              <button type="submit" className="register-btn">
                Register
              </button>
            </div>
          </form>
          <p className="register-text">
            Do have an account?
            <button className="register-link">
              <Link to={"/login"}>Login</Link>
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
