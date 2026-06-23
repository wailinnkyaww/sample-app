import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Farmers", value: 45 },
    { title: "Active Contracts", value: 12 },
    { title: "Purchases", value: 28 },
    { title: "Pending Payments", value: "$5,000" },
  ];

  const recentContracts = [
    {
      id: "C001",
      farmer: "John Farmer",
      riceType: "Paw San",
      status: "Pending",
    },
    {
      id: "C002",
      farmer: "David Tun",
      riceType: "Emata",
      status: "Accepted",
    },
  ];

  const recentPurchases = [
    {
      id: "P001",
      rice: "Paw San",
      quantity: "2000kg",
      status: "Delivered",
    },
    {
      id: "P002",
      rice: "Emata",
      quantity: "1000kg",
      status: "Processing",
    },
  ];

  const notifications = [
    "Contract C001 accepted",
    "Payment completed",
    "New harvest available",
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Buyer Dashboard</h2>

      {/* Statistics */}
      <div className="row">
        {stats.map((stat, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>{stat.title}</h5>
                <h3>{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Contracts */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Recent Contracts</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Farmer</th>
                <th>Rice Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentContracts.map((contract) => (
                <tr key={contract.id}>
                  <td>{contract.id}</td>
                  <td>{contract.farmer}</td>
                  <td>{contract.riceType}</td>
                  <td>{contract.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Purchases */}
      <div className="card mb-4">
        <div className="card-header">
          <h5>Recent Purchases</h5>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Rice</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentPurchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td>{purchase.id}</td>
                  <td>{purchase.rice}</td>
                  <td>{purchase.quantity}</td>
                  <td>{purchase.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notifications */}
      <div className="card">
        <div className="card-header">
          <h5>Notifications</h5>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {notifications.map((notification, index) => (
              <li key={index} className="list-group-item">
                {notification}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
