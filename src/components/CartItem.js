import React from "react";

const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__photo">
        <img src="./img/2.jpg" alt="" />
      </div>
      <input type="text" placeholder="Size" className="ipt cart__size" />
      <h2>12$</h2>
      <i className="fa-regular fa-circle-xmark"></i>
    </div>
  );
};

export default CartItem;
