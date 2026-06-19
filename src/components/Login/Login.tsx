import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-card">
      <h2 className="login-title">Login</h2>

      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="register-text">
        Don't have an account?
        <button className="register-link">
          <Link to={"/register"}>Register</Link>
        </button>
      </p>
    </div>
  );
};

export default Login;
