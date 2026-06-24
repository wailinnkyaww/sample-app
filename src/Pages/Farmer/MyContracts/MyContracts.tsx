import "./MyContracts.css";

const MyContracts = () => {
  const contracts = [
    {
      id: "C001",
      buyer: "ABC Rice Company",
      crop: "Rice",
      quantity: "1000 kg",
      price: "$0.80",
      total: "$800",
      startDate: "01-Jun-2026",
      endDate: "30-Sep-2026",
      status: "Active",
    },
    {
      id: "C002",
      buyer: "Green Agro Ltd",
      crop: "Corn",
      quantity: "1500 kg",
      price: "$0.60",
      total: "$900",
      startDate: "15-May-2026",
      endDate: "15-Aug-2026",
      status: "Pending",
    },
    {
      id: "C003",
      buyer: "Fresh Market",
      crop: "Tomato",
      quantity: "500 kg",
      price: "$1.20",
      total: "$600",
      startDate: "01-Apr-2026",
      endDate: "30-Jun-2026",
      status: "Completed",
    },
  ];

  return (
    <div className="contracts-container">
      <div className="contracts-header">
        <h1>My Contracts</h1>

        <button className="new-contract-btn">+ New Contract</button>
      </div>

      {/* Summary Cards */}
      <div className="contract-stats">
        <div className="stat-card">
          <h3>Total Contracts</h3>
          <p>12</p>
        </div>

        <div className="stat-card">
          <h3>Active</h3>
          <p>5</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>3</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>4</p>
        </div>
      </div>

      {/* Contract Table */}
      <div className="table-wrapper">
        <table className="contracts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Buyer</th>
              <th>Crop</th>
              <th>Quantity</th>
              <th>Price/KG</th>
              <th>Total Value</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contracts.map((contract) => (
              <tr key={contract.id}>
                <td>{contract.id}</td>
                <td>{contract.buyer}</td>
                <td>{contract.crop}</td>
                <td>{contract.quantity}</td>
                <td>{contract.price}</td>
                <td>{contract.total}</td>
                <td>{contract.startDate}</td>
                <td>{contract.endDate}</td>
                <td>
                  <span className={`status ${contract.status.toLowerCase()}`}>
                    {contract.status}
                  </span>
                </td>

                <td>
                  <button className="view-btn">View</button>

                  <button className="edit-btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h2>Recent Contract Updates</h2>

        <ul>
          <li>Contract C001 approved by buyer.</li>
          <li>Contract C002 awaiting signature.</li>
          <li>Payment released for Contract C003.</li>
        </ul>
      </div>
    </div>
  );
};

export default MyContracts;
