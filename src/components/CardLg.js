import React from "react";
import { formatPrice } from "../utils/helpers";

const CardLg = ({ tat }) => {
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
        <button className="btn">Order</button>
        {tat.firstOrder && (
          <div className="never">
            Never Ordered before <i className="fa-solid fa-hand-fist"></i>
          </div>
        )}
        <div className="card-lg__fav">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default CardLg;
