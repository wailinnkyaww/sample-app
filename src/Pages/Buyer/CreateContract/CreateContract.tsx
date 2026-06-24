import React, { useState } from "react";
import "./CreateContract.css";

function CreateContract() {
  const [formData, setFormData] = useState({
    farmer: "",
    crop: "",
    quantity: "",
    price: "",
    deliveryDate: "",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Contract Created Successfully!");
  };

  return (
    <div className="contract-page">
      <div className="contract-container">
        <div className="contract-header">
          <h1>Create Farming Contract</h1>
          <p>
            Create agreements between your company and farmers for crop
            production and delivery.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* <div className="contract-card">
            <h3>👨‍🌾 Farmer Information</h3>
            <div className="form-grid">
              <div>
                <label>Select Farmer</label>
                <select
                  name="farmer"
                  value={formData.farmer}
                  onChange={handleChange}
                >
                  <option>Select Farmer</option>
                  <option>U Aung Kyaw</option>
                  <option>Daw Hla Hla</option>
                  <option>U Min Tun</option>
                </select>
              </div>

              <div>
                <label>Farm Location</label>
                <input type="text" placeholder="Yangon" />
              </div>
            </div>
          </div> */}

          <div className="contract-card">
            <h3>🌾 Crop Details</h3>

            <div className="form-grid">
              <div>
                <label>Crop Name</label>
                <input
                  type="text"
                  name="crop"
                  value={formData.crop}
                  onChange={handleChange}
                  placeholder="Rice"
                />
              </div>

              <div>
                <label>Quantity (KG)</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="10000"
                />
              </div>

              <div>
                <label>Price Per KG ($)</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="2"
                />
              </div>

              <div>
                <label>Delivery Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Offers</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Fertilizer, pesticides, Techniques"
                />
              </div>

              <div>
                <label>Start Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>End Date</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="contract-card">
            <h3>🚚 Delivery Information</h3>

            <label>Delivery Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Company Warehouse"
            />
          </div>

          <div className="contract-card">
            <h3>📝 Terms & Conditions</h3>

            <textarea
              rows="5"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter contract terms and conditions..."
            />
          </div>

          <div className="btn-group-contract">
            <button type="button" className="draft-btn">
              Save Draft
            </button>

            <button type="submit" className="submit-btn">
              Create Contract
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContract;
