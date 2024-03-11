
import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {cartItems && cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={`https://via.placeholder.com/50?text=${item.name}`}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.name}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
