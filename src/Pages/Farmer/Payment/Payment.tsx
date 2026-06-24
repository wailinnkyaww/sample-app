import "./Payment.css";

const Payment = () => {
  const payments = [
    {
      id: "PAY001",
      contract: "C001",
      buyer: "ABC Rice Company",
      contractValue: 10000,
      deductions: 2300,
      finalPayment: 7700,
      paymentDate: "20 Jun 2026",
      method: "Bank Transfer",
      transactionId: "TXN123456",
      status: "Paid",
    },
    {
      id: "PAY002",
      contract: "C002",
      buyer: "Green Agro Ltd",
      contractValue: 8000,
      deductions: 1000,
      finalPayment: 7000,
      paymentDate: "25 Jun 2026",
      method: "Digital Wallet",
      transactionId: "TXN789654",
      status: "Pending",
    },
  ];

  return (
    <div className="payment-container">
      <h1>Payments</h1>

      {/* Statistics */}
      <div className="stats">
        <div className="card">
          <h3>Total Earnings</h3>
          <p>$14,700</p>
        </div>

        <div className="card">
          <h3>Paid Payments</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Pending Payments</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Total Deductions</h3>
          <p>$3,300</p>
        </div>
      </div>

      {/* Payment Table */}
      <div className="section">
        <h2>Payment History</h2>

        <div className="table-wrapper">
          <table className="payment-table">
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Contract</th>
                <th>Buyer</th>
                <th>Contract Value</th>
                <th>Deductions</th>
                <th>Final Payment</th>
                <th>Payment Date</th>
                <th>Method</th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.contract}</td>
                  <td>{payment.buyer}</td>
                  <td>${payment.contractValue}</td>
                  <td>${payment.deductions}</td>
                  <td>${payment.finalPayment}</td>
                  <td>{payment.paymentDate}</td>
                  <td>{payment.method}</td>
                  <td>{payment.transactionId}</td>

                  <td>
                    <span className={`status ${payment.status.toLowerCase()}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deduction Details */}
      <div className="section">
        <h2>Deduction Breakdown</h2>

        <div className="summary-box">
          <p>
            Seeds Support <span>$800</span>
          </p>

          <p>
            Fertilizer Support <span>$500</span>
          </p>

          <p>
            Cash Advance <span>$1,000</span>
          </p>

          <hr />

          <p className="total">
            Total Deductions <span>$2,300</span>
          </p>
        </div>
      </div>

      {/* Smart Contract Status */}
      <div className="section">
        <h2>Smart Contract Payment Status</h2>

        <div className="contract-status">
          <p>✅ Harvest Delivered</p>

          <p>✅ Buyer Verification Completed</p>

          <p>✅ Smart Contract Executed</p>

          <p>✅ Payment Released</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
