import "./ContractCard.css";

interface ContractCardProps {
  contract: {
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
  };

  onApply: (id: string) => void;
  onView: (id: string) => void;
}

const ContractCard = ({ contract, onApply, onView }: ContractCardProps) => {
  return (
    <div className="contract-card">
      <div className="contract-image">
        <img src={contract.image} alt={contract.crop} />
      </div>

      <div className="contract-content">
        <h3>{contract.title}</h3>

        <div className="contract-info">
          <p>
            <strong>Farmer:</strong> {contract.farmer}
          </p>

          <p>
            <strong>Crop:</strong> {contract.crop}
          </p>

          <p>
            <strong>Location:</strong> {contract.location}
          </p>

          <p>
            <strong>Quantity:</strong> {contract.quantity} {contract.unit}
          </p>

          <p>
            <strong>Price:</strong> ${contract.price}/Kg
          </p>

          <p>
            <strong>Delivery:</strong> {contract.deliveryDate}
          </p>
        </div>

        <div className="contract-footer">
          <span className={`status ${contract.status.toLowerCase()}`}>
            {contract.status}
          </span>

          <div className="contract-buttons">
            <button className="view-btn" onClick={() => onView(contract.id)}>
              View Details
            </button>

            <button className="apply-btn" onClick={() => onApply(contract.id)}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
