import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";

const Cart = () => {
  const [cart, dispatch] = useContext(CartContext);
  const [buttonText, setButtonText] = useState("Confirm");

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setButtonText("Confirm");
      dispatch({ type: "CART_EMPTY" });
    }, 3000);
  }

  const total = cart.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  return cart.length === 0 ? (
    <h1>Cart is EMPTY</h1>
  ) : (
    <div className="cart">
      {cart.map((c) => (
        <CartItem item={c} dispatch={dispatch} />
      ))}
      <h1>TOTAL:</h1>
      <h1>{formatPrice(total)}</h1>

      <button className="btn" onClick={placeOrder}>
        {buttonText}
      </button>
    </div>
  );
};

export default Cart;
