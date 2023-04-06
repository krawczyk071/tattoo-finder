import React from "react";

const CardXl = () => {
  return (
    <div className="card-xl">
      <img src="./img/1.jpg" alt="" />
      <div className="card-xl__yesno">
        <div className="card-xl__no">
          <i className="fa-regular fa-circle-xmark"></i>
        </div>
        <div className="card-xl__yes">
          <i className="fa-regular fa-circle-check"></i>
        </div>
      </div>
    </div>
  );
};

export default CardXl;
