import "./ContractDetails.css";

interface Contract {
  id: string;
  title: string;
  crop: string;
  farmer: string;
  location: string;
  quantity: number;
  unit: string;
  price: number;
  deliveryDate: string;
  image: string;
  status: string;
  description?: string;
  requirements?: string[];
}

interface Props {
  contract: Contract | null;
  onClose: () => void;
  onApply: (id: string) => void;
}

const ContractDetails = ({ contract, onClose, onApply }: Props) => {
  if (!contract) return null;

  return (
    <div className="modal-overlay">
      <div className="contract-modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img
          src={contract.image}
          alt={contract.crop}
          className="contract-banner"
        />

        <h2>{contract.title}</h2>

        <div className="details-grid">
          <div>
            <strong>Farmer</strong>
            <p>{contract.farmer}</p>
          </div>

          <div>
            <strong>Crop</strong>
            <p>{contract.crop}</p>
          </div>

          <div>
            <strong>Location</strong>
            <p>{contract.location}</p>
          </div>

          <div>
            <strong>Quantity</strong>
            <p>
              {contract.quantity} {contract.unit}
            </p>
          </div>

          <div>
            <strong>Price</strong>
            <p>${contract.price} / Kg</p>
          </div>

          <div>
            <strong>Delivery</strong>
            <p>{contract.deliveryDate}</p>
          </div>

          <div>
            <strong>Status</strong>
            <p>{contract.status}</p>
          </div>
        </div>

        <div className="section">
          <h3>Description</h3>

          <p>
            {contract.description ??
              "High-quality agricultural products are required for this contract. The buyer expects timely delivery and premium quality."}
          </p>
        </div>

        <div className="section">
          <h3>Requirements</h3>

          <ul>
            {(
              contract.requirements ?? [
                "Minimum order 1000 Kg",
                "Fresh harvest only",
                "Quality inspection before delivery",
              ]
            ).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-actions">
          <button className="apply-button" onClick={() => onApply(contract.id)}>
            Apply Contract
          </button>

          <button className="cancel-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractDetails;
