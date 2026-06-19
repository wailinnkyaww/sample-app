import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <ul>
          <li>
            <Link className="link" to="/admin/dashboard">
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/AdminProfile">
              Admin Profile
            </Link>
          </li>

          <li>
            <Link className="link" to="/user/dashboard">
              User Dashboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/userProfile">
              User Profile
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
