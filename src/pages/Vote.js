import React from "react";
import CardSm from "../components/CardSm";
import CardXl from "../components/CardXl";
import { imgnames, x, json32, pics, pics2 } from "../utils/data";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Vote = () => {
  return (
    <div className="vote">
      <div className="vote__card">
        <CardXl />
      </div>
      <div className="vote__top">
        <h1>Your top3:</h1>
        <div className="vote__cards">
          <CardSm />
        </div>
      </div>
    </div>
  );
};

export default Vote;
