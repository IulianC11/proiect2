import React, { useState } from "react";
import Cart from "./Cart";

const CartButton = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleCart}>Coș ({items.length})</button>
      {isOpen && <Cart cartItems={items} />}
    </>
  );
};

export default CartButton;