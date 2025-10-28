import React, { useState } from "react";

function YaadManSeaMoss() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
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
        }}
      >
        <h1>Yaad Man Sea Moss</h1>
        <nav>
          <a href="#home" style={{ color: "white", marginRight: "15px" }}>
            Home
          </a>
          <a href="#about" style={{ color: "white", marginRight: "15px" }}>
            About
          </a>
          <a href="#products" style={{ color: "white", marginRight: "15px" }}>
            Products
          </a>
          <a href="#contact" style={{ color: "white" }}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "40px" }}>
          Natural Energy from the Caribbean Sea
        </h2>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Experience the power of Yaad Man Sea Moss – 100% wildcrafted and rich in nutrients to boost your health and vitality.
        </p>
      </section>

      {/* Products */}
      <section id="products" style={{ padding: "50px 20px" }}>
        <h3 style={{ textAlign: "center", fontSize: "30px" }}>Our Products</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            maxWidth: "800px",
            margin: "40px auto",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                background: "white",
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h4>{p.name}</h4>
              <p>{p.description}</p>
              <p style={{ fontWeight: "bold" }}>${p.price}</p>
              <button
                style={{
                  background: "#fbbf24",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      <section id="shop" style={{ padding: "50px 20px", background: "#ecfdf5" }}>
        <h3 style={{ textAlign: "center", fontSize: "30px" }}>Your Cart</h3>
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            Your cart is empty. Add some Yaad Man Sea Moss goodness!
          </p>
        ) : (
          <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            {cart.map((i, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #ccc",
                  padding: "10px 0",
                }}
              >
                <span>{i.name}</span>
                <span>${i.price}</span>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              <span>Total</span>
              <span>${cart.reduce((t, i) => t + i.price, 0)}</span>
            </div>
          </div>
        )}
      </section>

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
  );
}

export default YaadManSeaMoss;
