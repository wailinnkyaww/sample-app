import React from "react";

const Payment = () => {
  const payments = [
    {
      id: "PAY001",
      contract: "C001",
      amount: "$5000",
      status: "Paid",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Payments</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total Paid</h5>
              <h3>$15,000</h3>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Contract</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.id}</td>
              <td>{payment.contract}</td>
              <td>{payment.amount}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
