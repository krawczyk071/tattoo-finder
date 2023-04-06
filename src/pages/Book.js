import React from "react";

import CartItem from "../components/CartItem";
import Person from "../components/Person";

const Book = () => {
  return (
    <div className="book">
      <Person />
      <div className="cart">
        <CartItem />
        <h1>TOTAL:</h1>
        <button className="btn">Confirm</button>
      </div>
    </div>
  );
};

export default Book;
