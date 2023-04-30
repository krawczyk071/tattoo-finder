import React from "react";
import { formatPrice } from "../utils/helpers";
import { remove } from "../redux/features/cartSlice";

const CartItem = ({ item, dispatch }) => {
  return (
    <div className="cart__item">
      <div className="cart__photo">
        <img src={`./img/${item.img}.jpg`} alt="" />
      </div>
      <h2>{item.name}</h2>
      <h2>{formatPrice(item.price)}</h2>

      <div
        className="cart__item__remove"
        onClick={() => dispatch(remove(item))}
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </div>
    </div>
  );
};

export default CartItem;
