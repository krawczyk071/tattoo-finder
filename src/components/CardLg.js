import React from "react";

const CardLg = () => {
  return (
    <div class="card-lg">
      <div class="card-lg__photo">
        <img src="./img/2.jpg" alt="" />
      </div>
      <div class="card-lg__info">
        <h1>Name</h1>
        <h2>Votes: 234</h2>
        <div class="card-lg__fav">
          <i class="fa-solid fa-heart"></i>
        </div>
        <button class="btn">Order</button>
      </div>
    </div>
  );
};

export default CardLg;
