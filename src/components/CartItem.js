import React from "react";
import { formatPrice } from "../utils/helpers";
import { remove } from "../redux/features/cartSlice";
import { cld } from "../utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, placeholder } from "@cloudinary/react";

const CartItem = ({ item, dispatch }) => {
  const myImage = cld.image(item.cid);
  myImage.resize(fill().width(100).height(100));
  return (
    <div className="cart__item">
      <div className="cart__photo">
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "predominant-color" })]}
        />
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
