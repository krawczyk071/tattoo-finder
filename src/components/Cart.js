import React from "react";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/helpers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/features/cartSlice";
import { StyledButton } from "./styles/Button.styled";
import styled from "styled-components";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("Confirm");

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      alert("Order placed!");
      setButtonText("Confirm");
      dispatch(clear());
    }, 3000);
  }

  const total = cart.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  return cart.length === 0 ? (
    <h1>Cart is EMPTY</h1>
  ) : (
    <CartMain>
      {cart.map((c) => (
        <CartItem item={c} dispatch={dispatch} />
      ))}
      <h1>TOTAL:</h1>
      <h2>{formatPrice(total)}</h2>

      <StyledButton onClick={placeOrder}>{buttonText}</StyledButton>
    </CartMain>
  );
};

export default Cart;

const CartMain = styled.div`
  width: 80%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 3px;
  h1 {
    font-weight: bold;
  }
`;
