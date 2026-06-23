const Payment = () => {
  return (
    <div>
      <h1>Payments</h1>

      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>C001</td>
            <td>$1000</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
