import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sections = [
    {
      category: "Top Offers",
      title: "Top Offers Just for You",
      products: [
        { id: 1, name: "iPhone 16 Pro", price: "₹1,29,000", offerPrice: "₹1,19,000", image: "/images/mobiles/iphone1.jpg" },
        { id: 2, name: "Samsung S24 Ultra", price: "₹1,34,000", offerPrice: "₹1,24,000", image: "/images/mobiles/samsung.webp" },
        { id: 3, name: "OnePlus Nord 4", price: "₹39,000", offerPrice: "₹35,000", image: "/images/mobiles/OnePlus-Nord-4-5G-1-1.webp" },
        { id: 4, name: "POCO X4 Pro", price: "₹23,000", offerPrice: "₹20,000", image: "/images/mobiles/poco-x4-pro.webp" },
        { id: 5, name: "Oppo Reno", price: "₹27,000", offerPrice: "₹24,000", image: "/images/mobiles/reno-opppo.jpg" },
        { id: 6, name: "LG 55 inch", price: "₹42,000", offerPrice: "₹38,000", image: "/images/tvs/Lg.jpg" },
        { id: 7, name: "Samsung Crystal", price: "₹49,000", offerPrice: "₹43,000", image: "/images/tvs/samsung-55-inches-crystal.jpg" },
        { id: 8, name: "Sony Bravia 55", price: "₹55,000", offerPrice: "₹49,000", image: "/images/tvs/Sony-Premium.webp" },
        { id: 9, name: "LG AC", price: "₹32,000", offerPrice: "₹28,000", image: "/images/electronics/Lg-AC.webp" },
        { id: 10, name: "Samsung Fridge", price: "₹22,000", offerPrice: "₹19,500", image: "/images/electronics/samsung-fridge.webp" },
        { id: 11, name: "Exide Inverter Battery", price: "₹9,000", offerPrice: "₹7,500", image: "/images/electronics/Exide-Inverter-battery.webp" }
      ]
    },
    {
      category: "Mobiles",
      title: "Best Deals on Smartphones",
      products: [
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
      ]
    },
    {
      category: "TVs",
      title: "Top Deals on Smart TVs",
      products: [
        { id: 11, name: "LG 55 inch", price: "₹42,000", image: "/images/tvs/Lg.jpg" },
        { id: 12, name: "Redmi 4K", price: "₹37,000", image: "/images/tvs/redmi-4k-55-inches.webp" },
        { id: 13, name: "Samsung Crystal", price: "₹49,000", image: "/images/tvs/samsung-55-inches-crystal.jpg" },
        { id: 14, name: "Sony Bravia 55", price: "₹55,000", image: "/images/tvs/Sony-Premium.webp" },
        { id: 15, name: "TCL 4K", price: "₹30,000", image: "/images/tvs/TCL-55-4k.webp" }
      ]
    },
    {
      category: "Electronics",
      title: "Electronics Mega Sale",
      products: [
        { id: 16, name: "LG Washing Machine", price: "₹18,000", image: "/images/electronics/Washing-machine-LG.jpg" },
        { id: 17, name: "LG AC", price: "₹32,000", image: "/images/electronics/Lg-AC.webp" },
        { id: 18, name: "Samsung Fridge", price: "₹22,000", image: "/images/electronics/samsung-fridge.webp" },
        { id: 19, name: "Sony ULT Wear Headphones", price: "₹12,000", image: "/images/electronics/Sony-ULT_WEAR.webp" },
        { id: 20, name: "Exide Inverter Battery", price: "₹9,000", image: "/images/electronics/Exide-Inverter-battery.webp" }
      ]
    }
  ];

  const categories = ["All", "Top Offers", "Mobiles", "TVs", "Electronics"];

  return (
    <div className="home">
      <div className="category-bar">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {sections
        .filter(sec => selectedCategory === "All" || sec.category === selectedCategory)
        .map((section, index) => (
          <div key={index} className="section">
            <h3>{section.title}</h3>
            <div className="product-grid">
              {section.products.map(prod => (
                <div className="product-card" key={prod.id}>
                  <img src={prod.image} alt={prod.name} />
                  <h4>{prod.name}</h4>
                  {prod.offerPrice ? (
                    <p>
                      <span style={{ textDecoration: "line-through", color: "gray" }}>{prod.price}</span> &nbsp;
                      <span style={{ color: "green", fontWeight: "bold" }}>{prod.offerPrice}</span>
                    </p>
                  ) : (
                    <p>{prod.price}</p>
                  )}
                  <Link to={`/buy/${prod.id}`}>
                    <button>Buy</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
