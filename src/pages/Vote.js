import React from "react";

import CardSm from "../components/CardSm";

import CardXl from "../components/CardXl";

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
