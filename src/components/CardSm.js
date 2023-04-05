import React from "react";

const CardSm = () => {
  return (
    <div class="card-sm">
      <div class="card-sm__wrap">
        <img src="./img/1.jpg" alt="" />
        <div class="card-sm__more">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </div>
      </div>
      <div class="card-sm__info">
        <h1>Name</h1>
        <h2>Votes: 234</h2>
        <div class="card-sm__fav">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
