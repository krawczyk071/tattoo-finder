import React from "react";

const CartItem = () => {
  return (
    <div class="cart__item">
      <div class="cart__photo">
        <img src="./img/2.jpg" alt="" />
      </div>
      <input type="text" placeholder="Size" class="ipt cart__size" />
      <h2>12$</h2>
      <i class="fa-regular fa-circle-xmark"></i>
    </div>
  );
};

export default CartItem;
