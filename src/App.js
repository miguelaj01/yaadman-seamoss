import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";

function YaadManSeaMoss() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const products = [
    {
      id: 1,
      name: "Sea Moss Gel",
      description: "Smooth, nutrient-rich gel to energize your body daily.",
      price: 30,
      image:
        "https://flourishingkitchen.com/wp-content/uploads/2024/04/Irish-sea-moss-gel-recipe-.jpeg",
    },
    {
      id: 2,
      name: "Raw Sea Moss",
      description:
        "Pure wildcrafted sea moss – ready to soak, blend, and enjoy.",
      price: 40,
      image: "https://moorherbs.com/wp-content/uploads/2022/06/sea-moss.jpg",
    },
  ];

  return (
    <Router>
      <div style={{ fontFamily: "Arial", background: "#f7faf5", color: "#064e3b" }}>
        {/* Header */}
        <header
          style={{
            background: "#065f46",
            color: "white",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1>Yaad Man Sea Moss</h1>
          <nav>
            <Link to="/" style={{ color: "white", marginRight: "15px" }}>Home</Link>
            <Link to="/products" style={{ color: "white", marginRight: "15px" }}>Products</Link>
            <Link to="/cart" style={{ color: "white" }}>Cart</Link>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <section style={{ textAlign: "center", padding: "80px 20px" }}>
                <h2 style={{ fontSize: "40px" }}>
                  Natural Energy from the Caribbean Sea
                </h2>
                <p style={{ maxWidth: "600px", margin: "20px auto" }}>
                  Experience the power of Yaad Man Sea Moss – 100% wildcrafted and rich in nutrients to boost your health and vitality.
                </p>
              </section>
            }
          />
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
        </Routes>

        {/* Footer */}
        <footer
          style={{
            background: "#064e3b",
            color: "white",
            textAlign: "center",
            padding: "15px",
          }}
        >
          © {new Date().getFullYear()} Yaad Man Sea Moss – Caribbean Strength in Every Spoon.
        </footer>
      </div>
    </Router>
  );
}

export default YaadManSeaMoss;
