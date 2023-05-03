import React from "react";
import { formatPrice } from "../utils/helpers";
import { remove } from "../redux/features/cartSlice";
import { cld } from "../utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import styled from "styled-components";

const CartItem = ({ item, dispatch }) => {
  const myImage = cld.image(item.cid);
  myImage.resize(fill().width(100).height(100));
  return (
    <CartItemMain>
      <CartItemPhoto>
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "predominant-color" })]}
        />
      </CartItemPhoto>
      <h2>{item.name}</h2>
      <h2>{formatPrice(item.price)}</h2>

      <CartItemRemove onClick={() => dispatch(remove(item))}>
        <i className="fa-regular fa-circle-xmark"></i>
      </CartItemRemove>
    </CartItemMain>
  );
};

export default CartItem;

const CartItemMain = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgb(230, 230, 230);
  h2 {
    flex: 1 1 30%;
    padding: 1rem;
  }
`;
const CartItemRemove = styled.div`
  flex: 1 1 10%;
  text-align: center;
  cursor: pointer;
`;
const CartItemPhoto = styled.div`
  flex: 0 0 100px;
  width: 100px;
`;
