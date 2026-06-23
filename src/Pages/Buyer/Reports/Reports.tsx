import React from "react";

const Reports = () => {
  const reports = [
    {
      month: "January",
      purchases: 20,
      amount: "$10,000",
    },
    {
      month: "February",
      purchases: 15,
      amount: "$8,500",
    },
    {
      month: "March",
      purchases: 30,
      amount: "$15,000",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Reports</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total Purchases</h5>
              <h3>65</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5>Total Amount</h5>
              <h3>$33,500</h3>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Month</th>
            <th>Purchases</th>
            <th>Total Amount</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.month}</td>
              <td>{report.purchases}</td>
              <td>{report.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn btn-primary me-2">Export PDF</button>

      <button className="btn btn-success">Export Excel</button>
    </div>
  );
};

export default Reports;
