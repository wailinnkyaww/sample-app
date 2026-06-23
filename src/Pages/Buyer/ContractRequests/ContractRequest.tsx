import React from "react";

const ContractRequests = () => {
  const contracts = [
    {
      id: "C001",
      farmer: "Mg Mg",
      riceType: "Paw San",
      quantity: "5000kg",
      status: "Pending",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Contract Requests</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5>Create Contract</h5>

          <input className="form-control mb-2" placeholder="Farmer Name" />
          <input className="form-control mb-2" placeholder="Rice Type" />
          <input className="form-control mb-2" placeholder="Quantity" />
          <input className="form-control mb-2" placeholder="Price" />

          <button className="btn btn-success">Create Contract</button>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Farmer</th>
            <th>Rice Type</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.farmer}</td>
              <td>{contract.riceType}</td>
              <td>{contract.quantity}</td>
              <td>{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractRequests;
