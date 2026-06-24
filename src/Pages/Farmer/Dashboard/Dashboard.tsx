import "./Dashboard.css";

const Dashboard = () => {
  const recentContracts = [
    {
      id: "CTR-001",
      buyer: "ABC Foods Ltd",
      crop: "Rice",
      status: "Active",
    },
    {
      id: "CTR-002",
      buyer: "Green Agro Co",
      crop: "Corn",
      status: "Pending",
    },
    {
      id: "CTR-003",
      buyer: "Fresh Market",
      crop: "Tomato",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Farmer Dashboard</h1>

      {/* Stats */}
      <div className="stats">
        <div className="card">
          <h3>Active Contracts</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Total Harvests</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Pending Payments</h3>
          <p>$2,500</p>
        </div>

        <div className="card">
          <h3>Company Offers</h3>
          <p>3</p>
        </div>
      </div>

      {/* Recent Contracts */}
      <div className="section">
        <h2>Recent Contracts</h2>

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Buyer</th>
              <th>Crop</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentContracts.map((contract) => (
              <tr key={contract.id}>
                <td>{contract.id}</td>
                <td>{contract.buyer}</td>
                <td>{contract.crop}</td>
                <td>
                  <span className={`status ${contract.status.toLowerCase()}`}>
                    {contract.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Harvest Schedule */}
      <div className="section">
        <h2>Upcoming Harvests</h2>

        <ul className="harvest-list">
          <li>🌾 Rice Harvest - 10 July 2026</li>
          <li>🌽 Corn Harvest - 15 July 2026</li>
          <li>🍅 Tomato Harvest - 20 July 2026</li>
        </ul>
      </div>

      {/* Notifications */}
      <div className="section">
        <h2>Notifications</h2>

        <div className="notification">
          New contract offer received from ABC Foods Ltd.
        </div>

        <div className="notification">Payment of $1,200 has been approved.</div>

        <div className="notification">
          Harvest report submitted successfully.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
