import { useParams, Navigate } from "react-router-dom";

export default function Buy() {
  const { id } = useParams();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    alert("Please login or signup to continue");
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Thank you! Product {id} will be ordered (dummy).</h2>
    </div>
  );
}
