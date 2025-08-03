import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button type="submit">Signup</button>
    </form>
  );
}
