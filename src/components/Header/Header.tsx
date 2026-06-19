import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">My Application</div>
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
          <button className="btn-login">
            <Link to="register">Register</Link>
          </button>
          <button className="btn-login">
            <Link to="login">Login</Link>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
