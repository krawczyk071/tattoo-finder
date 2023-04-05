import React from "react";

import CardLg from "../components/CardLg";
import CardSm from "../components/CardSm";
import CardXl from "../components/CardXl";
import CartItem from "../components/CartItem";
import Person from "../components/Person";

const Homepage = () => {
  return (
    <section class="layout-lg">
      <div class="canvas">
        <CardSm />
      </div>
      <div class="modal">
        <CardLg />
      </div>
      <div class="vote">
        <div class="vote__card">
          <CardXl />
        </div>
        <div class="vote__top">
          <h1>Your top3:</h1>
          <div class="vote__cards">
            <CardSm />
          </div>
        </div>
      </div>
      <div class="book">
        <Person />
        <div class="cart">
          <CartItem />
          <h1>TOTAL:</h1>
          <button class="btn">Confirm</button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
