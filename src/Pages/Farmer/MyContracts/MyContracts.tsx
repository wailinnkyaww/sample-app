const MyContracts = () => {
  const contracts = [
    {
      id: "C001",
      buyer: "ABC Rice",
      quantity: "1000kg",
      status: "Active",
    },
  ];

  return (
    <div>
      <h1>My Contracts</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Buyer</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>{contract.id}</td>
              <td>{contract.buyer}</td>
              <td>{contract.quantity}</td>
              <td>{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContracts;
