const Dashboard = () => {
  return (
    <div>
      <h1>Farmer Dashboard</h1>

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
          <p>$2500</p>
        </div>

        <div className="card">
          <h3>Company Offers</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
