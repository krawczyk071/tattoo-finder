import React from "react";

const CardLg = ({ tatObj }) => {
  return (
    <div className="card-lg">
      <div className="card-lg__photo">
        <img src={`./img/${tatObj.url}.jpg`} alt="" />
      </div>
      <div className="card-lg__info">
        <h1>Name</h1>
        <h2>Votes: 234</h2>
        <div className="card-lg__fav">
          <i className="fa-solid fa-heart"></i>
        </div>
        <button className="btn">Order</button>
      </div>
    </div>
  );
};

export default CardLg;
