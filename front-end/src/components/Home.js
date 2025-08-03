import { Link } from "react-router-dom";

export default function Home() {
  const products = [
    { id: 1, name: "iPhone 15", price: "₹75,000" },
    { id: 2, name: "MacBook Pro", price: "₹1,20,000" }
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.name} - {prod.price} 
            <Link to={`/buy/${prod.id}`}>
              <button style={{ marginLeft: "10px" }}>Buy</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
