import React from "react";

const CardSm = ({ imgurl, showModal }) => {
  return (
    <div className="card-sm">
      <div className="card-sm__wrap">
        <img src={`./img/${imgurl}.jpg`} alt="" />
        <div className="card-sm__more" onClick={showModal}>
          <i className="fa-solid fa-magnifying-glass-plus"></i>
        </div>
      </div>
      <div className="card-sm__info">
        <h1>Name</h1>
        <h2>Votes: 234</h2>
        <div className="card-sm__fav">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
