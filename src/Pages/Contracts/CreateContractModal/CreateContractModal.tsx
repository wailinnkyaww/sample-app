import { useState } from "react";
import type { Contract } from "../../../types/Contract";
import "./CreateContractModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (contract: Contract) => void;
}

const CreateContractModal = ({ isOpen, onClose, onCreate }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    crop: "",
    variety: "",
    location: "",
    quantity: "",
    unit: "Kg",
    price: "",
    deliveryDate: "",
    image: "",
    description: "",
    requirements: [] as string[],
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequirement = (value: string) => {
    if (formData.requirements.includes(value)) {
      setFormData({
        ...formData,
        requirements: formData.requirements.filter((r) => r !== value),
      });
    } else {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, value],
      });
    }
  };

  const handleSubmit = () => {
    const contract: Contract = {
      id: Date.now().toString(),

      title: formData.title,
      crop: formData.crop,
      variety: formData.variety,

      farmer: "Current Farmer",
      farmerId: "farmer001",

      location: formData.location,

      quantity: Number(formData.quantity),
      unit: formData.unit,

      price: Number(formData.price),

      deliveryDate: formData.deliveryDate,

      image:
        formData.image || "https://via.placeholder.com/600x350?text=Crop+Image",

      description: formData.description,

      requirements: formData.requirements,

      status: "Open",

      createdAt: new Date().toISOString(),
    };

    onCreate(contract);

    onClose();
  };

  return (
    <div className="create-modal-overlay">
      <div className="create-modal">
        <h2>Create Contract</h2>

        <input
          name="title"
          placeholder="Contract Title"
          onChange={handleChange}
        />

        <select name="crop" onChange={handleChange}>
          <option value="">Select Crop</option>
          <option>Rice</option>
          <option>Corn</option>
          <option>Beans</option>
          <option>Potato</option>
          <option>Tomato</option>
        </select>

        <input name="variety" placeholder="Variety" onChange={handleChange} />

        <input name="location" placeholder="Location" onChange={handleChange} />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <select name="unit" onChange={handleChange}>
          <option>Kg</option>
          <option>Ton</option>
          <option>Bag</option>
        </select>

        <input
          type="number"
          name="price"
          placeholder="Price Per Kg"
          onChange={handleChange}
        />

        <input type="date" name="deliveryDate" onChange={handleChange} />

        <input name="image" placeholder="Image URL" onChange={handleChange} />

        <textarea
          name="description"
          rows={4}
          placeholder="Description"
          onChange={handleChange}
        />

        <div className="requirement-section">
          <h4>Requirements</h4>

          {[
            "Organic",
            "Fresh Harvest",
            "Export Quality",
            "Quality Inspection",
          ].map((item) => (
            <label key={item}>
              <input type="checkbox" onChange={() => handleRequirement(item)} />
              {item}
            </label>
          ))}
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="create-btn" onClick={handleSubmit}>
            Create Contract
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContractModal;
