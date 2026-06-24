import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "Contract",
      title: "New Contract Request",
      message: "ABC Rice Company sent a new contract request.",
      time: "10 mins ago",
      status: "Unread",
    },
    {
      id: 2,
      type: "Payment",
      title: "Payment Received",
      message: "$7,700 has been transferred to your account.",
      time: "2 hours ago",
      status: "Unread",
    },
    {
      id: 3,
      type: "Harvest",
      title: "Harvest Approved",
      message: "Your weekly harvest report has been approved.",
      time: "Yesterday",
      status: "Read",
    },
    {
      id: 4,
      type: "Offer",
      title: "New Company Offer",
      message: "Green Agro Ltd offered Fertilizer Support.",
      time: "2 days ago",
      status: "Read",
    },
    {
      id: 5,
      type: "Contract",
      title: "Contract Expiring Soon",
      message: "Contract C001 will expire in 7 days.",
      time: "3 days ago",
      status: "Read",
    },
  ];

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>

      {/* Statistics */}
      <div className="stats">
        <div className="card">
          <h3>Total Notifications</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Unread</h3>
          <p>5</p>
        </div>

        <div className="card">
          <h3>Payments</h3>
          <p>8</p>
        </div>

        <div className="card">
          <h3>Contracts</h3>
          <p>12</p>
        </div>
      </div>

      {/* Notification List */}
      <div className="notification-list">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification-card ${
              notification.status === "Unread" ? "unread" : ""
            }`}
          >
            <div className="notification-header">
              <h3>{notification.title}</h3>

              <span className={`status ${notification.status.toLowerCase()}`}>
                {notification.status}
              </span>
            </div>

            <p>{notification.message}</p>

            <div className="notification-footer">
              <span className="type">{notification.type}</span>

              <span className="time">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="activity-section">
        <h2>Recent Activity Summary</h2>

        <ul>
          <li>Contract C001 accepted by farmer.</li>

          <li>Harvest Report #HR005 approved by buyer.</li>

          <li>Payment PAY001 completed successfully.</li>

          <li>Fertilizer support received from buyer.</li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
