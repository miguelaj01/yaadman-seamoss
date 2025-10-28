import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage";

function MainApp() {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    // Add the product
    setCart((prevCart) => [...prevCart, product]);

    // Show popup
    setShowPopup(true);

    // Hide popup and navigate to cart after 1.5 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/cart");
    }, 1500);
  };

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
    <div style={{ fontFamily: "Arial", background: "#f7faf5", color: "#064e3b" }}>
      {/* Header */}
      <header
        style={{
          background: "#065f46",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Yaad Man Sea Moss</h1>
        <nav>
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/products" style={{ color: "white", marginRight: "15px" }}>
            Products
          </Link>
          <Link to="/cart" style={{ color: "white" }}>
            Cart ({cart.length})
          </Link>
        </nav>
      </header>

      {/* Popup Notification */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: "#065f46",
            color: "white",
            padding: "15px 25px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 999,
            animation: "fadeInOut 1.5s ease-in-out",
          }}
        >
          ✅ Added to Cart!
        </div>
      )}

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
        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>

      {/* Footer */}
      <footer
        style={{
          background: "#064e3b",
          color: "white",
          textAlign: "center",
          padding: "15px",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Yaad Man Sea Moss – Caribbean Strength in Every Spoon.
      </footer>

      {/* Popup Animation */}
      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(-10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default function YaadManSeaMoss() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
