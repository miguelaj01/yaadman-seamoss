import React from "react";

export default function ProductsPage({ products, addToCart }) {
  return (
    <div style={{ padding: "50px 20px", background: "#f7faf5", color: "#064e3b" }}>
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
    </div>
  );
}
