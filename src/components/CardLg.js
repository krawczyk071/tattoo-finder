import React, { useContext } from "react";
import { formatPrice } from "../utils/helpers";
import { FavContext } from "../context/FavContext";
import { CartContext } from "../context/CartContext";

const CardLg = ({ tat }) => {
  const [favorites, dispatchF] = useContext(FavContext);
  const [cart, dispatchC] = useContext(CartContext);

  return (
    <div className="card-lg">
      <div className="card-lg__photo">
        <img src={`./img/${tat.img}.jpg`} alt="" />
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
              <span className="tag">{t}</span>
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
                dispatchC({ type: "CART_REMOVE", payload: tat });
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> Remove from Cart
            </div>
          ) : (
            <button
              className="btn"
              onClick={(e) => {
                e.stopPropagation();
                dispatchC({ type: "CART_ADD", payload: tat });
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
            dispatchF({
              type: "TOGG_FAVORITE",
              payload: { tat: tat.id },
            });
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
