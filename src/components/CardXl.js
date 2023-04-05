import React from "react";

const CardXl = () => {
  return (
    <div class="card-xl">
      <img src="./img/1.jpg" alt="" />
      <div class="card-xl__yesno">
        <div class="card-xl__no">
          <i class="fa-regular fa-circle-xmark"></i>
        </div>
        <div class="card-xl__yes">
          <i class="fa-regular fa-circle-check"></i>
        </div>
      </div>
    </div>
  );
};

export default CardXl;
