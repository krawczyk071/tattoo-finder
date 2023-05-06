import React from "react";

import Cart from "../components/Cart";
import styled from "styled-components";

const Book = () => {
  return (
    <BookMain>
      <BookImg>
        <img src="./img/pink.jpg" alt="" />
      </BookImg>
      <Cart />
    </BookMain>
  );
};

export default Book;

const BookMain = styled.div`
  flex: 1;
  font: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    text-decoration: underline;
    color: var(--accent);
    text-decoration-color: var(--primary);
    text-decoration-thickness: 5px;
  }
`;
const BookImg = styled.div`
  max-width: 400px;
  img {
    height: 100%;
    display: block;
  }
`;
