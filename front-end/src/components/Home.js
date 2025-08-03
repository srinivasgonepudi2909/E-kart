import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const categories = [
    "Minutes", "Top Offers", "Mobiles", "TVs", "Electronics", "Fashion", "Beauty", "Home", "Furniture"
  ];

  const products = [
    { id: 1, name: "iPhone 15", price: "₹75,000", image: "https://m.media-amazon.com/images/I/81+GIkwQbNL._SX679_.jpg" },
    { id: 2, name: "MacBook Pro", price: "₹1,20,000", image: "https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg" },
    { id: 3, name: "Samsung Galaxy", price: "₹65,000", image: "https://m.media-amazon.com/images/I/81ZSn2rk9WL._SL1500_.jpg" },
  ];

  return (
    <div className="home">
      <div className="category-bar">
        {categories.map(cat => <div key={cat} className="category">{cat}</div>)}
      </div>
      <h3>Best Deals on Smartphones</h3>
      <div className="product-grid">
        {products.map(prod => (
          <div className="product-card" key={prod.id}>
            <img src={prod.image} alt={prod.name} />
            <h4>{prod.name}</h4>
            <p>{prod.price}</p>
            <Link to={`/buy/${prod.id}`}>
              <button>Buy</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
