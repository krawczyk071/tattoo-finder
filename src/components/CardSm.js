import React, { useContext, useEffect, useState } from "react";

import { FavContext } from "../context/FavContext";

const CardSm = ({ tat, showModal }) => {
  const [favorites, dispatch] = useContext(FavContext);

  return (
    <div className="card-sm">
      <div className="card-sm__wrap">
        <img src={`./img/${tat.img}.jpg`} alt="" />
        <div className="card-sm__more" onClick={showModal}>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </div>
      </div>
      <div className="card-sm__info">
        <h1>{tat.name}</h1>
        <h2>Votes: {tat.votes}</h2>
        <div
          className="card-sm__fav"
          onClick={() =>
            dispatch({
              type: "TOGG_FAVORITE",
              payload: { tat: tat.id },
            })
          }
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

export default CardSm;
