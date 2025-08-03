
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const categories = [
    "Minutes", "Top Offers", "Mobiles", "TVs", "Electronics", "Fashion", "Beauty", "Home", "Furniture"
  ];

  const products = [
    { id: 1, name: "iPhone 16 Pro", price: "₹1,29,000", image: "/images/mobiles/iphone1.jpg" },
    { id: 2, name: "iPhone 16", price: "₹1,19,000", image: "/images/mobiles/iphone2.jpg" },
    { id: 3, name: "Samsung S24 Ultra", price: "₹1,34,000", image: "/images/mobiles/samsung.webp" },
    { id: 4, name: "Samsung S23", price: "₹65,000", image: "/images/mobiles/samsung-s23.webp" },
    { id: 5, name: "OnePlus 13", price: "₹58,000", image: "/images/mobiles/oneplus-13-white.png" },
    { id: 6, name: "OnePlus Nord 4", price: "₹39,000", image: "/images/mobiles/OnePlus-Nord-4-5G-1-1.webp" },
    { id: 7, name: "OnePlus Nord 4 Green", price: "₹40,000", image: "/images/mobiles/oneplus-nord-4-oasis-green-01.jpg" },
    { id: 8, name: "POCO X4 Pro", price: "₹23,000", image: "/images/mobiles/poco-x4-pro.webp" },
    { id: 9, name: "Oppo Reno", price: "₹27,000", image: "/images/mobiles/reno-opppo.jpg" },
    { id: 10, name: "Vivo V30", price: "₹32,000", image: "/images/mobiles/vivo.webp" }
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
