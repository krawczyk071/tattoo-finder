import React from "react";

import Cart from "../components/Cart";

const Book = () => {
  return (
    <div className="book">
      <div className="book__img">
        <img src="./img/pink.jpg" alt="" />
      </div>
      <Cart />
    </div>
  );
};

export default Book;
