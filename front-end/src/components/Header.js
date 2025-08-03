import { Link } from "react-router-dom";

export default function Header() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div style={{ padding: "10px", display: "flex", justifyContent: "space-between" }}>
      <h3>🛍️ Flipkart Clone</h3>
      {isLoggedIn ? (
        <button onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/";
        }}>Logout</button>
      ) : (
        <>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
        </>
      )}
    </div>
  );
}
