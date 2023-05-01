import React from "react";
import { formatPrice } from "../utils/helpers";
import { cld } from "../utils/cloudinary";
import { AdvancedImage, placeholder } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/favortiesSlice";
import { add, remove } from "../redux/features/cartSlice";

const CardLg = ({ tat }) => {
  const cart = useSelector((state) => state.cart);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const myImage = cld.image(tat.cid);
  myImage.resize(fill().width(750).height(750));

  return (
    <div className="card-lg">
      <div className="card-lg__photo">
        <AdvancedImage
          cldImg={myImage}
          plugins={[placeholder({ mode: "vectorize" })]}
        />
      </div>
      <div className="card-lg__info">
        <h1>{tat.name}</h1>
        <h2>author: {tat.author}</h2>
        <div className="card-lg__info__stat">
          <h2>Views: {tat.views}</h2>
          <h2>Likes: {tat.votes}</h2>
        </div>
        <div className="card-lg__info__tags">
          <h2>tags:</h2>
          <div className="card-lg__info__tags__cont">
            {tat.tags.split(",").map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <h2 className="card-lg__info__price">
          price: {formatPrice(tat.price)}
        </h2>
        <div className="card-lg__info__order">
          {cart.some((c) => c.id === tat.id) ? (
            <div
              className="card-lg__info__order__remove"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(remove(tat));
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
            </div>
          ) : (
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(add(tat));
              }}
            >
              Order
            </button>
          )}
        </div>

        {tat.firstOrder && (
          <div className="never">
            Never Ordered before <i className="fa-solid fa-hand-fist"></i>
          </div>
        )}
        <div
          className="card-lg__fav"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggle(tat.id));
          }}
        >
          {favorites.find((f) => f.id === tat.id)?.favorited ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLg;
