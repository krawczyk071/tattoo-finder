import React from "react";
import styled from "styled-components";
import { StyledButton } from "./styles/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/features/cartSlice";

const ModalOrder = ({ tat }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <CardModalInfoOrder>
      {cart.some((c) => c.id === tat.id) ? (
        <CardModalInfoOrderRemove
          onClick={(e) => {
            e.stopPropagation();
            dispatch(remove(tat));
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
        </CardModalInfoOrderRemove>
      ) : (
        <CardModalInfoBtn
          onClick={(e) => {
            e.stopPropagation();
            dispatch(add(tat));
          }}
        >
          Order
        </CardModalInfoBtn>
      )}
    </CardModalInfoOrder>
  );
};

export default ModalOrder;

const CardModalInfoOrder = styled.div`
  align-self: center;
`;

const CardModalInfoOrderRemove = styled.div`
  cursor: pointer;
`;
const CardModalInfoBtn = styled(StyledButton)`
  align-self: center;
`;
