import React from "react";

export default function CartPage({ cart }) {
  return (
    <div style={{ padding: "50px 20px", background: "#ecfdf5", color: "#064e3b" }}>
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
    </div>
  );
}
