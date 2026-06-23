import React from "react";

const Farmers = () => {
  const farmers = [
    {
      id: 1,
      name: "Mg Mg",
      location: "Yangon",
      riceType: "Paw San",
      farmSize: "20 Acres",
    },
    {
      id: 2,
      name: "Aung Aung",
      location: "Bago",
      riceType: "Emata",
      farmSize: "15 Acres",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Farmers</h2>

      <input className="form-control mb-3" placeholder="Search Farmer..." />

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Rice Type</th>
            <th>Farm Size</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {farmers.map((farmer) => (
            <tr key={farmer.id}>
              <td>{farmer.name}</td>
              <td>{farmer.location}</td>
              <td>{farmer.riceType}</td>
              <td>{farmer.farmSize}</td>
              <td>
                <button className="btn btn-primary btn-sm">
                  Send Contract
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Farmers;
