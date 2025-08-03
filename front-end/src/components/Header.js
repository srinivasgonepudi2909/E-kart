import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="E-Kart Logo" />
        <span>E-Kart</span>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search for Products, Brands and More"
      />

      <div className="nav-buttons">
        {isLoggedIn ? (
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
