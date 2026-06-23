import React from "react";

const Notifications = () => {
  const notifications = [
    "Contract accepted by Mg Mg",
    "Payment completed successfully",
    "New harvest available",
  ];

  return (
    <div className="container mt-4">
      <h2>Notifications</h2>

      <ul className="list-group">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            {notification}

            <button className="btn btn-sm btn-outline-primary">
              Mark Read
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
