import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="logo" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          My Application
        </div>
        <nav className="nav">
          <ul className="nav-lists">
            <li className="nav-item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="allPost">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="contracts">
                Contracts
              </Link>
            </li>
          </ul>

          {loading ? (
            <span style={{ color: "#666", fontSize: "14px", marginRight: "10px" }}>Loading...</span>
          ) : user ? (
            <div className="user-nav-section" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <span className="user-greeting" style={{ fontSize: "14px", fontWeight: "500" }}>
                Hello, <strong>{user.fullName}</strong> ({user.role})
              </span>
              <button className="btn-login" onClick={handleLogout} style={{ backgroundColor: "#ef4444", border: "none" }}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="btn-login">
                <Link to="register">Register</Link>
              </button>
              <button className="btn-login">
                <Link to="login">Login</Link>
              </button>
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;

