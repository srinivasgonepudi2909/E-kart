import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser?.email === input.email &&
      storedUser?.password === input.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setInput({ ...input, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setInput({ ...input, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}
